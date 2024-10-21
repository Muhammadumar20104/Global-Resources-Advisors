import Link from 'next/link';
import React, { useState } from 'react';

export const SidebarLinks = ({ item, index, activePath }: { item: { name: string; icon: JSX.Element; link: string; active: JSX.Element }; index: number; activePath: string }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link
            href={item.link}
            key={index}
            className={`flex cursor-pointer items-center gap-x-3 rounded-xl hover:bg-offwhite ${'/' + activePath === item.link ? 'bg-offwhite' : ''} px-6 py-2`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {isHovered ? item.active : '/' + activePath === item.link ? item.active : item.icon}
            <p className="mb-0 font-inter text-base font-normal text-charcoal">{item.name}</p>
        </Link>
    );
};
