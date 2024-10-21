import { AccountDebtor } from '@/components/icons/sidebar/AccountDebtor';
import { AccountDebtorActive } from '@/components/icons/sidebar/AccountDebtorActive';
import { ClientAgreement } from '@/components/icons/sidebar/ClientAgreement';
import { ClientAgreementActive } from '@/components/icons/sidebar/ClientAgreementActive';
import { ClientLiabIns } from '@/components/icons/sidebar/ClientLiabIns';
import { ClientLiabInsActive } from '@/components/icons/sidebar/ClientLiabInsActive';
import { ClientRevSource } from '@/components/icons/sidebar/ClientRevSource';
import { ClientRevSourceActive } from '@/components/icons/sidebar/ClientRevSourceActive';
import { Clients } from '@/components/icons/sidebar/Clients';
import { ClientsActive } from '@/components/icons/sidebar/ClientsActive';
import { GeneralLiabIns } from '@/components/icons/sidebar/GeneralLiabIns';
import { GeneralLiabInsActive } from '@/components/icons/sidebar/GeneralLiabInsActive';
import { Interaction } from '@/components/icons/sidebar/Interaction';
import { InteractionActive } from '@/components/icons/sidebar/InteractionActive';
import { LicenseThirdParty } from '@/components/icons/sidebar/LicenseThirdParty';
import { LicenseThirdPartyActive } from '@/components/icons/sidebar/LicenseThirdPartyActive';
import { LicensingOrg } from '@/components/icons/sidebar/LicensingOrg';
import { LicensingOrgActive } from '@/components/icons/sidebar/LicensingOrgActive';
import { Litigation } from '@/components/icons/sidebar/Litigation';
import { LitigationActive } from '@/components/icons/sidebar/LitigationActive';
import { LocalCounsel } from '@/components/icons/sidebar/LocalCounsel';
import { LocalCounselActive } from '@/components/icons/sidebar/LocalCounselActive';
import { MCACompany } from '@/components/icons/sidebar/MCACompany';
import { MCACompanyActive } from '@/components/icons/sidebar/MCACompanyActive';
import { MCALoan } from '@/components/icons/sidebar/MCALoan';
import { MCALoanActive } from '@/components/icons/sidebar/MCALoanActive';
import { Onboarding } from '@/components/icons/sidebar/Onboarding';
import { OnboardingActive } from '@/components/icons/sidebar/OnboardingActive';
import { ProductActive } from '@/components/icons/sidebar/ProductActive';
import { Products } from '@/components/icons/sidebar/Products';
import { RevenueSource } from '@/components/icons/sidebar/RevenueSource';
import { RevenueSourceActive } from '@/components/icons/sidebar/RevenueSourceActive';
import { Settlement } from '@/components/icons/sidebar/Settlement';
import { SettlementActive } from '@/components/icons/sidebar/SettlementActive';
import { Underwriting } from '@/components/icons/sidebar/Underwriting';
import { UnderwritingActive } from '@/components/icons/sidebar/UnderwritingActive';

export const sidebarLinks = {
    core: [
        {
            name: 'Clients',
            icon: <Clients />,
            active: <ClientsActive />,
            link: '/clients',
        },
        {
            name: 'Interaction',
            icon: <Interaction />,
            active: <InteractionActive />,
            link: '/interaction',
        },
        {
            name: 'Underwriting',
            icon: <Underwriting />,
            active: <UnderwritingActive />,
            link: '/underwriting',
        },
        {
            name: 'Onboarding',
            icon: <Onboarding />,
            link: '/onboarding',
            active: <OnboardingActive />,
        },
    ],
    operational: [
        {
            name: 'Products',
            icon: <Products />,
            active: <ProductActive />,
            link: '/products',
        },
        {
            name: 'MCA Company',
            icon: <MCACompany />,
            active: <MCACompanyActive />,
            link: '/mca-company',
        },
        {
            name: 'MCA 3rd Party',
            icon: <LicenseThirdParty />,
            link: '/mca-3rd-party',
            active: <LicenseThirdPartyActive />,
        },
        {
            name: 'Local Counsel',
            icon: <LocalCounsel />,
            active: <LocalCounselActive />,
            link: '/local-counsel',
        },
        {
            name: 'Client Lcl Cnsl',
            icon: <LocalCounsel />,
            active: <LocalCounselActive />,
            link: '/client-local-counsel-relationship',
        },
        {
            name: 'MCA Loan',
            icon: <MCALoan />,
            active: <MCALoanActive />,
            link: '/mca-loan',
        },
        {
            name: 'Settlement',
            icon: <Settlement />,
            active: <SettlementActive />,
            link: '/settlement',
        },
        {
            name: 'Litigation',
            icon: <Litigation />,
            active: <LitigationActive />,
            link: '/litigation',
        },
        {
            name: 'Account Debtor',
            icon: <AccountDebtor />,
            active: <AccountDebtorActive />,
            link: '/account-debtor',
        },

        // {
        //     name: 'Client Agreement',
        //     icon: <ClientAgreement />,
        //     link: '/client-agreement',
        //     active: <ClientAgreementActive />,
        // },

        {
            name: 'Revenue Source',
            icon: <RevenueSource />,
            link: '/revenue-source',
            active: <RevenueSourceActive />,
        },
        {
            name: 'Client Rev Source',
            icon: <ClientRevSource />,
            link: '/client-revenue-source',
            active: <ClientRevSourceActive />,
        },
        {
            name: 'Licensing Org',
            icon: <LicensingOrg />,
            link: '/licensing-org',
            active: <LicensingOrgActive />,
        },
        {
            name: 'Client Lic Org',
            icon: <LicenseThirdParty />,
            link: '/client-licensing',
            active: <LicenseThirdPartyActive />,
        },
        {
            name: 'General Liab Ins',
            icon: <GeneralLiabIns />,
            link: '/general-liability-ins',
            active: <GeneralLiabInsActive />,
        },
        { name: 'Client Liab Ins', icon: <ClientLiabIns />, link: '/client-liab-ins', active: <ClientLiabInsActive /> },
    ],
};
