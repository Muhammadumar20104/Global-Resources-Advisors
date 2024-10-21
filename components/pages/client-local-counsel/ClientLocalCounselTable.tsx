'use client';
import React, { useEffect, useState } from 'react';
import { DataTable } from 'mantine-datatable';
import { localCounselDetailsData } from '@/app/dummy/localCounselData';
import { EyeFill } from '@/components/icons/EyeFill';
import { Edit } from '@/components/icons/Edit';
import { Delete } from '@/components/icons/Delete';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/common/Button';
import Add from '@/components/icons/Button/Add';
import Modal from '@/components/common/modal/Model';
import { useSelector } from 'react-redux';
import { IRootState } from '@/store';

export const ClientLocalCounselTable = () => {
    const PAGE_SIZES = [12, 20, 30, 50, 100];
    const { push } = useRouter();
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
    const [initialRecords, setInitialRecords] = useState<{ [key: string]: string }[]>([]);
    const [recordsData, setRecordsData] = useState(initialRecords);
    const [isOpen, setOpenModal] = useState(false);
    const [selectedName, setSelectedName] = useState('');

    const { searchData: data } = useSelector((state: IRootState) => state.search);
    useEffect(() => {
        // @ts-ignore
        setInitialRecords(data);
    }, [data]);

    const handleDeleteClick = (name: any) => {
        setSelectedName(name);
        setOpenModal(!isOpen);
    };

    useEffect(() => {
        setPage(1);
    }, [pageSize]);

    useEffect(() => {
        const from = (page - 1) * pageSize;
        const to = from + pageSize;
        setRecordsData([...initialRecords.slice(from, to)]);
    }, [page, pageSize, initialRecords]);

    const handleView = (slug: string) => {
        push(`/client-local-counsel-relationship/${slug}?mode=view`);
    };

    const handleEdit = (slug: string) => {
        push(`/client-local-counsel-relationship/${slug}?mode=edit`);
    };
    const handleSave = () => {
        // Save logic here
        console.log('Data saved:');
        push('/'); // Redirect after saving
    };

    return (
        <div className="px-4 py-4 sm:px-8 sm:py-8">
            <div className="flex flex-col gap-y-6">
                <div className="flex w-full flex-wrap items-center justify-between gap-y-2  px-3  sm:flex-row sm:px-6">
                    <h2 className="mb-0 font-inter text-lg font-bold text-charcoal">Client - Local Counsel Relationship</h2>
                    <Button value="Add Client LC" icon={<Add />} onClick={() => push('/client-local-counsel-relationship/0?mode=create')} className=" !h-[45px] !w-fit !px-6 !py-2" />
                </div>

                <div className="panel">
                    <div className="datatables">
                        <DataTable
                            highlightOnHover
                            striped
                            className="table-striped table-compact whitespace-nowrap"
                            records={recordsData}
                            columns={[
                                { accessor: 'localCounselName', title: 'Local Counsel Name' },
                                { accessor: 'clientCompanyName', title: 'Client' },
                                { accessor: 'localCounselJurisdiction', title: 'Jurisdiction ' },
                                

                                { accessor: 'status', title: 'Status' },
                                {
                                    accessor: 'actions',
                                    title: 'Actions',
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
                            totalRecords={initialRecords.length}
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
