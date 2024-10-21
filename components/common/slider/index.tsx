'use client';

import React, { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { overview } from '@/app/dummy/overview';
import { overviewColors } from '@/app/constants/dashboard';
import { UpTrend } from '@/components/icons/Dashboard/UpTrend';
import { DownTrend } from '@/components/icons/Dashboard/DownTrend';

const CardSlider: React.FC = () => {
    const sliderRef = useRef<Slider | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(4);

    const overviewCards = overview.map((item, index) => {
        return index > 4 ? { ...item, ...overviewColors[index - 5] } : { ...item, ...overviewColors[index] };
    });

   const calculateSlidesToShow = (containerWidth: number) => {

        if (containerWidth >= 1800) {
            return 6;
        }
        if (containerWidth >= 1440) {
            return 5;
        } else if (containerWidth >= 1024) {
            return 4;
        } else if (containerWidth >= 768) {
            return 3;
        } else if (containerWidth >= 476) {
            return 2;
        } else {
            return 1;
        }
    };

    useEffect(() => {
        const container = containerRef.current;

        if (container) {
            const observer = new ResizeObserver((entries) => {
                for (let entry of entries) {
                    const width = entry.contentRect.width;
                    setSlidesToShow(calculateSlidesToShow(width));
                }
            });

            observer.observe(container);

            return () => {
                observer.disconnect();
            };
        }
    }, []);

    const settings = {
        slidesToShow,
        slidesToScroll: 1,
        infinite: true,
        autoplay: false,
        arrows: true,
        afterChange: (index: number) => setCurrentSlide(index),
    };

    return (
        <div ref={containerRef}>
            <div className="mx-auto w-full py-8 sm:p-0 p-2">
                <Slider ref={sliderRef} {...settings}>
                    {overviewCards.map((item, index) => (
                        <div
                            key={index}

                            className={` !max-[639px]:ps-2 flex flex-col rounded-[18px] border px-6 py-8
                                sm:!w-[260px] ${index == 1 || index == 6 ? `border-[#6960EC] bg-[#F1E6FF]` : `bg-[${item.bgColor}] border-[${item.borderColor}]`}
                                ${index == 3 || index == 8 ? `border-[#F82A5E] bg-[#FFF0F4]` : ``} `}
                            style={{ minWidth: '260px' }}
                        >
                            <p className="text-left font-inter text-sm font-normal text-charcoal mb-[18px]">{item.title}</p>
                            <div className="flex items-center justify-between gap-x-2">
                                <p className="mb-0 font-inter text-xl font-bold text-charcoal">{item.value}</p>
                                <div className="flex items-center gap-x-2">
                                    <p className="mb-0 font-inter text-xs font-normal text-charcoal">{item.difference}%</p>
                                    {item?.difference > 0 ? <UpTrend /> : <DownTrend />}
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default CardSlider;