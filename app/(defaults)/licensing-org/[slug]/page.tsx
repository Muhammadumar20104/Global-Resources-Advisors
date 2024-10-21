import { searchParams } from '@/app/types/common';
import LicensingOrg from '@/components/pages/licensing-org/LicensingOrg';
import React from 'react';

const page = ({ searchParams: { slug, mode } }: { searchParams: searchParams }) => {
    const id = typeof slug === 'string' ? slug : undefined;
   
    const modeValue = typeof mode === 'string' ? mode : undefined;
    return (
        <div>
            <LicensingOrg id={id} mode={modeValue} />
        </div>
    );
};

export default page;
