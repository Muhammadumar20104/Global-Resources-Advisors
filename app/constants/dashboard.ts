import { clientAccountData } from '../dummy/accountDebtor';
import { clientAgreementData } from '../dummy/clientAgreement';
import { clientLiabInsData } from '../dummy/clientLiabIns';
import { licenseDetailsData } from '../dummy/clientLicensing';
import { clientRevenuData } from '../dummy/clientRevenueSource';
import { allClients } from '../dummy/clients';
import { generealLiabilityInsData } from '../dummy/generalLiabilityIns';
import { interactionData } from '../dummy/interaction';
import { licenseData } from '../dummy/licensingOrg';
import { clientMcaLitigationData } from '../dummy/litigation';
import { localCounselDetailsData } from '../dummy/localCounselData';
import { mCA3rdParty } from '../dummy/mCA3rdParty';
import { mcaData } from '../dummy/mcCompany';
import { clientLoanData } from '../dummy/mcLoan';
import { onBoardingData } from '../dummy/onBoarding';
import { productData } from '../dummy/product';
import { revenueSourceData } from '../dummy/revenueSource';
import { clientMcaSettlementData } from '../dummy/settlement';
import { underWritingData } from '../dummy/underwritings';

export const overviewColors = [
    {
        bgColor: '#EBF9F5',
        borderColor: '#38C79C',
    },
    {
        bgColor: '#F1E6FF',
        borderColor: '#6960EC',
    },
    {
        bgColor: '#FFEEE6',
        borderColor: '#FFA880',
    },
    {
        bgColor: '#FFF0F4',
        borderColor: '#F82A5E',
    },
    {
        bgColor: '#DCF3FE',
        borderColor: '#0398E2',
    },
];
export const filterDropDown = ['Today', 'Yesterday', 'Last Week', 'Last Month'];
export const formLinks = [
    { link: '/products/0?mode=edit', label: 'Product', isDisabled: false },
    { link: '/interaction/0?mode=edit', label: 'Interaction', isDisabled: false },
    { link: '/underwriting/0?mode=edit', label: 'Underwriting', isDisabled: false },
    { link: '/local-counsel/0?mode=edit', label: 'Local Counsel', isDisabled: false },
    { link: '/mca-company/0?mode=edit', label: 'MCA Company', isDisabled: false },
    { link: '/mca-loan/0?mode=edit', label: 'MCA Loan', isDisabled: false },
    { link: '/onboarding/0?mode=edit', label: 'Onboarding', isDisabled: false },
    { link: '/account-debtor/0?mode=edit', label: 'Acc Debtors', isDisabled: false },
    { link: '/revenue-source/0?mode=edit', label: 'Rev Source Cos', isDisabled: false },
    { link: '/licensing-org/0?mode=edit', label: 'Licensing Info', isDisabled: false },
    { link: '/general-liability-ins/0?mode=edit', label: 'Liabillity Ins Co', isDisabled: false },
];
export const sortClients = ['Name', 'Joining Date'];
export const badgeBgColors = {
    pending: '#FFF9EB',
    completed: '#EBF9F5',
    onHold: 'bg-red-500 text-red-800',
};
export const badgeBorderColors = {
    Pending: 'bg-yellow-500 text-yellow-800',
    Approved: 'bg-green-500 text-green-800',
    Rejected: 'bg-red-500 text-red-800',
};
export const searchOption = [
    {
        name: 'clients',
        data: allClients,
    },
    {
        name: 'interaction',
        data: interactionData,
    },
    {
        name: 'underwriting',
        data: underWritingData,
    },
    {
        name: 'products',
        data: productData,
    },
    {
        name: 'mca-company',
        data: mcaData,
    },
    {
        name: 'mca-loan',
        data: clientLoanData,
    },
    {
        name: 'settlement',
        data: clientMcaSettlementData,
    },
    {
        name: 'litigation',
        data: clientMcaLitigationData,
    },
    {
        name: 'client-agreement',
        data: clientAgreementData,
    },
    {
        name: 'account-debtor',
        data: clientAccountData,
    },
    {
        name: 'client-local-counsel-relationship',
        data: localCounselDetailsData,
    },
    {
        name: 'local-counsel',
        data: localCounselDetailsData,
    },
    {
        name: 'client-local-counsel-relationship',
        data: localCounselDetailsData,
    },
    {
        name: 'onboarding',
        data: onBoardingData,
    },
    {
        name: 'mca-3rd-party',
        data: mCA3rdParty,
    },
    {
        name: 'revenue-source',
        data: revenueSourceData,
    },
    {
        name: 'client-revenue-source',
        data: clientRevenuData,
    },
    {
        name: 'licensing-org',
        data: licenseData,
    },
    {
        name: 'client-licensing',
        data: licenseDetailsData,
    },
    {
        name: 'general-liability-ins',
        data: generealLiabilityInsData,
    },
    {
        name: 'client-liab-ins',
        data: clientLiabInsData,
    },
];
export enum MCA_COM_NAME {
    RAPID_FUNDING = 'Rapid Funding Group',
    CAPITAL_FLOW = 'Capital Flow Partners',
    SYNERGY_ADVANCE = 'Synergy Advance Solutions',
    MERCHANT_BOOST = 'Merchant Boost Funding',
    PRIME_SYNDICATE = 'Prime Syndicate Capital',
    ASCENT_FINANCIAL = 'Ascent Financial Group',
    VELOCITY_CASH = 'Velocity Cash Solutions',
    STREAMLINE_CAPITAL = 'Streamline Capital Partners',
}
export enum INTERACTION_MEDIA {
    EMAIL = 'email',
    PHONE = 'phone',
    TEXT = 'text',
}
export enum SETTLEMENT_STATUS {
    NONE = 'None',
    NOT_STARTED = 'Not Started',
    IN_PROCESS = 'In Process',
    SETTLED = 'Settled',
    SETTLEMENT_BREACH = 'Settlement Breach',
}
export enum MCA_COLLABORATION_LEVEL {
    HIGH = 'High',
    MEDIUM = 'Medium',
    LOW = 'Low',
}
export enum THIRD_PARTY_TYPE {
    LAW_FIRM = 'Law firm',
    COLLECTION_AGENCY = 'Collection Agency',
    OTHER = 'Other',
}
export enum LICENSE_TYPE {
    CONSTRUCTION = 'Construction',
    MEDICAL = 'Medical',
}
export enum LICENSING_ORG_NAME {
    BUILDING_REGULATORS_ASSOCIATION = 'Building Regulators Association',
    HEALTHCARE_ACcreditation_BOARD = 'Healthcare Accreditation Board',
    INDUSTRY_COMPLIANCE_AUTHORITY = 'Industry Compliance Authority',
    PROFESSIONAL_STANDARDS_COUNCIL = 'Professional Standards Council',
}
export enum OFFER_GRA_REP {
    BRETT = 'Brett',
    BRIDGET = 'Bridget',
    CHRIS = 'Chris',
    TAYLOR = 'Taylor',
}
export enum OFFER_TYPE {
    OFFER_PROFFERED = 'Offer proffered',
    OFFER_RECEIVED = 'Offer received',
    COUNTER_PROFFERED = 'Counter proffered',
    COUNTER_RECEIVED = 'Counter received',
}
export enum RELATIONSHIP_TYPE {
    SUBCONTRACTED_BY = 'subcontracted by',
    PARTNERED_WITH = 'partnered with',
}
export enum TYPE_OF_CONTRACT {
    CASH_ADVANCE = 'Cash Advance',
    CASH_ADVANCE_RENEWAL = 'Cash Advance Renewal',
    CONSOLIDATION = 'Consolidation',
    REVERSE_CONSOLIDATION = 'Reverse Consolidation',
    REVOLVING_LINE_OF_CREDIT = 'Revolving Line of Credit',
}
export enum PAYMENT_FREQUENCY {
    WEEKLY = 'weekly',
    BI_WEEKLY = 'bi-weekly',
    MONTHLY = 'monthly',
}
export enum PAYMENT_STATUS {
    ACTIVE = 'Active',
    STOPPED = 'Stopped',
    IN_DEFAULT = 'In Default',
}
export enum LIEN_STATUS {
    ACTIVE_LIEN = 'Active Lien(s)',
    NO_ACTIVE_LIEN = 'No Active Lien(s)',
}
export enum SETTLEMENT_PRIORITY {
    URGENT = 'Urgent',
    HIGH = 'High',
    MEDIUM = 'Medium',
    LOW = 'Low',
}
export enum EVENT_TYPE {
    SUMMONS_COMPLAINT = 'Summons + Complaint',
    ANSWER_COMPLAINT = 'Answer Complaint',
    MSJ = 'MSJ',
    SCHEDULING_CONFERENCE = 'Scheduling Conference',
    DISCOVERY = 'Discovery',
    TRIAL = 'Trial',
}
export enum LITIGATION_STATUS {
    NONE = 'None',
    PRE_LITIGATION = 'Pre-litigation',
    SUMMONS_COMPLAINT = 'Summons + Complaint',
    ANSWER_COMPLAINT = 'Answer Complaint',
    MSJ = 'MSJ',
    SCHEDULING_CONFERENCE = 'Scheduling Conference',
    DISCOVERY = 'Discovery',
    POST_DISCOVERY = 'Post-Discovery',
    MEDIATION = 'Mediation',
    TRIAL_PREPARATION = 'Trial Preparation',
    TRIAL = 'Trial',
    APPEAL = 'Appeal',
    DOMESTICATION = 'Domestication',
}
export enum JURISDICTION {
    SUMMONS_COMPLAINT = 'Summons + Complaint',
    ANSWER_COMPLAINT = 'Answer Complaint',
    MSJ = 'MSJ',
    SCHEDULING_CONFERENCE = 'Scheduling Conference',
    DISCOVERY = 'Discovery',
    TRIAL = 'Trial',
}
export enum STATUS {
    ACTIVE = 'Active',
    INACTIVE = 'Inactive',
}
export enum LOCAL_COUNSEL_NAME {
    SMITH_AND_PARTNERS = 'Smith & Partners Law Firm',
    HARRIS_LEGAL_GROUP = 'Harris Legal Group',
    TAYLOR_WILLIAMS_ASSOCIATES = 'Taylor Williams & Associates',
    RIVERA_JONES_LAW = 'Rivera & Jones Law Offices',
}
export enum ClIENT_STATUS {
    READY_FOR_ONBOARDING = 'Ready for Onboarding',
    ONBOARDING_UNDERWAY = 'Onboarding Underway',
    ONBOARDING_COMPLETE = 'Onboarding Complete',
    ACTIVE = 'Active',
    SETTLEMENTS_COMPLETE = 'Settlements Complete',
    PAYMENTS_COMPLETE = 'Payments Complete',
    PAUSED = 'Paused',
    TERMINATED = 'Terminated',
}
export enum B2B_B2C {
    B2B = 'B2B',
    B2C = 'B2C',
}
export enum REVENUE_SOURCE_COMPANY_TYPE {
    MERCHANT_PROCESSING = 'Merchant Processing',
    PAYMENT_PLATFORM = 'Payment Platform',
    ORDERING_PLATFORM = 'Ordering Platform',
    INSURANCE_PAYOR = 'Insurance Payor',
    FACTORING = 'Factoring',
}
export enum ONBOARDING_STATUS {
    NOT_STARTED = 'Not Started',
    UNDERWAY = 'Underway',
    PROBLEM = 'Problem',
    PAUSED = 'Paused',
    COMPLETED = 'Completed',
}
export enum SIGNED_GRA_AGREEMENTS {
    NOT_SIGNED = 'Not Signed',
    SIGNED = 'Signed',
    N_A = 'N/A',
}
export enum AD_INFO_STATUS {
    NOT_RECEIVED = 'Not Received',
    RECEIVED = 'Received',
    N_A = 'N/A',
}
export enum PRIORITY {
    HIGH = 'High',
    MEDIUM = 'Medium',
    LOW = 'Low',
}
export enum GENERAL_LIABILITY_INSURANCE_STATUS {
    ACTIVE = 'Active',
    SUSPENDED = 'Suspended',
    CANCELED = 'Canceled',
}
export enum AD_STATUS {
    NOT_CONTACTED = 'Not Contacted',
    IN_PROCESS_CONTACTED_BY_CLIENT = 'In Process, Contacted by Client',
    IN_PROCESS_CONTACTED_BY_GRA = 'In Process, Contacted by GRA',
    ON_BOARD = 'On Board',
    NOT_ON_BOARD = 'Not On Board',
}
