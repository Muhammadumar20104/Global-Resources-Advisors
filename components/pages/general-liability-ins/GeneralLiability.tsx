'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/common/Button';
import { FormInput } from '@/components/common/FormInput';
import { InteractionProps } from '@/app/types/common';
import { generealLiabilityInsData } from '@/app/dummy/generalLiabilityIns';

const General_Liability: React.FC<InteractionProps> = ({ id, mode }) => {
    const { push, back } = useRouter();
    const [formData, setFormData] = useState({
        insuranceCoName: '',
        website: '',
        name: '',
        phone: '',
        email: '',
        notes: '',
    });
    const [isEditMode, setIsEditMode] = useState(false);

    useEffect(() => {
        if (id) {
            const data = generealLiabilityInsData.find((item) => item.slug === id);
            if (data) {
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
        push('/general-liability-ins/0?mode=edit');
        back();
    };

    return (
        <div className="px-4 py-4 sm:px-8 sm:py-8">
            {/* Navbar */}
            <div className="flex flex-col gap-6">
                <div className="flex w-full items-center  justify-between sm:px-6 ">
                    {mode === 'create' ? (
                        <h2 className="mb-0  font-inter text-lg font-bold text-charcoal">Add General Liability Insurance Co</h2>
                    ) : (
                        <div className="font-inter text-lg font-bold leading-[21.6px] text-charcoal">
                            {isEditMode && mode === 'edit' ? 'Edit General Liability Insurance Co' : 'View General Liability Insurance Co'}
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
                            onChange={handleInputChange}
                            type="text"
                            value={formData.insuranceCoName}
                            placeholder="General Liability Insurance Company Name"
                            className=""
                            name="insuranceCoName"
                            label="General Liability Insurance Company Name"
                            disabled={!isEditMode}
                        />
                    </div>

                    <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-6">
                        <FormInput
                            onChange={handleInputChange}
                            type="text"
                            value={formData.website}
                            placeholder="Website"
                            className=""
                            name="website"
                            label="Website"
                            disabled={!isEditMode}
                            cap={true}
                        />
                    </div>
                    <div className="max-sm:col-span-12 col-span-12 sm:px-6">
                        <h3 className=" text-lg font-bold">Contacts</h3>
                    </div>

                    <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-4">
                        <FormInput onChange={handleInputChange} type="text" value={formData.name} placeholder="Name" className="" name="name" label="Name" disabled={!isEditMode} />
                    </div>

                    <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-4">
                        <FormInput onChange={handleInputChange} type="text" value={formData.phone} placeholder="Phone" className="" name="phone" label="Phone" disabled={!isEditMode} />
                    </div>

                    <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-4">
                        <FormInput onChange={handleInputChange} type="text" value={formData.email} placeholder="Email" className="" name="email" label="Email" disabled={!isEditMode} />
                    </div>

                    <div className="col-span-12">
                        <FormInput onChange={handleInputChange} type="text" value={formData.notes} placeholder="Notes" className="" name="notes" label="Notes" isTextArea disabled={!isEditMode} />
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

export default General_Liability;
