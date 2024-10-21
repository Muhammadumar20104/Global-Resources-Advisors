import { searchParams } from '@/app/types/common';
import ClientLicensing from '@/components/pages/client-licensing/ClientLicensing';
import React from 'react';

const page = ({ searchParams: { slug, mode } }: { searchParams: searchParams }) => {
    const id = typeof slug === 'string' ? slug : undefined;

    const modeValue = typeof mode === 'string' ? mode : undefined;
    return (
        <div>
            <ClientLicensing id={id} mode={modeValue} />
        </div>
    );
};

export default page;
