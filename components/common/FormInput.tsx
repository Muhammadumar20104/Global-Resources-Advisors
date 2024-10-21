import type { inputFieldForm } from '@/app/types/common';
import React from 'react';


export const FormInput = ({ type, placeholder, className, onChange, value, name, label, isTextArea, icon, disabled, cap = false }: inputFieldForm) => {
    const capitalizeFirstLetterOfEachWord = (label: string) => {
        return label
            .split(' ')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
    };
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor="" className="font-notoSans text-sm text-lightgrey font-normal leading-[16.8px] ">
                {cap ? label : capitalizeFirstLetterOfEachWord(label || '')}
            </label>
            {isTextArea ? (
                <textarea
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className={`w-full rounded-xl border border-skylight bg-mintlight px-[22px] py-[10px]  text-base font-normal text-charcoal outline-none ${className} `}
                    rows={4} // rows can be adjusted as needed
                    disabled={disabled}
                />
            ) : (
                <div className="relative">
                    <div className="absolute right-[22px] top-1/3 z-20 bg-mintlight">{icon}</div>
                    <input
                        type={type}
                        placeholder={placeholder}
                        name={name}
                        className={`w-full rounded-xl  border border-skylight bg-mintlight px-[22px] py-[10px] text-base  font-normal text-charcoal !placeholder-lightgrey outline-none ${className} `}
                        onChange={onChange}
                        value={value}
                        disabled={disabled}
                    />
                </div>
            )}
        </div>
    );
};
