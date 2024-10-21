import React from 'react';
import type { searchParams } from '@/app/types/common';
import ClientForm from '@/components/pages/clients/ClientForm';

const page = ({ searchParams: { slug, mode } }: { searchParams: searchParams }) => {
    const id = typeof slug === 'string' ? slug : undefined;
    const modeValue = typeof mode === 'string' ? mode : undefined;

    return (
        <div>
            <ClientForm id={id} mode={modeValue} />
        </div>
    );
};

export default page;
