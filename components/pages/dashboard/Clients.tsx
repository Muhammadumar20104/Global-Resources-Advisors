'use client';
import React, { useEffect, useState } from 'react';
import { DataTable } from 'mantine-datatable';
import { StatusBadge } from '@/components/common/StatusBadge';
import { useSelector } from 'react-redux';
import type { IRootState } from '@/store';
import { useRouter } from 'next/navigation';

export const DashboardClients = () => {
    const [recordsData, setRecordsData] = useState<{ [key: string]: string }[]>([]);
    const { push } = useRouter();

    const { searchData: data } = useSelector((state: IRootState) => state.search);
    console.log('Client Data=>', data);

    const handleRowClick = () => {
        localStorage.removeItem('key');
        push('/clients/0?mode=create');
    };
    useEffect(() => {
        // @ts-ignore
        setRecordsData(data?.slice(0, 9));
    }, [data]);

    return (
        <div className="flex flex-col gap-y-6">
            <div className="panel">
                <div className="datatables">
                    <DataTable
                        highlightOnHover
                        striped
                        className="table-striped table-compact whitespace-nowrap"
                        records={recordsData}
                        onRowClick={handleRowClick}
                        columns={[
                            { accessor: 'company', title: 'Company' },
                            { accessor: 'contact', title: 'Contact' },
                            { accessor: 'total_mca_debt', title: 'MCA Balance ', render: (record) => <div>${record.total_mca_debt}</div> },
                            { accessor: 'status', title: 'Status', render: (record) => <StatusBadge status={record.status} /> },
                            { accessor: 'program_start_date', title: 'Start Date' },
                            { accessor: 'last_interaction', title: 'Last Interaction' },
                        ]}
                        minHeight={200}
                    />
                </div>
            </div>
        </div>
    );
};
