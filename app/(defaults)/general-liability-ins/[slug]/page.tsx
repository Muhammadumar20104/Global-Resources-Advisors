import { searchParams } from '@/app/types/common';
import GeneralLiability from '@/components/pages/general-liability-ins/GeneralLiability';
import React from 'react';

const page = ({ searchParams: { slug, mode } }: { searchParams: searchParams }) => {
    const id = typeof slug === 'string' ? slug : undefined;

    const modeValue = typeof mode === 'string' ? mode : undefined;
    return (
        <div>
            <GeneralLiability id={id} mode={modeValue} />
        </div>
    );
};

export default page;