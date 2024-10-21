'use client';
import { MCA_COM_NAME, OFFER_GRA_REP, OFFER_TYPE, SETTLEMENT_STATUS, THIRD_PARTY_TYPE } from '@/app/constants/dashboard';
import { clientMcaSettlementData } from '@/app/dummy/settlement';
import { InteractionProps } from '@/app/types/common';
import { Button } from '@/components/common/Button';
import SimpleDropdown from '@/components/common/DropDown';
import FormDropDown from '@/components/common/formdropdown/FormDropDown';

import { FormInput } from '@/components/common/FormInput';
import { DownArrow } from '@/components/icons/Dashboard/DownArrow';
import DateIcon from '@/components/icons/Interaction/DateIcon';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Settlement: React.FC<InteractionProps> = ({ id, mode }) => {
    const { push, back } = useRouter();
    const mcaComName = Object.values(MCA_COM_NAME);
    const settlementStatus = Object.values(SETTLEMENT_STATUS);
    const thirdParty = Object.values(THIRD_PARTY_TYPE);
    const offerType = Object.values(OFFER_TYPE);
    const graRep = Object.values(OFFER_GRA_REP);
    const [formData, setFormData] = useState({
        slug: '1',
        clientMcaLoanId: 'LC12346',
        thirdPartyCompanyName: 'QuickFunds Ltd.',
        clientCompanyName: '',
        mcaCompanyName: '',
        balanceRTR: '',
        status: 'Pending',
        clientName: 'LC12346',
        Balance: '$2000',
        notes: 'Awaiting approval from management.',
        date: '2024-08-01',
        mcaCoOr3rdParty: '3rd Party',
        contactName: 'Alice Johnson',
        graRepresentative: 'Michael Brown',
        type: 'Counter',
        amount: '$25,000',
        responseDate: '2024-07-28',
        percentage: '50%',
        comments: 'Counter-offer submitted, awaiting response.',
        settlementdate: '',
        settlementmcaCoOr3rdParty: '',
        settlementcontactName: '',
        settlementgraRepresentative: '',
        settlementAmount: '',
        settlementTerms: '',
        settlementPercentage: '',
    });
    const [isEditMode, setIsEditMode] = useState(false);

    useEffect(() => {
        if (id) {
            const data = clientMcaSettlementData.find((item) => item.slug === id);
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
        push('/settlement/0?mode=edit');
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
                        <h2 className="mb-0  font-inter text-lg font-bold text-charcoal">Add Settlement Details</h2>
                    ) : (
                        <div className="font-inter text-lg font-bold leading-[21.6px] text-charcoal">{isEditMode && mode === 'edit' ? 'Edit Settlement Details' : 'View Settlement Details'}</div>
                    )}
                </div>
                {/* hr line */}
                <div className="w-full" style={{ borderBottom: '1px solid #DCDCDC' }}></div>
            </div>

            {/* Input */}
            <div className="flex flex-col gap-6 pt-8">
                <div className="grid grid-cols-12 gap-6">
                    <div className="max-sm:col-span-12 col-span-12 sm:col-span-4">
                        <SimpleDropdown data={mcaComName} label="Client Company Name" onHandleClick={dropdownClick} />
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


                    <div className="max-sm:col-span-12 col-span-12 sm:col-span-6">
                        <SimpleDropdown data={thirdParty} label="Counterparty" onHandleClick={dropdownClick} />
                    </div>

                    <div className="max-sm:col-span-12 col-span-12 sm:col-span-6">

                        <SimpleDropdown data={settlementStatus} label="Settlement Status" onHandleClick={dropdownClick} />

                    </div>

                    <div className="max-sm:col-span-12 col-span-12">
                        <FormInput
                            disabled={!isEditMode}
                            type="text"
                            value={formData.notes}
                            name="settlementNotes"
                            placeholder="Settlement notes"
                            label="Settlement notes"
                            onChange={handleInputChange}
                            isTextArea={true}
                        />
                    </div>
                    <div className="max-sm:col-span-12 col-span-12 sm:px-6">
                        <h3 className=" flex gap-[3px] text-lg font-bold">Settlement Offers </h3>
                    </div>

                    <div className="max-sm:col-span-12 col-span-12">
                        <div className="">
                            <div className="grid grid-cols-12 gap-6">
                                <div className="max-sm:col-span-12 col-span-12 sm:col-span-4">
                                    <FormInput disabled={!isEditMode} type="date" value={formData.date} name={`date`} placeholder="Date" label="Date" onChange={handleInputChange} />
                                </div>

                                <div className="max-sm:col-span-12 col-span-12 sm:col-span-4">
                                    <SimpleDropdown data={offerType} label="Type" onHandleClick={dropdownClick} />
                                </div>
                                <div className="max-sm:col-span-12 col-span-12 sm:col-span-4">
                                    <FormInput
                                        disabled={!isEditMode}
                                        type="date"
                                        value={formData.responseDate}
                                        name={`responseDate`}
                                        placeholder="Response date"
                                        label="Response date"
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="max-sm:col-span-12 col-span-12 sm:col-span-6">
                                    <FormInput
                                        disabled={!isEditMode}
                                        type="text"
                                        value={formData.contactName}
                                        name={`contactName`}
                                        placeholder="Contact name"
                                        label="Contact name"
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div className="max-sm:col-span-12 col-span-12 sm:col-span-6">
                                    <SimpleDropdown data={graRep} label="GRA Rep" onHandleClick={dropdownClick} />
                                </div>



                                <div className="max-sm:col-span-12 col-span-6">
                                    <FormInput disabled={!isEditMode} type="number" value={formData.amount} name={`amount`} placeholder="Amount" label="Amount" onChange={handleInputChange} />
                                </div>

                                <div className="max-sm:col-span-12 col-span-12 sm:col-span-6">
                                    <FormInput
                                        disabled={!isEditMode}
                                        type="text"
                                        value={formData.settlementPercentage}
                                        name={`settlementPercentage`}
                                        placeholder="Settlement %"
                                        label="Settlement %"
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div className="max-sm:col-span-12 col-span-12">
                                    <FormInput
                                        disabled={!isEditMode}
                                        type="text"
                                        value={formData.comments}
                                        name={`comments`}
                                        placeholder="Comments"
                                        label="Comments"
                                        onChange={handleInputChange}
                                        isTextArea={true}
                                    />
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
                        </div>
                    </div>
                    <div className="max-sm:col-span-12 col-span-12 sm:px-6">
                        <h3 className=" text-lg font-bold">Final Settlement Agreement</h3>
                    </div>
                    <div className="max-sm:col-span-12 col-span-12">
                        <div className="grid grid-cols-12 gap-6">
                            <div className="max-sm:col-span-12 col-span-12 sm:col-span-4">
                                <FormInput disabled={!isEditMode} type="date" value={formData.date} name="date" placeholder="Date" label="Date" onChange={handleInputChange} />
                            </div>
                            <div className="max-sm:col-span-12 col-span-12 sm:col-span-4">
                                <FormInput
                                    disabled={!isEditMode}
                                    type="number"
                                    value={formData.settlementAmount}
                                    name="settlementAmount"
                                    placeholder="Amount"
                                    label="Amount"
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="max-sm:col-span-12 col-span-4">
                                <FormInput
                                    disabled={!isEditMode}
                                    type="text"
                                    value={formData.settlementPercentage}
                                    name="settlementPercentage"
                                    placeholder="Settlement %"
                                    label="Settlement %"
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="max-sm:col-span-12 col-span-12 sm:col-span-6">
                                <FormInput
                                    disabled={!isEditMode}
                                    type="text"
                                    value={formData.contactName}
                                    name="contactName"
                                    placeholder="Contact name"
                                    label="Contact name"
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="max-sm:col-span-12 col-span-12 sm:col-span-6">
                                <SimpleDropdown data={graRep} label="GRA Rep" onHandleClick={dropdownClick} />
                            </div>

                            <div className="max-sm:col-span-12 col-span-12">
                                <FormInput
                                    disabled={!isEditMode}
                                    type="text"
                                    value={formData.settlementTerms}
                                    name="settlementTerms"
                                    placeholder="Comments"
                                    label="Comments"
                                    onChange={handleInputChange}
                                    isTextArea={true}
                                />
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

export default Settlement;
