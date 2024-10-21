export const getStatusColor = (status: string) => {
    switch (status) {
        case 'Pending':
            return 'bg-[#FFF9EB] text-[#F1C21B]';
        case 'Completed':
            return 'bg-[#EBF9F5] text-[#24A148]';
        case 'Active':
            return 'bg-[#EBF9F5] text-[#24A148]';
        case 'In Progress':
            return 'bg-[#DCF3FE] text-[#288FEB]';
        case 'On Hold':
            return 'bg-[#FFEEE6] text-[#FF832B]';
        default:
            return 'bg-red-500 text-white';
    }
};
