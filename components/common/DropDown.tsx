import React, { useEffect, useRef, useState } from 'react';
import { DownArrow } from '../icons/Dashboard/DownArrow';

export const DropDown = ({ dropdownClick, data }: { dropdownClick: (item: string) => void; data: string[] }) => {
    return (
        <div className="absolute right-0 top-6 z-50 flex min-w-[100px] max-w-6xl flex-col rounded-xl border border-slate-100 bg-[#f5f5f5]">
            {data?.map((item, index) => (
                <p
                    key={index}
                    className={`mb-0 flex cursor-pointer items-center gap-x-1 p-2 ${index == 3 ? '' : 'pb-0'} pe-6  text-base font-normal text-charcoal hover:bg-white`}
                    onClick={() => dropdownClick(item)}
                >
                    {item}
                </p>
            ))}
        </div>
    );
};

interface SimpleDropdownProps {
    data: string[];
    label: string;
    onHandleClick: (item: string) => void;
}

const SimpleDropdown: React.FC<SimpleDropdownProps> = ({ data, label, onHandleClick }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState<string>('');
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleToggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleItemClick = (item: string) => {
        setSelectedValue(item);
        onHandleClick(item);
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative flex flex-col gap-2">
            <label htmlFor="" className="font-notoSans text-sm font-normal leading-[16.8px] text-lightgrey ">
                {label}
            </label>
            <div className="relative cursor-pointer" ref={dropdownRef}>
                <input
                    type="text"
                    placeholder={label}
                    value={selectedValue}
                    onClick={handleToggleDropdown}
                    className={`w-full cursor-pointer rounded-xl border border-skylight bg-mintlight px-[22px] py-[10px] text-base font-normal outline-none
    ${selectedValue ? 'text-charcoal' : 'text-lightgrey'}`}
                    readOnly
                />
                <div className={`absolute right-[22px] top-1/3  bg-mintlight transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : 'rotate-0'}`} onClick={handleToggleDropdown}>
                    <DownArrow />
                </div>
                {isOpen && (
                    <div className="absolute z-30 mt-1 w-full rounded-xl border border-skylight bg-white">
                        {data.map((item, index) => (
                            <div key={index} onClick={() => handleItemClick(item)} className="cursor-pointer rounded-xl px-[22px] py-[10px] hover:bg-gray-100">
                                {item}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SimpleDropdown;
