'use client';
import { productData } from '@/app/dummy/product';
import { InteractionProps } from '@/app/types/common';
import { Button } from '@/components/common/Button';

import { FormInput } from '@/components/common/FormInput';
import ImgPlus from '@/components/icons/Interaction/ImgPlus';
import { ProfileImg } from '@/components/icons/Interaction/ProfileImg';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const ClientAgreementForm: React.FC<InteractionProps> = ({ id, mode }) => {
    const { push, back } = useRouter();
    const [formData, setFormData] = useState({
        clientName: '',
        clientID: '',
        clientAgreement: null as File | null,
    });
    const [isEditMode, setIsEditMode] = useState(false);

    useEffect(() => {
        if (id) {
            const data = productData.find((item) => item.slug === id);
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
        const { name, value } = event.target;

        if (event.target instanceof HTMLInputElement && event.target.type === 'file') {
            const files = event.target.files;
            if (files && files.length > 0) {
                setFormData({
                    ...formData,
                    clientAgreement: files[0],
                });
            }
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSave = () => {
        // Save logic here
        console.log('Data saved:', formData);
        setIsEditMode(!isEditMode);
        push('/client-agreement/0?mode=edit');
        back();
    };

    return (
        <div className="px-4 py-4 sm:px-8 sm:py-6">
            {/* Navbar */}
            <div className="flex flex-col gap-6">
                <div className="flex w-full items-center  justify-between sm:px-6 ">
                    {mode === 'create' ? (
                        <h2 className="mb-0  font-inter text-lg font-bold text-charcoal">Add Client Agreement</h2>
                    ) : (
                        <div className="font-inter text-lg font-bold leading-[21.6px] text-charcoal">
                            {isEditMode && mode === 'edit' ? 'Edit Client Agreement Detail' : 'View Client Agreement Detail'}
                        </div>
                    )}
                </div>
                {/* hr line */}
                <div className="w-full" style={{ borderBottom: '1px solid #DCDCDC' }}></div>
            </div>

            {/* Input */}
            <div className="flex flex-col gap-6 pt-8">
                {/* images */}

                <div className="grid grid-cols-12 gap-6">
                    <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-6">
                        <FormInput type="text" disabled={!isEditMode} value={formData.clientID} placeholder="Client Id" className="" name="clientID" label="Client ID" onChange={handleInputChange} />
                    </div>

                    <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-6">
                        <FormInput
                            type="text"
                            disabled={!isEditMode}
                            value={formData.clientName}
                            placeholder="Client Name"
                            className=""
                            name="clientName"
                            label="Client Name"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="col-span-12">
                        <FormInput type="file" disabled={!isEditMode} name="clientAgreement" placeholder="Client Agreement" label="Client Agreement" onChange={handleInputChange} />
                    </div>
                    {/* <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-12">
                        <FormInput
                            type="text"
                            disabled={!isEditMode}
                            value={formData.clientAgreement}
                            placeholder="Client Agreement"
                            className=""
                            name="clientAgreement"
                            label="Client Agreement"
                            onChange={handleInputChange}
                        />
                    </div> */}
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

export default ClientAgreementForm;
