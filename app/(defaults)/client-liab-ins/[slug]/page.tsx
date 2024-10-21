import { searchParams } from '@/app/types/common';
import ClientLiabIns from '@/components/pages/client-liab-ins/ClientLiabIns';
import React from 'react';

const page = ({ searchParams: { slug, mode } }: { searchParams: searchParams }) => {
    const id = typeof slug === 'string' ? slug : undefined;

    const modeValue = typeof mode === 'string' ? mode : undefined;
    return (
        <div>
            <ClientLiabIns id={id} mode={modeValue} />
        </div>
    );
};

export default page;
