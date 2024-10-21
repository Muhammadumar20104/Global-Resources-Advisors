import { searchParams } from '@/app/types/common';
import ClientLocalCounsel from '@/components/pages/client-local-counsel/ClientLocalCounsel';
import React from 'react';

const page = ({ searchParams: { slug, mode } }: { searchParams: searchParams }) => {
    const id = typeof slug === 'string' ? slug : undefined;

    const modeValue = typeof mode === 'string' ? mode : undefined;
    return (
        <div>
            <ClientLocalCounsel id={id} mode={modeValue} />
        </div>
    );
};

export default page;
