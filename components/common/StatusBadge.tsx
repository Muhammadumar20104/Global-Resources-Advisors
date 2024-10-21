import { getStatusColor } from "../pages/clients/utils";

export const StatusBadge = ({ status }: { status: string }) => {
    const colorClasses = getStatusColor(status);
    return <span className={`rounded px-2 py-1 ${colorClasses}`}>{status}</span>;
};
