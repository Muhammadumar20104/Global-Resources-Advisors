'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/common/Button';
import { FormInput } from '@/components/common/FormInput';
import { InteractionProps } from '@/app/types/common';

import { clientRevenuData } from '@/app/dummy/clientRevenueSource';
import { DownArrow } from '@/components/icons/Dashboard/DownArrow';

const Client_Revenue_Source: React.FC<InteractionProps> = ({ id, mode }) => {
    const { push, back } = useRouter();
    const [formData, setFormData] = useState({
        clientCompanyName: '',
        revenueSourceCompanyName: '',
        revenueSourceType: '',
        contactName: '',
        contactPhone: '',
        contactEmail: '',
        oldCoId: '',
        newCoId: '',
        oldCoLogin: '',
        newCoLogin: '',
        notes: '',
    });
    const [isEditMode, setIsEditMode] = useState(false);

    useEffect(() => {
        if (id) {
            const data = clientRevenuData.find((item) => item.slug === id);
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
        push('/client-revenue-source/0?mode=edit');
        back();
    };

    return (
        <div className="px-4 py-4 sm:px-8 sm:py-8">
            {/* Navbar */}
            <div className="flex flex-col gap-6">
                <div className="flex w-full items-center  justify-between sm:px-6 ">
                    {mode === 'create' ? (
                        <h2 className="mb-0  font-inter text-lg font-bold text-charcoal">Add Client – Revenue Source Co Relationship</h2>
                    ) : (
                        <div className="font-inter text-lg font-bold leading-[21.6px] text-charcoal">
                            {isEditMode && mode === 'edit' ? 'Edit  Client – Revenue Source Co Relationship' : 'View  Client – Revenue Source Co Relationship'}
                        </div>
                    )}
                </div>
                <div className="w-full" style={{ borderBottom: '1px solid #DCDCDC' }}></div>

                {/* Input */}
                <div className="flex flex-col gap-6 ">
                    <div className="grid grid-cols-12 gap-6 ">
                        <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-4">
                            <FormInput
                                onChange={handleInputChange}
                                type="text"
                                value={formData.clientCompanyName}
                                placeholder="Client"
                                name="clientCompanyName"
                                label="Client"
                                icon={<DownArrow />}
                                disabled={!isEditMode}
                            />
                        </div>
                        <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-4">
                            <FormInput
                                onChange={handleInputChange}
                                type="text"
                                value={formData.revenueSourceCompanyName}
                                placeholder="Revenue source company "
                                name="revenueSourceCompanyName"
                                label="Revenue source company "
                                icon={<DownArrow />}
                                disabled={!isEditMode}
                            />
                        </div>
                        <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-4">
                            <FormInput onChange={handleInputChange} type="text" value={formData.revenueSourceType} placeholder="Type" name="revenueSourceType" label="Type" disabled={!isEditMode} />
                        </div>
                        <div className="max-sm:col-span-12 col-span-12 sm:px-6">
                            <h3 className=" text-lg font-bold">Contacts</h3>
                        </div>
                        <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-4">
                            <FormInput onChange={handleInputChange} type="text" value={formData.contactName} placeholder="Name" name="contactName" label="Name" disabled={!isEditMode} />
                        </div>
                        <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-4">
                            <FormInput onChange={handleInputChange} type="text" value={formData.contactPhone} placeholder="phone" name="contactPhone" label="phone" disabled={!isEditMode} />
                        </div>
                        <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-4">
                            <FormInput onChange={handleInputChange} type="text" value={formData.contactEmail} placeholder="Email" name="contactEmail" label="Email" disabled={!isEditMode} />
                        </div>
                        <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-6">
                            <FormInput
                                onChange={handleInputChange}
                                type="text"
                                value={formData.newCoId}
                                placeholder="NewCo ID / Account #"
                                name="newCoId"
                                label="NewCo ID / Account #"
                                disabled={!isEditMode}
                                cap={true}
                            />
                        </div>
                        <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-6">
                            <FormInput
                                onChange={handleInputChange}
                                type="text"
                                value={formData.newCoLogin}
                                placeholder="NewCo Login + password"
                                name="newCoLogin"
                                label="NewCo Login + Password"
                                disabled={!isEditMode}
                                cap={true}
                            />
                        </div>
                        <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-6">
                            <FormInput
                                onChange={handleInputChange}
                                type="text"
                                value={formData.oldCoId}
                                placeholder="OldCo ID / Account #"
                                name="oldCoId"
                                label="OldCo ID / Account #"
                                disabled={!isEditMode}
                                cap={true}
                            />
                        </div>

                        <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-6">
                            <FormInput
                                onChange={handleInputChange}
                                type="text"
                                value={formData.oldCoLogin}
                                placeholder="OldCo Login + Password"
                                name="oldCoLogin"
                                label="OldCo Login + Password"
                                disabled={!isEditMode}
                                cap={true}
                            />
                        </div>

                        <div className="col-span-12">
                            <FormInput onChange={handleInputChange} type="text" value={formData.notes} placeholder="Notes" name="notes" label="Notes" isTextArea disabled={!isEditMode} />
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
        </div>
    );
};

export default Client_Revenue_Source;
