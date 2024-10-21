'use client';
import { EVENT_TYPE, JURISDICTION, LITIGATION_STATUS, LOCAL_COUNSEL_NAME, MCA_COM_NAME } from '@/app/constants/dashboard';
import { clientMcaLitigationData } from '@/app/dummy/litigation';
import { InteractionProps } from '@/app/types/common';
import { Button } from '@/components/common/Button';
import SimpleDropdown from '@/components/common/DropDown';
import FormDropDown from '@/components/common/formdropdown/FormDropDown';

import { FormInput } from '@/components/common/FormInput';
import { DownArrow } from '@/components/icons/Dashboard/DownArrow';
import DateIcon from '@/components/icons/Interaction/DateIcon';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Litigation: React.FC<InteractionProps> = ({ id, mode }) => {
    const Jurisdiction = Object.values(JURISDICTION);
    const litigationStatus = Object.values(LITIGATION_STATUS);
    const eventType = Object.values(EVENT_TYPE);
    const mcaComName = Object.values(MCA_COM_NAME);
    const localCounselName = Object.values(LOCAL_COUNSEL_NAME);
    const [formData, setFormData] = useState({
        clientMcaLoanId: '',
        thirdPartyCompanyName: '',
        clientCompanyName: '',
        mcaCompanyName: '',
        balanceRTR: '',
        localCounselName: '',
        clientName: 'LC12346',
        Balance: '$2000',
        jurisdiction: '',
        eventType: '',
        eventDate: '',
        eventComments: '',
        litigationStatus: '',
        litigationNotes: '',
    });
    const [isEditMode, setIsEditMode] = useState(false);
    const { push, back } = useRouter();

    useEffect(() => {
        if (id) {
            const data = clientMcaLitigationData.find((item) => item.slug === id);
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
        push('/litigation/0?mode=edit');
        back();
    };
    const dropdownClick = (item?: string) => {
        console.log('DropDown Data==>', item);
    };

    return (
        <div className="px-4 py-4 sm:px-8 sm:py-6">
            {/* Navbar */}
            <div className="flex flex-col gap-6">
                <div className="flex w-full items-center  justify-between sm:px-6 ">
                    {mode === 'create' ? (
                        <h2 className="mb-0  font-inter text-lg font-bold text-charcoal">Add Litigation Details</h2>
                    ) : (
                        <div className="font-inter text-lg font-bold leading-[21.6px] text-charcoal">{isEditMode && mode === 'edit' ? 'Edit Litigation Details' : 'View Litigation Details'}</div>
                    )}
                </div>
                {/* hr line */}
                <div className="w-full" style={{ borderBottom: '1px solid #DCDCDC' }}></div>
            </div>

            {/* Input */}
            <div className="flex flex-col gap-6 pt-8">
                <div className="grid grid-cols-12 gap-6">
                    <div className="max-sm:col-span-12 col-span-12 sm:col-span-4">
                        <SimpleDropdown data={mcaComName} label="Client Name" onHandleClick={dropdownClick} />
                    </div>

                    <div className="max-sm:col-span-12 col-span-12 sm:col-span-4">
                        <SimpleDropdown data={mcaComName} label="MCA Company Name" onHandleClick={dropdownClick} />
                    </div>
                    <div className="max-sm:col-span-12 col-span-12 sm:col-span-4">
                        <FormInput
                            type="number"
                            value={formData.balanceRTR}
                            name="currentRtrBalance"
                            placeholder="Current RTR Balance"
                            label="Current RTR Balance"
                            onChange={handleInputChange}
                            cap={true}
                        />
                    </div>

                    <div className="max-sm:col-span-12 col-span-12 sm:col-span-4">

                        <SimpleDropdown data={localCounselName} label="Local Counsel Name" onHandleClick={dropdownClick} />
                    </div>

                    <div className="max-sm:col-span-12 col-span-12 sm:col-span-4">
                        <SimpleDropdown data={Jurisdiction} label="Jurisdiction" onHandleClick={dropdownClick} />
                    </div>
                    <div className="max-sm:col-span-12 col-span-4">
                        <SimpleDropdown data={litigationStatus} label="Litigation Status" onHandleClick={dropdownClick} />

                    </div>
                    <div className="max-sm:col-span-12 col-span-12">
                        <FormInput
                            disabled={!isEditMode}
                            type="text"
                            value={formData.litigationNotes}
                            name="litigationNotes"
                            placeholder="Litigation notes"
                            label="Litigation notes"
                            onChange={handleInputChange}
                            isTextArea={true}
                        />
                    </div>
                    <div className="max-sm:col-span-12 col-span-12 sm:px-6">
                        <h3 className=" text-lg font-bold">Calendar of Events</h3>
                    </div>

                    <div className="max-sm:col-span-12 sm:col-span-6">
                        <FormInput disabled={!isEditMode} type="date" value={formData.eventDate} name="eventDate" placeholder="Date" label="Date" onChange={handleInputChange} />
                    </div>
                    <div className="max-sm:col-span-12 col-span-12 sm:col-span-6">

                        <SimpleDropdown data={eventType} label="Event Type" onHandleClick={dropdownClick} />

                    </div>

                    <div className="max-sm:col-span-12 col-span-12">
                        <FormInput
                            disabled={!isEditMode}
                            type="text"
                            value={formData.eventComments}
                            name="eventComments"
                            placeholder="Comments"
                            label="Comments"
                            onChange={handleInputChange}
                            isTextArea={true}
                        />
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

export default Litigation;
