import React from 'react';
import type { searchParams } from '@/app/types/common';
import Local_Counsel from '@/components/pages/local-counsel/LocalCounsel';

const page = ({ searchParams: { slug, mode } }: { searchParams: searchParams }) => {
    const id = typeof slug === 'string' ? slug : undefined;
    const modeValue = typeof mode === 'string' ? mode : undefined;

    return (
        <div>
            <Local_Counsel id={id} mode={modeValue} />
        </div>
    );
};

export default page;
