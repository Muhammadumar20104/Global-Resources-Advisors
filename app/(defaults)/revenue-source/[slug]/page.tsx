import { searchParams } from '@/app/types/common';
import RevenueSource from '@/components/pages/revenue-source/RevenueSource';
import React from 'react';

const page = ({ searchParams: { slug, mode } }: { searchParams: searchParams }) => {
    const id = typeof slug === 'string' ? slug : undefined;

    const modeValue = typeof mode === 'string' ? mode : undefined;
    return (
        <div>
            <RevenueSource id={id} mode={modeValue} />
        </div>
    );
};

export default page;
