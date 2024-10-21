import Interaction from '@/components/pages/interaction/Interaction';
import React from 'react';
import type { searchParams } from '@/app/types/common';

const page = ({ searchParams: { slug, mode } }: { searchParams: searchParams }) => {
    const id = typeof slug === 'string' ? slug : undefined;
    const modeValue = typeof mode === 'string' ? mode : undefined;

    return (
        <div>
            <Interaction id={id} mode={modeValue} />
        </div>
    );
};

export default page;
