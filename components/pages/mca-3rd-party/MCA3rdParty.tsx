'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/common/Button';
import { FormInput } from '@/components/common/FormInput';
import { InteractionProps } from '@/app/types/common';
import { DownArrow } from '@/components/icons/Dashboard/DownArrow';
import { mCA3rdParty } from '@/app/dummy/mCA3rdParty';
import { MCA_COLLABORATION_LEVEL, MCA_COM_NAME, RELATIONSHIP_TYPE, THIRD_PARTY_TYPE } from '@/app/constants/dashboard';
import FormDropDown from '@/components/common/formdropdown/FormDropDown';
import SimpleDropdown from '@/components/common/DropDown';

const MCA_3rd_Party: React.FC<InteractionProps> = ({ id, mode }) => {
    const mcaCollaborationLevel = Object.values(MCA_COLLABORATION_LEVEL);
    const relationshipType = Object.values(RELATIONSHIP_TYPE);
    const thirdPartyType = Object.values(THIRD_PARTY_TYPE);
    const mcaComName = Object.values(MCA_COM_NAME);
    const { push, back } = useRouter();
    const [formData, setFormData] = useState({
        thirdPartyCompanyName: '',
        mcaCompanyName: '',
        thirdPartyType: '',
        relationshipType: '',
        nameOfOtherThirdParty: '',
        businessWebsite: '',
        businessAddress: '',
        name: '',
        phone: '',
        email: '',
        collaborationLevel: '',
        notes: '',
    });
    const [isEditMode, setIsEditMode] = useState(false);

    useEffect(() => {
        if (id) {
            const data = mCA3rdParty.find((item) => item.slug === id);
            console.log(data);
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
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    const handleSave = () => {
        // Save logic here
        console.log('Data saved:', formData);
        setIsEditMode(!isEditMode);
        push('/mca-3rd-party/0?mode=edit');
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
                        <h2 className="mb-0  font-inter text-lg font-bold text-charcoal">Add MCA 3rd Party</h2>
                    ) : (
                        <div className="font-inter text-lg font-bold leading-[21.6px] text-charcoal">{isEditMode && mode === 'edit' ? 'Edit MCA 3rd Party Details' : 'View MCA 3rd Party Details'}</div>
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
                            value={formData.thirdPartyCompanyName}
                            placeholder="3rd party company name"
                            className=""
                            name="thirdPartyCompanyName"
                            label="3rd party company name"
                            disabled={!isEditMode}
                        />
                    </div>

                    <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-4">

                        <SimpleDropdown data={mcaComName} label="MCA Company Name" onHandleClick={dropdownClick} />

                    </div>

                    <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-4">
                        <SimpleDropdown data={thirdPartyType} label="3rd Party Type" onHandleClick={dropdownClick} />
                    </div>

                    <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-8">
                        <SimpleDropdown data={relationshipType} label="Relationship Type" onHandleClick={dropdownClick} />
                    </div>

                    <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-4">
                        <FormInput
                            onChange={handleInputChange}
                            type="text"
                            value={formData.nameOfOtherThirdParty}
                            placeholder="Name of other 3rd party"
                            className=""
                            name="nameOfOtherThirdParty"
                            label="Name of other 3rd party"
                            disabled={!isEditMode}
                        />
                    </div>

                    <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-4">
                        <FormInput
                            onChange={handleInputChange}
                            type="text"
                            value={formData.businessWebsite}
                            placeholder="Business Website"
                            className=""
                            name="businessWebsite"
                            label="Business website"
                            disabled={!isEditMode}
                        />
                    </div>

                    <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-4">
                        <FormInput
                            onChange={handleInputChange}
                            type="text"
                            value={formData.businessAddress}
                            placeholder="Business address"
                            className=""
                            name="businessAddress"
                            label="Business address"
                            disabled={!isEditMode}
                        />
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

                    <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-4">
                     
                        <SimpleDropdown data={mcaCollaborationLevel} label="Collaboration level" onHandleClick={dropdownClick} />
                    </div>

                    <div className="col-span-12">
                        <FormInput
                            onChange={handleInputChange}
                            type="text"
                            value={formData.notes}
                            placeholder="Notes"
                            className=""
                            name="notes"
                            label="Notes"
                            isTextArea={true}
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

export default MCA_3rd_Party;
