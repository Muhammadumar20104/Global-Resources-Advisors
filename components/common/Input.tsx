import type { inputField } from '@/app/types/common';
import React from 'react';

export const Input = ({ type, placeholder, className, onChange, value, disabled }: inputField) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className={`w-full rounded-xl border border-skylight bg-mintlight px-[22px] py-2.5 text-base font-normal text-charcoal outline-none ${className} `}
            onChange={onChange}
            value={value}
            disabled={disabled}
        />
    );
};
