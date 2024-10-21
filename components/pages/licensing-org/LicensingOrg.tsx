'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/common/Button';
import { FormInput } from '@/components/common/FormInput';
import { licenseData } from '@/app/dummy/licensingOrg';
import { DownArrow } from '@/components/icons/Dashboard/DownArrow';
import { InteractionProps } from '@/app/types/common';
import { LICENSE_TYPE } from '@/app/constants/dashboard';
import FormDropDown from '@/components/common/formdropdown/FormDropDown';
import SimpleDropdown from '@/components/common/DropDown';

const Licensing_Org: React.FC<InteractionProps> = ({ id, mode }) => {
    const licenseType = Object.values(LICENSE_TYPE);
    const { push, back } = useRouter();
    const [formData, setFormData] = useState({
        licenseType: '',
        licensingOrgName: '',
        licensingOrgWebsite: '',
        name: '',
        phone: '',
        email: '',
        notes: '',
    });
    const [isEditMode, setIsEditMode] = useState(false);

    useEffect(() => {
        const data = licenseData.find((item) => item.slug === id);
        if (data) {
            setFormData(data);
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
        push('/licensing-org/0?mode=edit');
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
                        <h2 className="mb-0  font-inter text-lg font-bold text-charcoal">Add Licensing Organization</h2>
                    ) : (
                        <div className="font-inter text-lg font-bold leading-[21.6px] text-charcoal">
                            {isEditMode && mode === 'edit' ? 'Edit Licensing Organization' : 'View Licensing Organization'}
                        </div>
                    )}
                </div>
                <div className="w-full" style={{ borderBottom: '1px solid #DCDCDC' }}></div>
            </div>

            {/* Input */}
            <div className="flex flex-col gap-6 pt-8">
                <div className="grid grid-cols-12 gap-6 ">
                    <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-4">
                        <FormInput
                            onChange={handleInputChange}
                            type="text"
                            value={formData.licensingOrgName}
                            placeholder="Licensing Org Name"
                            className=""
                            name="licensingOrgName"
                            label="Licensing Org Name"
                            disabled={!isEditMode}
                        />
                    </div>
                    <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-4">

                        <SimpleDropdown data={licenseType} label="License Type" onHandleClick={dropdownClick} />

                    </div>

                    <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-4">
                        <FormInput
                            onChange={handleInputChange}
                            type="text"
                            value={formData.licensingOrgWebsite}
                            placeholder="Website"
                            className=""
                            name="licensingOrgWebsite"
                            label="Website"
                            disabled={!isEditMode}
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

export default Licensing_Org;
