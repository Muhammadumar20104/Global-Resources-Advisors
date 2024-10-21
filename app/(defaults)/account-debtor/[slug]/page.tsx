import React from 'react';
import AccountDebtor from '@/components/pages/account-debtor/AccountDebtor';
import type { searchParams } from '@/app/types/common';

const page = ({ searchParams: { slug, mode } }: { searchParams: searchParams }) => {
    const id = typeof slug === 'string' ? slug : undefined;
    const modeValue = typeof mode === 'string' ? mode : undefined;

    return (
        <div>
            <AccountDebtor id={id} mode={modeValue} />
        </div>
    );
};

export default page;
