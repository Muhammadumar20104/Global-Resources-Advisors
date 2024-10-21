import React, { useState, useRef, useEffect } from 'react';
import { DownArrow } from '@/components/icons/Dashboard/DownArrow';
import { FormDropDownProps, FormLink } from '@/app/types/common';

const FormDropDown: React.FC<FormDropDownProps> = ({ formLinks, onClick, name, isOpen, toggleDropdown, close }) => {
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [selectedValue, setSelectedValue] = useState<string>(name ?? '');

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                close();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [close]);

    const handleSelect = (item: string) => {
        setSelectedValue(item); // Set the selected value
        onClick(item); // Call the onClick function passed as prop
        close(); // Close the dropdown after selection
    };

    const renderLinkItem = (item: FormLink | string) => {
        if (typeof item === 'string') {
            return (
                <button
                    key={item}
                    onClick={() => handleSelect(item)} // Update selected value on click
                    className="block w-full px-4 py-2 text-start text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100"
                >
                    {item}
                </button>
            );
        } else {
            return (
                <button
                    key={item.label}
                    onClick={() => handleSelect(item.label)} // Update selected value on click
                    className={`block w-full px-4 py-2 text-start text-sm ${item.isDisabled ? 'cursor-not-allowed text-gray-400' : 'text-gray-700 hover:bg-gray-100 focus:bg-gray-100'}`}
                    disabled={item.isDisabled}
                >
                    {item.label}
                </button>
            );
        }
    };

    return (
        <div ref={dropdownRef} className="relative text-left">
            <div className="flex h-full items-center">
                <button
                    onClick={toggleDropdown}
                    className="inline-flex h-full w-full items-center justify-center gap-x-1.5 rounded-xl bg-white px-3 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                    {selectedValue} {/* Show selected value */}
                    <DownArrow />
                </button>
            </div>

            <div
                className={`absolute right-0 z-[999] mt-2 w-36 origin-top-right transform divide-y divide-gray-100 rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-300 ease-in-out ${
                    isOpen ? 'scale-100 opacity-100' : 'pointer-events-none scale-95 opacity-0'
                }`}
            >
                {formLinks?.map((item) => renderLinkItem(item))}
            </div>
        </div>
    );
};

export default FormDropDown;
