import React from 'react';
import type { searchParams } from '@/app/types/common';
import Litigation from '@/components/pages/litigation/Litigation';

const page = ({ searchParams: { slug, mode } }: { searchParams: searchParams }) => {
    const id = typeof slug === 'string' ? slug : undefined;
    const modeValue = typeof mode === 'string' ? mode : undefined;

    return (
        <div>
            <Litigation id={id} mode={modeValue} />
        </div>
    );
};

export default page;
