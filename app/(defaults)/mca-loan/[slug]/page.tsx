import React from 'react';
import type { searchParams } from '@/app/types/common';
import MCA_Loan from '@/components/pages/mca-loan/MCALoan';

const page = ({ searchParams: { slug, mode } }: { searchParams: searchParams }) => {
    const id = typeof slug === 'string' ? slug : undefined;
    const modeValue = typeof mode === 'string' ? mode : undefined;

    return (
        <div>
            <MCA_Loan id={id} mode={modeValue} />
        </div>
    );
};

export default page;
