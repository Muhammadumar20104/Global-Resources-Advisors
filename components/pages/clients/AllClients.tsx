'use client';
import React, { useEffect, useState } from 'react';
import { DataTable } from 'mantine-datatable';
import { allClients } from '@/app/dummy/clients';
import { EyeFill } from '@/components/icons/EyeFill';
import { Edit } from '@/components/icons/Edit';
import { Delete } from '@/components/icons/Delete';
import { StatusBadge } from '@/components/common/StatusBadge';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/common/Button';
import Add from '@/components/icons/Button/Add';
import Modal from '@/components/common/modal/Model';
import { useSelector } from 'react-redux';
import type { IRootState } from '@/store';

export const AllClients = () => {
    const PAGE_SIZES = [12, 20, 30, 50, 100];
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
    const [initialRecords, setInitialRecords] = useState<{ [key: string]: string }[]>([]);
    const [recordsData, setRecordsData] = useState(initialRecords);
    const { push } = useRouter();
    const [isOpen, setOpenModal] = useState(false);
    const [selectedName, setSelectedName] = useState('');

    const { searchData: data } = useSelector((state: IRootState) => state.search);
    useEffect(() => {
        // @ts-ignore
        setInitialRecords(data);
    }, [data]);

    useEffect(() => {
        setPage(1);
    }, [pageSize]);

    useEffect(() => {
        const from = (page - 1) * pageSize;
        const to = from + pageSize;
        setRecordsData([...initialRecords?.slice(from, to)]);
    }, [page, pageSize, initialRecords]);

    const handleDeleteClick = (name: any) => {
        setSelectedName(name);
        setOpenModal(!isOpen);
    };

    const handleView = (slug: string) => {
        push(`/clients/${slug}?mode=view`);
    };

    const handleEdit = (slug: string) => {
        push(`/clients/${slug}?mode=edit`);
    };
    const handleAdd = () => {
        localStorage.removeItem('key');
        console.log('Data saved:');
        push('/clients/0?mode=create');
    };
    return (
        <div className="px-4 py-4 sm:px-8 sm:py-8">
            <div className="flex flex-col gap-y-6">
                <div className="flex w-full flex-wrap items-center px-3 gap-y-2  sm:flex-row  justify-between sm:px-6">
                    <h2 className="mb-0 font-inter text-lg font-bold text-charcoal">Clients</h2>
                    <Button value="Add Client" icon={<Add />} onClick={handleAdd} className=" !h-[45px] !w-fit !px-6 !py-2" />
                </div>

                <div className="panel">
                    <div className="datatables">
                        <DataTable
                            highlightOnHover
                            striped
                            className="table-striped table-compact whitespace-nowrap"
                            records={recordsData}
                            columns={[
                                { accessor: 'company', title: 'Company' },
                                { accessor: 'contact', title: 'Contact' },
                                { accessor: 'status', title: 'Status', render: (record) => <StatusBadge status={record.status} /> },
                                { accessor: 'program_start_date', title: 'Program Start Date' },
                                { accessor: 'total_mca_debt', title: 'MCA Balance ', render: (record) => <div>${record.total_mca_debt}</div> },
                                { accessor: 'last_interaction', title: 'Last Interaction' },
                                {
                                    accessor: 'action',
                                    title: 'Action',
                                    render: (record) => (
                                        <div className="flex gap-x-3">
                                            <span className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white" onClick={() => handleView(record.slug)}>
                                                <EyeFill />
                                            </span>
                                            <span className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white" onClick={() => handleEdit(record.slug)}>
                                                <Edit />
                                            </span>
                                            <span className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white" onClick={() => handleDeleteClick(record.name)}>
                                                <Delete />
                                            </span>
                                        </div>
                                    ),
                                },
                            ]}
                            totalRecords={initialRecords?.length}
                            recordsPerPage={pageSize}
                            page={page}
                            onPageChange={(p) => setPage(p)}
                            minHeight={200}
                        />
                    </div>
                </div>
            </div>
            {isOpen && <Modal isOpen={isOpen} name={selectedName} setOpenModal={setOpenModal} />}
        </div>
    );
};
