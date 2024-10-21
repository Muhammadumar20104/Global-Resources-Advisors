'use client';
import { JURISDICTION, STATUS } from '@/app/constants/dashboard';
import { localCounselDetailsData } from '@/app/dummy/localCounselData';
import { InteractionProps } from '@/app/types/common';
import { Button } from '@/components/common/Button';
import SimpleDropdown from '@/components/common/DropDown';
import FormDropDown from '@/components/common/formdropdown/FormDropDown';
import { FormInput } from '@/components/common/FormInput';
import { DownArrow } from '@/components/icons/Dashboard/DownArrow';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
const status = Object.values(STATUS);
const Jurisdiction = Object.values(JURISDICTION);
const Local_Counsel: React.FC<InteractionProps> = ({ id, mode }) => {
    const [formData, setFormData] = useState({
        clientCompanyName: '',
        amount: '',
        status: '',
        localCounselName: '',
        localCounselJurisdiction: '',
        name: '',
        phone: '',
        email: '',
        hourlyRate: '',
        retainer: '',
        date: '',
        notes: '',
    });
    const [isEditMode, setIsEditMode] = useState(false);
    const { push, back } = useRouter();

    useEffect(() => {
        if (id) {
            const data = localCounselDetailsData.find((item) => item.slug === id);
            if (data) {
                //@ts-ignore
                setFormData(data);
            }
        }
    }, [id]);
    useEffect(() => {
        setIsEditMode(mode === 'edit' || mode === 'create');
    }, [mode]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSave = () => {
        // Save logic here
        console.log('Data saved:', formData);
        setIsEditMode(!isEditMode);
        push('/local-counsel/0?mode=edit');
        back();
    };
    const dropdownClick = (item?: string) => {
        console.log('DropDown Data==>', item);
    };

    return (
        <div className="px-4 py-4 sm:px-8 sm:py-8">
            {/* Navbar */}
            <div className="flex flex-col gap-6">
                <div className="flex w-full items-center  justify-between sm:px-6 ">
                    {mode === 'create' ? (
                        <h2 className="mb-0  font-inter text-lg font-bold text-charcoal">Add Local Counsel</h2>
                    ) : (
                        <div className="font-inter text-lg font-bold leading-[21.6px] text-charcoal">{isEditMode && mode === 'edit' ? 'Edit Local Counsel Details' : 'View Local Counsel Details'}</div>
                    )}
                </div>
                {/* hr line */}
                <div className="w-full" style={{ borderBottom: '1px solid #DCDCDC' }}></div>
            </div>

            {/* Input */}
            <div className="flex flex-col gap-6 pt-8">
                <div className="grid grid-cols-12 gap-6">
                    <div className="max-sm:col-span-12 col-span-12 sm:col-span-4">
                        <FormInput type="select" value={formData.localCounselName} name="localCounselName" placeholder="Client company name" label="local counsel name" onChange={handleInputChange} />
                    </div>

                    <div className="max-sm:col-span-12 col-span-12 sm:col-span-4">

                        <SimpleDropdown data={Jurisdiction} label="Local Counsel jurisdiction" onHandleClick={dropdownClick} />

                    </div>
                    <div className="max-sm:col-span-12 col-span-12 sm:col-span-4">
                        <SimpleDropdown data={status} label="Status" onHandleClick={dropdownClick} />
                    </div>
                    <div className="max-sm:col-span-12 col-span-12 sm:col-span-6">
                        <FormInput type="number" value={formData.hourlyRate} name={`hourlyRate`} placeholder="Hourly rate" label="Hourly rate" onChange={handleInputChange} />
                    </div>

                    <div className="max-sm:col-span-12 col-span-12 sm:col-span-6">
                        <FormInput type="number" value={formData.retainer} name={`retainer`} placeholder="Retainer" label="Retainer" onChange={handleInputChange} />
                    </div>

                    <div className="max-sm:col-span-12 col-span-12">
                        <FormInput type="text" value={formData.notes} name={`notes`} placeholder="Notes" label="Notes" onChange={handleInputChange} isTextArea={true} />
                    </div>
                    <div className="max-sm:col-span-12 col-span-12 sm:px-6">
                        <h3 className=" text-lg font-bold">Contacts (multiple)</h3>
                    </div>

                    <div className="max-sm:col-span-12 col-span-12">
                        <div className=" grid grid-cols-12 gap-6">
                            <div className="max-sm:col-span-12 col-span-12 sm:col-span-4">
                                <FormInput type="text" value={formData.name} name={`name`} placeholder="Name" label="Name" onChange={handleInputChange} />
                            </div>

                            <div className="max-sm:col-span-12 col-span-12 sm:col-span-4">
                                <FormInput type="text" value={formData.phone} name={`phone`} placeholder="Phone" label="Phone" onChange={handleInputChange} />
                            </div>

                            <div className="max-sm:col-span-12 col-span-12 sm:col-span-4">
                                <FormInput type="text" value={formData.email} name={`email`} placeholder="Email" label="Email" onChange={handleInputChange} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex w-full justify-end gap-4">
                    {!isEditMode && (
                        <div className="flex gap-3 ">
                            <Button value="Edit" onClick={() => setIsEditMode(!isEditMode)} className="!h-[45px] !px-6 !py-2" />
                        </div>
                    )}
                    {isEditMode && (
                        <>
                            <Button value="Cancel" onClick={() => back()} className="!h-[45px] !w-fit !bg-[#EFEFEF] !px-6 !py-2 !text-charcoal" />
                            <Button value="Save" onClick={handleSave} className="!h-[45px] !w-fit !px-6 !py-2" />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Local_Counsel;
