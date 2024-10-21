import React from 'react';
import AccountDebtor from '@/components/pages/account-debtor/AccountDebtor';
import type { searchParams } from '@/app/types/common';
import ClientAgreementForm from '@/components/pages/client-agreement/ClientAgreementForm';

const page = ({ searchParams: { slug, mode } }: { searchParams: searchParams }) => {
    const id = typeof slug === 'string' ? slug : undefined;
    const modeValue = typeof mode === 'string' ? mode : undefined;

    return (
        <div>
            <ClientAgreementForm id={id} mode={modeValue} />
        </div>
    );
};

export default page;
