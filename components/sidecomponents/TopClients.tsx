import React, { useState } from 'react';
import NotificationPanel from '../layouts/NotificanPanel';
import { DownArrow } from '../icons/Dashboard/DownArrow';
import { DropDown } from '../common/DropDown';
import { sortClients } from '@/app/constants/dashboard';
import Image from 'next/image';
import { recentlyAddedClients, topClients } from '@/app/dummy/topClients';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

export const TopClients = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const { push } = useRouter();
    const handleRowClick = (slug: number) => {
        localStorage.removeItem('key');
        push(`/clients/${slug}?mode=view`);
    };

    const pathname = usePathname().split('/')[2];

    const dropdownClick = (item?: string) => {
        setShowDropdown(!showDropdown);
    };
    const data = pathname ? recentlyAddedClients : topClients;

    return (
        <NotificationPanel>
            <div className="flex flex-col gap-y-6">
                <div className="flex xs:justify-between px-3 sm:px-6 xs:flex-row ">
                    <h3 className="mb-0 font-inter text-sm font-normal text-charcoal">{pathname ? 'Recently Added' : 'Top 10 Clients'}</h3>
                    {!pathname ? (
                        <div className="relative translate-x-9 xs:translate-x-0 w-40 text-end">
                            <p className="absolute right-0 mb-0 flex cursor-pointer items-center gap-x-1 font-inter xs:text-base text-sm font-medium xs:font-normal text-charcoal xs:right-0 " onClick={() => dropdownClick()}>
                                Sort by
                                <DownArrow />
                            </p>
                            {showDropdown ? <DropDown data={sortClients} dropdownClick={dropdownClick} /> : ''}{' '}
                        </div>
                    ) : (
                        ''
                    )}
                </div>
                <div className="flex flex-col gap-y-4">
                    {data.map((item, index) => (
                        <div key={index} className="flex cursor-pointer gap-x-4" onClick={() => handleRowClick(index + 1)}>
                            <Image src={item.image} alt={item.name} width={40} height={40} className="rounded-full" />
                            <div>
                                <h3 className="font-inter text-base font-normal text-charcoal">{item.name}</h3>
                                <div className="flex gap-x-2">
                                    {!pathname ? <p className="font-inter text-xs font-normal text-darkgrey">Joining Date:</p> : ''}
                                    <p className="font-inter text-xs font-normal text-lightgrey">{item.joiningDate}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </NotificationPanel>
    );
};
