'use client';
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/common/Button';
import { FormInput } from '@/components/common/FormInput';
import { DownArrow } from '@/components/icons/Dashboard/DownArrow';
import { InteractionProps } from '@/app/types/common';

import { useRouter } from 'next/navigation';
import FormDropDown from '@/components/common/formdropdown/FormDropDown';
import { AD_INFO_STATUS, AD_STATUS, MCA_COM_NAME, ONBOARDING_STATUS, PRIORITY, SIGNED_GRA_AGREEMENTS } from '@/app/constants/dashboard';
import SimpleDropdown from '@/components/common/DropDown';

const Onboarding: React.FC<InteractionProps> = ({ id, mode }) => {
    const AdInfoStatus = Object.values(AD_INFO_STATUS);
    const onboardingStatus = Object.values(ONBOARDING_STATUS);
    const Priority = Object.values(PRIORITY);
    const signedGRAAgreements = Object.values(SIGNED_GRA_AGREEMENTS);
    const clientComName = Object.values(MCA_COM_NAME);
    const [formData, setFormData] = useState({
        clientCompanyName: '',
        onboardingStartDate: '',
        onboardingStatus: '',
        notes: '',
        signedGraAgreements: '',
        settlementNLC: '',
        settlementPOA: '',
        mcaAgreements: '',
        bankStatements: '',
        copyOfDriversLicense: '',
        creditorInfo: '',
        adInfo: '',
        deadline: '',
        additionalNotes: '',
        merchantProcessingStatus: '',
        merchantProcessingPriority: '',
        merchantProcessingDeadline: '',
        merchantProcessingNotes: '',
        paymentPlatformsStatus: '',
        paymentPlatformsPriority: '',
        paymentPlatformsDeadline: '',
        paymentPlatformsNotes: '',
        orderingPlatformsStatus: '',
        orderingPlatformsPriority: '',
        orderingPlatformsDeadline: '',
        orderingPlatformsNotes: '',
        insurancePaymentsStatus: '',
        insurancePaymentsPriority: '',
        insurancePaymentsDeadline: '',
        insurancePaymentsNotes: '',
        factoringStatus: '',
        factoringPriority: '',
        factoringDeadline: '',
        factoringNotes: '',
        checksCashStatus: '',
        checksCashPriority: '',
        checksCashDeadline: '',
        checksCashNotes: '',
        licenseTransferStatus: '',
        licenseTransferPriority: '',
        licenseTransferDeadline: '',
        licenseTransferNotes: '',
        generalLiabilityInsuranceTransferStatus: '',
        generalLiabilityInsuranceTransferPriority: '',
        generalLiabilityInsuranceTransferDeadline: '',
        generalLiabilityInsuranceTransferNotes: '',
    });

    const [isEditMode, setIsEditMode] = useState(false);
    const { push, back } = useRouter();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };
    useEffect(() => {
        setIsEditMode(mode === 'edit' || mode === 'create');
    }, [mode]);

    const handleSave = () => {
        console.log('Data saved:', formData);
        setIsEditMode(!isEditMode);
        push('/onboarding/0?mode=edit');
        back();
    };
    const dropdownClick = (item?: string) => {
        console.log('DropDown Data==>', item);
    };

    return (
        <div className="px-4 py-4 sm:px-8 sm:py-8">
            <div className="flex flex-col gap-6">
                <div className="flex w-full items-center  justify-between sm:px-6 ">
                    {mode === 'create' ? (
                        <h2 className="mb-0  font-inter text-lg font-bold text-charcoal">Add Onboarding Dashboard </h2>
                    ) : (
                        <div className="font-inter text-lg font-bold leading-[21.6px] text-charcoal">{isEditMode && mode === 'edit' ? 'Edit Onboarding Dashboard ' : 'View Onboarding Dashboard '}</div>
                    )}
                </div>

                <div className="w-full" style={{ borderBottom: '1px solid #DCDCDC' }}></div>

                <div className="flex flex-col gap-6 ">
                    <div className="grid grid-cols-12 gap-6">
                        <div className="max-sm:col-span-12 col-span-12 sm:col-span-8">
                            <SimpleDropdown data={clientComName} label="Client" onHandleClick={dropdownClick} />
                        </div>

                        <div className="max-sm:col-span-12 col-span-12 sm:col-span-4">
                            <SimpleDropdown data={onboardingStatus} label="Status" onHandleClick={dropdownClick} />
                        </div>
                        <div className="max-sm:col-span-12 col-span-12 sm:col-span-4">
                            <FormInput
                                disabled={!isEditMode}
                                type="date"
                                value={formData.onboardingStartDate}
                                name="onboardingStartDate"
                                placeholder="Start Date"
                                label="Start Date"
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="max-sm:col-span-12 col-span-12">
                            <FormInput disabled={!isEditMode} type="text" value={formData.notes} name="notes" placeholder="Notes" label="Notes" onChange={handleInputChange} isTextArea={true} />
                        </div>

                        {/* Document Status Section */}
                        <div className="max-sm:col-span-12 col-span-12 sm:px-6">
                            <h3 className=" text-lg font-bold">Overview</h3>
                        </div>
                        <div className="max-sm:col-span-12 col-span-12 sm:col-span-4">
                            <SimpleDropdown data={signedGRAAgreements} label="Signed GRA Agreements" onHandleClick={dropdownClick} />
                        </div>
                        <div className="max-sm:col-span-12 col-span-12 sm:col-span-4">
                            <SimpleDropdown data={AdInfoStatus} label="Settlement Negotiation LoC" onHandleClick={dropdownClick} />
                        </div>
                        <div className="max-sm:col-span-12 col-span-12 sm:col-span-4">
                            <SimpleDropdown data={AdInfoStatus} label="Settlement PoA" onHandleClick={dropdownClick} />
                        </div>
                        <div className="max-sm:col-span-12 col-span-12 sm:col-span-4">
                            <SimpleDropdown data={AdInfoStatus} label="MCA Agreements" onHandleClick={dropdownClick} />
                        </div>
                        <div className="max-sm:col-span-12 col-span-12 sm:col-span-4">
                            <SimpleDropdown data={AdInfoStatus} label="Bank Statements" onHandleClick={dropdownClick} />
                        </div>
                        <div className="max-sm:col-span-12 col-span-12 sm:col-span-4">
                            <SimpleDropdown data={AdInfoStatus} label="Copy Of DL " onHandleClick={dropdownClick} />
                        </div>

                        <div className="max-sm:col-span-12 col-span-12 sm:col-span-12">
                            <SimpleDropdown data={AdInfoStatus} label="Creditor Info" onHandleClick={dropdownClick} />
                        </div>
                        <div className="max-sm:col-span-12 col-span-12 sm:px-6">
                            <h3 className=" text-lg font-bold">Account Debtors</h3>
                        </div>

                        <div className="max-sm:col-span-12 col-span-12 sm:col-span-4">
                            <SimpleDropdown data={AdInfoStatus} label="Status" onHandleClick={dropdownClick} />
                        </div>
                        <div className="max-sm:col-span-12 col-span-12 sm:col-span-4">
                            <FormInput disabled={!isEditMode} type="date" value={formData.deadline} name="deadline" placeholder="Deadline" label="Deadline" onChange={handleInputChange} />
                        </div>
                        <div className="max-sm:col-span-12 col-span-12">
                            <FormInput
                                disabled={!isEditMode}
                                type="text"
                                value={formData.additionalNotes}
                                name="additionalNotes"
                                placeholder="Notes"
                                label="Notes"
                                onChange={handleInputChange}
                                isTextArea={true}
                            />
                        </div>

                        {/* Merchant Processing Section */}
                        <div className="max-sm:col-span-12 col-span-12 sm:px-6">
                            <h3 className=" text-lg font-bold">Merchant Processing</h3>
                        </div>
                        <div className="max-sm:col-span-12 col-span-12 sm:col-span-4">
                            <SimpleDropdown data={AdInfoStatus} label="Status" onHandleClick={dropdownClick} />
                        </div>
                        <div className="max-sm:col-span-12 col-span-12 sm:col-span-4">
                            <SimpleDropdown data={Priority} label="Priority" onHandleClick={dropdownClick} />
                        </div>
                        <div className="max-sm:col-span-12 col-span-12 sm:col-span-4">
                            <FormInput
                                disabled={!isEditMode}
                                type="date"
                                value={formData.merchantProcessingDeadline}
                                name="merchantProcessingDeadline"
                                placeholder="Deadline"
                                label="Deadline"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="max-sm:col-span-12 col-span-12">
                            <FormInput
                                disabled={!isEditMode}
                                type="text"
                                value={formData.merchantProcessingNotes}
                                name="merchantProcessingNotes"
                                placeholder="Notes"
                                label="Notes"
                                onChange={handleInputChange}
                                isTextArea={true}
                            />
                        </div>

                        {/* Payment Platforms Section */}
                        <div className="max-sm:col-span-12 col-span-12 sm:px-6">
                            <h3 className=" text-lg font-bold">Payment Platforms</h3>
                        </div>
                        <div className="max-sm:col-span-12 col-span-12 sm:col-span-4">
                            <SimpleDropdown data={AdInfoStatus} label="Status" onHandleClick={dropdownClick} />
                        </div>
                        <div className="max-sm:col-span-12 col-span-12 sm:col-span-4">
                            <SimpleDropdown data={Priority} label="Priority" onHandleClick={dropdownClick} />
                        </div>
                        <div className="max-sm:col-span-12 col-span-12 sm:col-span-4">
                            <FormInput
                                disabled={!isEditMode}
                                type="date"
                                value={formData.paymentPlatformsDeadline}
                                name="paymentPlatformsDeadline"
                                placeholder="Deadline"
                                label="Deadline"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="max-sm:col-span-12 col-span-12">
                            <FormInput
                                disabled={!isEditMode}
                                type="text"
                                value={formData.paymentPlatformsNotes}
                                name="paymentPlatformsNotes"
                                placeholder="Notes"
                                label="Notes"
                                onChange={handleInputChange}
                                isTextArea={true}
                            />
                        </div>

                        {/* Ordering Platforms Section */}
                        <div className="max-sm:col-span-12 col-span-12 sm:px-6">
                            {' '}
                            <h3 className=" text-lg font-bold">Ordering Platforms</h3>
                        </div>
                        <div className="max-sm:col-span-12 col-span-12 sm:col-span-4">
                            <SimpleDropdown data={AdInfoStatus} label="Status" onHandleClick={dropdownClick} />
                        </div>
                        <div className="max-sm:col-span-12 col-span-12 sm:col-span-4">
                            <SimpleDropdown data={Priority} label="Priority" onHandleClick={dropdownClick} />
                        </div>
                        <div className="max-sm:col-span-12 col-span-12 sm:col-span-4">
                            <FormInput
                                disabled={!isEditMode}
                                type="date"
                                value={formData.orderingPlatformsDeadline}
                                name="orderingPlatformsDeadline"
                                placeholder="Deadline"
                                label="Deadline"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="max-sm:col-span-12 col-span-12">
                            <FormInput
                                disabled={!isEditMode}
                                type="text"
                                value={formData.orderingPlatformsNotes}
                                name="orderingPlatformsNotes"
                                placeholder="Notes"
                                label="Notes"
                                onChange={handleInputChange}
                                isTextArea={true}
                            />
                        </div>

                        {/* Insurance Payments Section */}
                        <div className="max-sm:col-span-12 col-span-12 sm:px-6">
                            <h3 className=" text-lg font-bold">Insurance Payments</h3>
                        </div>
                        <div className="max-sm:col-span-12 col-span-12 sm:col-span-4">
                            <SimpleDropdown data={AdInfoStatus} label="Status" onHandleClick={dropdownClick} />
                        </div>
                        <div className="max-sm:col-span-12 col-span-12 sm:col-span-4">
                            <SimpleDropdown data={Priority} label="Priority" onHandleClick={dropdownClick} />
                        </div>
                        <div className="max-sm:col-span-12 col-span-12 sm:col-span-4">
                            <FormInput
                                disabled={!isEditMode}
                                type="date"
                                value={formData.insurancePaymentsDeadline}
                                name="insurancePaymentsDeadline"
                                placeholder="Deadline"
                                label="Deadline"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="max-sm:col-span-12 col-span-12">
                            <FormInput
                                disabled={!isEditMode}
                                type="text"
                                value={formData.insurancePaymentsNotes}
                                name="insurancePaymentsNotes"
                                placeholder="Notes"
                                label="Notes"
                                onChange={handleInputChange}
                                isTextArea={true}
                            />
                        </div>
                        <div className="max-sm:col-span-12 col-span-12 sm:px-6">
                            {' '}
                            <h3 className=" text-lg font-bold">Factoring</h3>
                        </div>
                        {/* Factoring Section */}
                        <div className="max-sm:col-span-12 col-span-12 sm:col-span-4">
                            <SimpleDropdown data={AdInfoStatus} label="Status" onHandleClick={dropdownClick} />
                        </div>
                        <div className="max-sm:col-span-12 col-span-12 sm:col-span-4">
                            <SimpleDropdown data={Priority} label="Priority" onHandleClick={dropdownClick} />
                        </div>
                        <div className="max-sm:col-span-12 col-span-12 sm:col-span-4">
                            <FormInput
                                disabled={!isEditMode}
                                type="date"
                                value={formData.factoringDeadline}
                                name="factoringDeadline"
                                placeholder="Deadline"
                                label="Deadline"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="max-sm:col-span-12 col-span-12">
                            <FormInput
                                disabled={!isEditMode}
                                type="text"
                                value={formData.factoringNotes}
                                name="factoringNotes"
                                placeholder="Notes"
                                label="Notes"
                                onChange={handleInputChange}
                                isTextArea={true}
                            />
                        </div>

                        {/* Checks Cash Section */}
                        <div className="max-sm:col-span-12 col-span-12 sm:px-6">
                            {' '}
                            <h3 className=" text-lg font-bold">Checks + Cash</h3>
                        </div>
                        <div className="max-sm:col-span-12 col-span-12 sm:col-span-4">
                            <SimpleDropdown data={AdInfoStatus} label="Status" onHandleClick={dropdownClick} />
                        </div>
                        <div className="max-sm:col-span-12 col-span-12 sm:col-span-4">
                            <SimpleDropdown data={Priority} label="Priority" onHandleClick={dropdownClick} />
                        </div>
                        <div className="max-sm:col-span-12 col-span-12 sm:col-span-4">
                            <FormInput
                                disabled={!isEditMode}
                                type="date"
                                value={formData.checksCashDeadline}
                                name="checksCashDeadline"
                                placeholder="Deadline"
                                label="Deadline"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="max-sm:col-span-12 col-span-12">
                            <FormInput
                                disabled={!isEditMode}
                                type="text"
                                value={formData.checksCashNotes}
                                name="checksCashNotes"
                                placeholder="Notes"
                                label="Notes"
                                onChange={handleInputChange}
                                isTextArea={true}
                            />
                        </div>

                        {/* License Transfer Section */}
                        <div className="max-sm:col-span-12 col-span-12 sm:px-6">
                            <h3 className=" text-lg font-bold">License Transfer</h3>
                        </div>
                        <div className="max-sm:col-span-12 col-span-12 sm:col-span-4">
                            <SimpleDropdown data={AdInfoStatus} label="Status" onHandleClick={dropdownClick} />
                        </div>
                        <div className="max-sm:col-span-12 col-span-12 sm:col-span-4">
                            <SimpleDropdown data={Priority} label="Priority" onHandleClick={dropdownClick} />
                        </div>
                        <div className="max-sm:col-span-12 col-span-12 sm:col-span-4">
                            <FormInput
                                disabled={!isEditMode}
                                type="date"
                                value={formData.licenseTransferDeadline}
                                name="licenseTransferDeadline"
                                placeholder="Deadline"
                                label="Deadline"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="max-sm:col-span-12 col-span-12">
                            <FormInput
                                disabled={!isEditMode}
                                type="text"
                                value={formData.licenseTransferNotes}
                                name="licenseTransferNotes"
                                placeholder="Notes"
                                label="Notes"
                                onChange={handleInputChange}
                                isTextArea={true}
                            />
                        </div>

                        {/* General Liability Insurance Transfer Section */}
                        <div className="max-sm:col-span-12 col-span-12 sm:px-6">
                            {' '}
                            <h3 className=" text-lg font-bold">General Liability Insurance Transfer</h3>
                        </div>
                        <div className="max-sm:col-span-12 col-span-12 sm:col-span-4">
                            <SimpleDropdown data={AdInfoStatus} label="Status" onHandleClick={dropdownClick} />
                        </div>
                        <div className="max-sm:col-span-12 col-span-12 sm:col-span-4">
                            <SimpleDropdown data={Priority} label="Priority" onHandleClick={dropdownClick} />
                        </div>
                        <div className="max-sm:col-span-12 col-span-12 sm:col-span-4">
                            <FormInput
                                disabled={!isEditMode}
                                type="date"
                                value={formData.generalLiabilityInsuranceTransferDeadline}
                                name="generalLiabilityInsuranceTransferDeadline"
                                placeholder="Deadline"
                                label="Deadline"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="max-sm:col-span-12 col-span-12">
                            <FormInput
                                disabled={!isEditMode}
                                type="text"
                                value={formData.generalLiabilityInsuranceTransferNotes}
                                name="generalLiabilityInsuranceTransferNotes"
                                placeholder="Notes"
                                label="Notes"
                                onChange={handleInputChange}
                                isTextArea={true}
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
        </div>
    );
};

export default Onboarding;
