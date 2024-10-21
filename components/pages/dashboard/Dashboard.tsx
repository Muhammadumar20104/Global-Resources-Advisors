'use client';
import React, { useState } from 'react';
import { filterDropDown } from '@/app/constants/dashboard';
import { DropDown } from '@/components/common/DropDown';
import { DownArrow } from '@/components/icons/Dashboard/DownArrow';
import { DashboardClients } from './Clients';
import { RightArrow } from '@/components/icons/Dashboard/RightArrow';
import Link from 'next/link';
import CardSlider from '@/components/common/slider';
import FormDropDown from '@/components/common/formdropdown/FormDropDown';
import { useRouter } from 'next/navigation';

export const Dashboard = () => {
    const { push } = useRouter();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const handleDropdownClick = (item: string) => {
        // push(item.link);
    };
    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };
    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };
    return (
        <div className="px-4 py-3 sm:px-8 sm:py-6">
            <div className="flex flex-col gap-y-6">
                <div className="flex justify-between">
                    <h2 className="ps-6 font-inter text-lg font-bold text-charcoal">Overview</h2>
                    <div className="relative flex w-40 justify-end">
                        <FormDropDown formLinks={filterDropDown} onClick={handleDropdownClick} name="Today" isOpen={isDropdownOpen} toggleDropdown={toggleDropdown} close={closeDropdown} />
                    </div>
                </div>
                <CardSlider />
                <div className="flex justify-between">
                    <h2 className="ps-6 font-inter text-lg font-bold text-charcoal">Clients</h2>
                    <div className="flex items-center">
                        <Link href="/clients" className="flex cursor-pointer items-center gap-x-1 pe-6 font-inter text-base font-normal text-charcoal">
                            View all
                            <RightArrow />
                        </Link>
                    </div>
                </div>
                <DashboardClients />
            </div>
        </div>
    );
};
