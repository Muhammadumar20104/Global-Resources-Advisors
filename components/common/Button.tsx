"use client"
import type { button } from '@/app/types/common';
import React from 'react';

export const Button = ({ className, value, onClick ,icon}: button) => {
    return (
        <button className={`h-[52px] w-full flex items-center gap-2 rounded-xl bg-blueroyal px-8 py-2 text-base font-normal text-white  ${className}`} onClick={onClick}>
            {icon}
            {value}
        </button>
    );
};
