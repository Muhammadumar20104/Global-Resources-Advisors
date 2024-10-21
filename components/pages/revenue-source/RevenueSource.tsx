'use client';
import React, { useState, useEffect } from 'react';
import { FormInput } from '@/components/common/FormInput';
import { DownArrow } from '@/components/icons/Dashboard/DownArrow';
import { Button } from '@/components/common/Button';
import { useRouter } from 'next/navigation';
import { revenueSourceData } from '@/app/dummy/revenueSource';
import { InteractionProps } from '@/app/types/common';
import FormDropDown from '@/components/common/formdropdown/FormDropDown';
import { REVENUE_SOURCE_COMPANY_TYPE } from '@/app/constants/dashboard';
import SimpleDropdown from '@/components/common/DropDown';

const Revenue_Source: React.FC<InteractionProps> = ({ id, mode }) => {
    const { push, back } = useRouter();
    const revenueSourceCompanyType = Object.values(REVENUE_SOURCE_COMPANY_TYPE);
    const [formData, setFormData] = useState({
        revenueSourceCompanyType: '',
        revenueSourceCompanyName: '',
        businessWebsite: '',
        businessAddress: '',
        name: '',
        phone: '',
        email: '',
        notes: '',
    });
    const [isEditMode, setIsEditMode] = useState(false);

    useEffect(() => {
        if (id) {
            const data = revenueSourceData.find((item) => item.slug === id);
            if (data) {
                setFormData(data);
            }
        }
    }, [id]);

    useEffect(() => {
        setIsEditMode(mode === 'edit' || mode === 'create');
    }, [mode]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSave = () => {
        // Save logic here
        console.log('Data saved:', formData);
        setIsEditMode(!isEditMode);
        push('/revenue-source/0?mode=edit');
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
                        <h2 className="mb-0  font-inter text-lg font-bold text-charcoal">Add Revenue Source Company</h2>
                    ) : (
                        <div className="font-inter text-lg font-bold leading-[21.6px] text-charcoal">
                            {isEditMode && mode === 'edit' ? 'Edit Revenue Source Company' : 'View Revenue Source Company'}
                        </div>
                    )}
                </div>
                <div className="w-full" style={{ borderBottom: '1px solid #DCDCDC' }}></div>
            </div>

            {/* Input */}
            <div className="flex flex-col gap-6 pt-8">
                <div className="grid grid-cols-12 gap-6 ">
                    <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-6">
                        <FormInput
                            type="text"
                            placeholder="Revenue Source Company"
                            name="revenueSourceCompanyName"
                            label="Revenue Source Company"
                            value={formData.revenueSourceCompanyName}
                            onChange={handleInputChange}
                            disabled={!isEditMode}
                        />
                    </div>
                    <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-6">

                        <SimpleDropdown data={revenueSourceCompanyType} label="Type" onHandleClick={dropdownClick} />

                    </div>
                    <div className="max-sm:col-span-12 col-span-12 sm:px-6">
                        <h3 className=" text-lg font-bold">Contacts</h3>
                    </div>
                    <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-4">
                        <FormInput type="text" placeholder=" Name" name="name" label=" Name" value={formData.name} onChange={handleInputChange} disabled={!isEditMode} />
                    </div>

                    <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-4">
                        <FormInput type="tel" placeholder="Phone" name="phone" label="Phone" value={formData.phone} onChange={handleInputChange} disabled={!isEditMode} />
                    </div>

                    <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-4">
                        <FormInput type="email" placeholder="Email" name="email" label="Email" value={formData.email} onChange={handleInputChange} disabled={!isEditMode} />
                    </div>
                    <div className="col-span-12">
                        <FormInput type="text" placeholder="Notes" name="notes" label="Notes" value={formData.notes} onChange={handleInputChange} isTextArea={true} disabled={!isEditMode} />
                    </div>
                    <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-6">
                        <FormInput
                            type="text"
                            placeholder="Business address"
                            name="businessAddress"
                            label="Business address"
                            value={formData.businessAddress}
                            onChange={handleInputChange}
                            disabled={!isEditMode}
                        />
                    </div>
                    <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-6">
                        <FormInput
                            type="text"
                            placeholder="Business website"
                            name="businessWebsite"
                            label="Business website"
                            value={formData.businessWebsite}
                            onChange={handleInputChange}
                            disabled={!isEditMode}
                        />
                    </div>
                </div>
                <div className="flex w-full justify-end gap-4">
                    {!isEditMode && (
                        <div className="flex gap-3 ">
                            {/* <FormDropDown /> */}
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

export default Revenue_Source;
