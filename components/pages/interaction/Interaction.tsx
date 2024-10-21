'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/common/Button';
import { FormInput } from '@/components/common/FormInput';
import { interactionData } from '@/app/dummy/interaction';
import { InteractionProps } from '@/app/types/common';
import { DownArrow } from '@/components/icons/Dashboard/DownArrow';
import DateIcon from '@/components/icons/Interaction/DateIcon';
import { INTERACTION_MEDIA, MCA_COM_NAME, OFFER_GRA_REP } from '@/app/constants/dashboard';
import SimpleDropdown from '@/components/common/DropDown';

const Interaction: React.FC<InteractionProps> = ({ id, mode }) => {
    const { push, back } = useRouter();
    const graRep = Object.values(OFFER_GRA_REP);
    const comInteract = Object.values(MCA_COM_NAME);
    const interactMedia = Object.values(INTERACTION_MEDIA);
    const [formData, setFormData] = useState({
        clientCompanyName: '',
        date: '',
        graRepresentative: '',
        companyInteractedWith: '',
        contactInteractedWith: '',
        interactionMedia: '',
        notes: '',
        attachments: '', // Changed to a string for text display
    });
    const [isEditMode, setIsEditMode] = useState(false);

    useEffect(() => {
        if (id) {
            const data = interactionData.find((item) => item.slug === id);
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
        push('/interaction/0?mode=edit');
        setIsEditMode(!isEditMode);
        // back();
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
                        <h2 className="mb-0  font-inter text-lg font-bold text-charcoal">Add Interaction</h2>
                    ) : (
                        <div className="font-inter text-lg font-bold leading-[21.6px] text-charcoal">{isEditMode && mode === 'edit' ? 'Edit Interaction Details' : 'View Interaction Details'}</div>
                    )}
                </div>
                <div className="w-full" style={{ borderBottom: '1px solid #DCDCDC' }}></div>
            </div>

            {/* Input */}
            <div className="grid grid-cols-12 gap-6 pt-8">
                <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-4">
                    <FormInput
                        onChange={handleInputChange}
                        type="text"
                        value={formData.clientCompanyName}
                        placeholder="Client"
                        className=""
                        name="clientCompanyName"
                        label="Client"
                        icon={<DownArrow />}
                        disabled={!isEditMode}
                    />
                </div>

                <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-4">
                    <FormInput onChange={handleInputChange} type="date" value={formData.date} placeholder="Date" className="" name="date" label="Date" disabled={!isEditMode} />
                </div>

                <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-4">
                    <SimpleDropdown data={graRep} label="GRA Rep" onHandleClick={dropdownClick} />
                </div>

                <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-8">
                    <SimpleDropdown data={comInteract} label="Company Interacted With" onHandleClick={dropdownClick} />
                </div>

                <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-4">
                    <SimpleDropdown data={comInteract} label="Contact Interacted With" onHandleClick={dropdownClick} />
                </div>

                <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-4">
                    <SimpleDropdown data={interactMedia} label="Media" onHandleClick={dropdownClick} />
                </div>

                <div className="col-span-12">
                    <FormInput onChange={handleInputChange} type="text" value={formData.notes} placeholder="Notes" className="" name="notes" label="Notes" isTextArea={true} disabled={!isEditMode} />
                </div>

                <div className="max-sm:col-span-12 col-span-12">
                    <FormInput
                        disabled={!isEditMode}
                        type="file"
                        value=""
                        name={`attachments`}
                        placeholder="Attachments"
                        label="Attachments"
                        // Use your attachment icon here
                    />
                </div>
            </div>
            <div className="flex w-full justify-end gap-4 pt-[24px]">
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
    );
};

export default Interaction;
