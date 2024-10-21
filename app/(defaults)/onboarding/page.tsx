import React from 'react';
import { McaTable } from '@/components/pages/mca-company/MCATables';
import Onboarding from '@/components/pages/onboarding/Onboarding';
import { OnboardingTable } from '@/components/pages/onboarding/OnboardingTable';

function page() {
    return (
        <div>
            {/* <MCA_Company/> */}
            <OnboardingTable />
        </div>
    );
}

export default page;
