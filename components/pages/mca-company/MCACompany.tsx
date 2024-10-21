'use client';
import { MCA_COLLABORATION_LEVEL } from '@/app/constants/dashboard';
import { mcaData } from '@/app/dummy/mcCompany';
import { InteractionProps } from '@/app/types/common';
import { Button } from '@/components/common/Button';
import SimpleDropdown, { DropDown } from '@/components/common/DropDown';
import FormDropDown from '@/components/common/formdropdown/FormDropDown';
import { FormInput } from '@/components/common/FormInput';
import { DownArrow } from '@/components/icons/Dashboard/DownArrow';
import ImgPlus from '@/components/icons/Interaction/ImgPlus';
import { ProfileImg } from '@/components/icons/Interaction/ProfileImg';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const MCA_Company: React.FC<InteractionProps> = ({ id, mode }) => {
    const mcaCollaborationOptions = Object.values(MCA_COLLABORATION_LEVEL);
    const [formData, setFormData] = useState({
        mcaCompanyName: '',
        businessWebsite: '',
        businessAddress: '',
        contactName: '',
        contactPhone: '',
        contactEmail: '',
        collaborationLevel: '',
        settlementPatterns: '',
        notes: '',
    });

    const [isEditMode, setIsEditMode] = useState(false);
    const { push, back } = useRouter();

    useEffect(() => {
        if (id) {
            const data = mcaData.find((item) => item.slug === id);
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
        push('/mca-company/0?mode=edit');
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
                        <h2 className="mb-0  font-inter text-lg font-bold text-charcoal">Add MCA Companies</h2>
                    ) : (
                        <div className="font-inter text-lg font-bold leading-[21.6px] text-charcoal">{isEditMode && mode === 'edit' ? 'Edit MCA Companies' : 'View MCA Companies'}</div>
                    )}
                </div>
                {/* hr line */}
                <div className="w-full" style={{ borderBottom: '1px solid #DCDCDC' }}></div>
            </div>

            {/* Input */}
            <div className="flex flex-col gap-6 pt-8">
                {/* images */}

                {/* Form Inputs */}
                <div className="grid grid-cols-12 gap-6">
                    <div className="max-xl:col-span-6 !max-sm:col-span-12 col-span-12 sm:col-span-6">
                        <FormInput
                            disabled={!isEditMode}
                            type="text"
                            value={formData.mcaCompanyName}
                            name="mcaCompanyName"
                            placeholder="MCA company name"
                            label="MCA Company Name"
                            onChange={handleInputChange}
                            cap={true}
                        />
                    </div>
                    <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-6">
                      
                        <SimpleDropdown data={mcaCollaborationOptions} label="Collaboration level" onHandleClick={dropdownClick} />
                    </div>
                    <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-4">
                        <FormInput disabled={!isEditMode} type="text" value={formData.contactName} name="contactName" placeholder="Contact name" label="Contact name" onChange={handleInputChange} />
                    </div>

                    <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-4">
                        <FormInput
                            disabled={!isEditMode}
                            type="text"
                            value={formData.contactPhone}
                            name="contactPhone"
                            placeholder="Contact phone"
                            label="Contact phone"
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-4">
                        <FormInput
                            disabled={!isEditMode}
                            type="text"
                            value={formData.contactEmail}
                            name="contactEmail"
                            placeholder="Contact email"
                            label="Contact email"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-12">
                        <FormInput
                            disabled={!isEditMode}
                            type="text"
                            value={formData.settlementPatterns}
                            name="settlementPatterns"
                            placeholder="Settlement patterns+Habits"
                            label="Settlement patterns + Habits"
                            onChange={handleInputChange}
                            isTextArea={true}
                        />
                    </div>
                    <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-12">
                        <FormInput disabled={!isEditMode} type="text" value={formData.notes} name="notes" placeholder="Notes" label="Notes" onChange={handleInputChange} isTextArea={true} />
                    </div>

                    <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-6">
                        <FormInput
                            disabled={!isEditMode}
                            type="text"
                            value={formData.businessAddress}
                            name="businessAddress"
                            placeholder="Business address"
                            label="Business address"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-6">
                        <FormInput
                            disabled={!isEditMode}
                            type="text"
                            value={formData.businessWebsite}
                            name="businessWebsite"
                            placeholder="Business website"
                            label="Business website"
                            onChange={handleInputChange}
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

export default MCA_Company;
