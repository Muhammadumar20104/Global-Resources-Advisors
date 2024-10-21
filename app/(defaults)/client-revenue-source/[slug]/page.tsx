import { searchParams } from '@/app/types/common';
import ClientRevenueSource from '@/components/pages/client-revenue-source/ClientRevenueSource';
import React from 'react';

const page = ({ searchParams: { slug, mode } }: { searchParams: searchParams }) => {
    const id = typeof slug === 'string' ? slug : undefined;

    const modeValue = typeof mode === 'string' ? mode : undefined;
    return (
        <div>
            <ClientRevenueSource id={id} mode={modeValue} />

        </div>
    );
};

export default page;
