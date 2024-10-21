import { searchParams } from '@/app/types/common';
import MCA3rdParty from '@/components/pages/mca-3rd-party/MCA3rdParty';
import React from 'react';

const page = ({ searchParams: { slug, mode } }: { searchParams: searchParams }) => {
    const id = typeof slug === 'string' ? slug : undefined;
   
    const modeValue = typeof mode === 'string' ? mode : undefined;
    return (
        <div>
            <MCA3rdParty id={id} mode={modeValue} />
        </div>
    );
};

export default page;
