'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/common/Button';
import { FormInput } from '@/components/common/FormInput';
import { interactionData } from '@/app/dummy/interaction'; // Adjust the import path as needed
import { InteractionProps } from '@/app/types/common';
import { DownArrow } from '@/components/icons/Dashboard/DownArrow';
import DateIcon from '@/components/icons/Interaction/DateIcon';
import { ProfileImg } from '@/components/icons/Interaction/ProfileImg';
import ImgPlus from '@/components/icons/Interaction/ImgPlus';
import FormDropDown from '@/components/common/formdropdown/FormDropDown';
import { B2B_B2C, ClIENT_STATUS, formLinks, INTERACTION_MEDIA, MCA_COM_NAME, OFFER_GRA_REP } from '@/app/constants/dashboard';
import SimpleDropdown from '@/components/common/DropDown';

const ClientForm: React.FC<InteractionProps> = ({ id, mode }) => {
    const clientStatus = Object.values(ClIENT_STATUS);
    const B2B = Object.values(B2B_B2C);
    const graRep = Object.values(OFFER_GRA_REP);
    const comInteract = Object.values(MCA_COM_NAME);
    const interactMedia = Object.values(INTERACTION_MEDIA);
    const { push, back } = useRouter();
    const [formData, setFormData] = useState({
        companyName: '',
        newComName: '',
        websiteUrl: '',
        businessAddress: '',
        timeZone: '',
        fullName: '',
        status: '',
        contact1: '',
        contact2: '',
        contactX: '',
        phoneNumber1: '',
        phoneNumber2: '',
        phoneNumberX: '',
        email1: '',
        email2: '',
        emailX: '',
        notes: '',
        bankName: '',
        bankNotes: '',
        accountNumber: '',
        banksDetail: '',
        sweepAccountNumber: '',
        b2bB2c: '',
        product: '',
        numberOfEmployees: '',
        keyBusinessIssues: '',
        productVersion: '',
        programStartDate: '',
        numberOfWeeks: '',
        totalMCA: '',
        totalGRA: '',
        paymentAmount: '',
        settlementNote: '',
        riskTolerance: '',
        originationSource: '',
        programNotes: '',
    });
    const [isEditMode, setIsEditMode] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const handlePlusClick = () => {
        fileInputRef.current?.click();
    };
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.files);
    };
    useEffect(() => {
        if (id) {
            const data = interactionData?.find((item) => item.slug === id);
            if (data) {
                //@ts-ignore
                setFormData(data);
            }
        }
    }, [id]);

    useEffect(() => {
        setIsEditMode(mode === 'edit' || mode === 'create');
    }, [mode]);
    useEffect(() => {
        // Check localStorage when component mounts
        const savedDataString = localStorage.getItem('key');
        console.log(savedDataString);
        if (savedDataString !== null) {
            const savedData = JSON.parse(savedDataString);
            setFormData(savedData);
            setIsEditMode(false);
        } else {
            setIsEditMode(mode === 'edit' || mode === 'create');
        }
    }, [mode]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };
    const handleDropdownClick = (item: string) => {
        push(item);
        setIsDropdownOpen(false);
    };

    const handleSave = () => {
        localStorage.setItem('key', JSON.stringify('Yes Ok'));
        console.log('Data saved:', formData);
        push('/clients/0?mode=edit');
        setIsEditMode(!isEditMode);
    };
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };
    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };
    const dropdownClick = (item?: string) => {
        console.log('DropDown Data==>', item);
    };

    return (
        <div className="px-4 py-4 sm:px-8 sm:py-6">
            <div className="flex flex-col gap-6 ">
                <div className="flex w-full items-center  justify-between sm:px-6 ">
                    {mode === 'create' ? (
                        <h2 className="mb-0  font-inter text-lg font-bold text-charcoal">Add Client</h2>
                    ) : (
                        <div className="font-inter text-lg font-bold leading-[21.6px] text-charcoal">{isEditMode && mode === 'edit' ? 'Edit Client Details' : 'View Client Details'}</div>
                    )}

                    {!isEditMode && (
                        <div className="flex gap-3 ">
                            <FormDropDown formLinks={formLinks} onClick={handleDropdownClick} name="Client" isOpen={isDropdownOpen} toggleDropdown={toggleDropdown} close={closeDropdown} />
                        </div>
                    )}
                </div>

                <div className="flex flex-col gap-6 pt-8">
                    <div className="grid grid-cols-12 gap-6">
                        {/* Define each FormInput field */}

                        <div className="max-xl:col-span-6 max-sm:col-span-12  col-span-12 sm:sm:col-span-4">
                            <FormInput
                                onChange={handleInputChange}
                                type="text"
                                value={formData.companyName}
                                placeholder="Client company name"
                                name="companyName"
                                label="Client company name"
                                disabled={!isEditMode}
                            />
                        </div>
                        <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-4">
                            <FormInput
                                onChange={handleInputChange}
                                type="date"
                                value={formData.programStartDate}
                                placeholder="Program Start Date"
                                name="programStartDate"
                                label="Program Start Date"
                                disabled={!isEditMode}
                            />
                        </div>
                        <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-4">
                            <FormInput
                                onChange={handleInputChange}
                                type="text"
                                value={formData.totalMCA}
                                placeholder="Total MCA Balance"
                                name="totalMCA"
                                label="Total MCA Balance"
                                disabled={!isEditMode}
                                cap={true}
                            />
                        </div>
                        <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-4">
                            <FormInput
                                onChange={handleInputChange}
                                type="text"
                                value={formData.newComName}
                                placeholder="New Company Name"
                                name="newComName"
                                label="New Company Name"
                                disabled={!isEditMode}
                            />
                        </div>
                        <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-4">
                            <FormInput onChange={handleInputChange} type="select" value={formData.status} placeholder="Status" name="status" label="Status" disabled={!isEditMode} />
                        </div>
                        <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-4">
                            <FormInput
                                onChange={handleInputChange}
                                type="text"
                                value={formData.totalGRA}
                                placeholder="Total GRA"
                                name="totalGRA"
                                label="Total GRA Debt"
                                disabled={!isEditMode}
                                cap={true}
                            />
                        </div>

                        <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-4">
                            <FormInput
                                onChange={handleInputChange}
                                type="text"
                                value={formData.timeZone}
                                placeholder="Select Time Zone"
                                name="timeZone"
                                label="Time Zone"
                                icon={<DownArrow />}
                                disabled={!isEditMode}
                            />
                        </div>
                        <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-4">
                            <FormInput
                                onChange={handleInputChange}
                                type="number"
                                value={formData.paymentAmount}
                                placeholder="Payment Amount"
                                name="paymentAmount"
                                label="Weekly Payment Amount"
                                disabled={!isEditMode}
                            />
                        </div>
                        <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-4">
                            <FormInput
                                onChange={handleInputChange}
                                type="text"
                                value={formData.numberOfWeeks}
                                placeholder="Number of Weeks"
                                name="numberOfWeeks"
                                label="Number of Program Weeks"
                                disabled={!isEditMode}
                            />
                        </div>
                        <div className="col-span-12 my-2 w-full" style={{ borderBottom: '1px solid #DCDCDC' }}></div>
                        {/* contact  */}
                        <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-4">
                            <FormInput onChange={handleInputChange} type="text" value={formData.contact1} placeholder="Contact" name="contact1" label="Contact 1" disabled={!isEditMode} />
                        </div>
                        <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-4">
                            <FormInput onChange={handleInputChange} type="text" value={formData.phoneNumber1} placeholder="Phone " name="phoneNumber1" label="Phone 1" disabled={!isEditMode} />
                        </div>
                        <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-4">
                            <FormInput onChange={handleInputChange} type="email" value={formData.email1} placeholder="Email " name="email1" label="Email 1" disabled={!isEditMode} />
                        </div>
                        <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-4">
                            <FormInput onChange={handleInputChange} type="text" value={formData.contact2} placeholder="Contact" name="contact2" label="Contact 2" disabled={!isEditMode} />
                        </div>
                        <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-4">
                            <FormInput onChange={handleInputChange} type="text" value={formData.phoneNumber2} placeholder="Phone " name="phoneNumber2" label="Phone 2" disabled={!isEditMode} />
                        </div>
                        <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-4">
                            <FormInput onChange={handleInputChange} type="email" value={formData.email2} placeholder="Email " name="email2" label="Email 2" disabled={!isEditMode} />
                        </div>
                        <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-4">
                            <FormInput onChange={handleInputChange} type="text" value={formData.contactX} placeholder="Contact" name="contactX" label="Contact X" disabled={!isEditMode} />
                        </div>
                        <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-4">
                            <FormInput onChange={handleInputChange} type="text" value={formData.phoneNumberX} placeholder="Phone " name="phoneNumberX" label="Phone X" disabled={!isEditMode} />
                        </div>
                        <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-4">
                            <FormInput onChange={handleInputChange} type="email" value={formData.emailX} placeholder="Email " name="emailX" label="Email X" disabled={!isEditMode} />
                        </div>
                        {/* contact  */}
                        <div className="col-span-12 my-2 w-full" style={{ borderBottom: '1px solid #DCDCDC' }}></div>
                        <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-8">
                            <FormInput onChange={handleInputChange} type="text" value={formData.notes} placeholder="Write here" name="notes" label="Notes" disabled={!isEditMode} />
                        </div>
                        <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-4">
                            <FormInput
                                onChange={handleInputChange}
                                type="text"
                                value={formData.originationSource}
                                placeholder="Origination Source"
                                name="originationSource"
                                label="Origination Source"
                                disabled={!isEditMode}
                            />
                        </div>
                        <div className="col-span-12 my-2 w-full" style={{ borderBottom: '1px solid #DCDCDC' }}></div>
                        <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-12">
                            <FormInput
                                onChange={handleInputChange}
                                type="text"
                                value={formData.settlementNote}
                                placeholder="Settlement Note"
                                name="settlementNote"
                                label="Settlement Notes"
                                disabled={!isEditMode}
                            />
                        </div>
                        <div className="col-span-12 my-2 w-full" style={{ borderBottom: '1px solid #DCDCDC' }}></div>
                        {/* <div className="col-span-12 my-2 w-full" style={{ borderBottom: '1px solid #DCDCDC' }}></div> */}
                        <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-4">
                            <SimpleDropdown data={clientStatus} label="Client Status" onHandleClick={dropdownClick} />
                        </div>
                        <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-4">
                            <SimpleDropdown data={graRep} label="GRA Rep" onHandleClick={dropdownClick} />
                        </div>
                        <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-4">
                            <SimpleDropdown data={comInteract} label="Company Interacted With" onHandleClick={dropdownClick} />
                        </div>
                        <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-4">
                            <SimpleDropdown data={comInteract} label="Contact Interacted With" onHandleClick={dropdownClick} />
                        </div>
                        <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-4">
                            <SimpleDropdown data={interactMedia} label="Interaction Media" onHandleClick={dropdownClick} />
                        </div>
                        <div className="col-span-12 my-2 w-full" style={{ borderBottom: '1px solid #DCDCDC' }}></div>
                        <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-4">
                            <FormInput
                                onChange={handleInputChange}
                                type="text"
                                value={formData.bankName}
                                placeholder="Bank Name"
                                name="bankName"
                                label="OldCo “Safe” Bank Name"
                                disabled={!isEditMode}
                            />
                        </div>

                        <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-4">
                            <FormInput
                                onChange={handleInputChange}
                                type="text"
                                value={formData.accountNumber}
                                placeholder="Account Number"
                                name="accountNumber"
                                label="OldCo “Safe” Bank Account Number"
                                disabled={!isEditMode}
                            />
                        </div>
                        <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-4">
                            <FormInput
                                onChange={handleInputChange}
                                type="text"
                                value={formData.sweepAccountNumber}
                                placeholder="Sweep Account Number"
                                name="sweepAccountNumber"
                                label="Sweep Account Number"
                                disabled={!isEditMode}
                            />
                        </div>
                        <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-12">
                            <FormInput onChange={handleInputChange} type="text" value={formData.bankNotes} placeholder="Bank Notes" name="bankNotes" label="Bank Notes" disabled={!isEditMode} />
                        </div>
                        <div className="col-span-12 my-2 w-full" style={{ borderBottom: '1px solid #DCDCDC' }}></div>
                        <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-4">
                            <SimpleDropdown data={B2B} label="B2B/B2C" onHandleClick={dropdownClick} />
                        </div>
                        <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-4">
                            <FormInput
                                onChange={handleInputChange}
                                type="number"
                                value={formData.numberOfEmployees}
                                placeholder="Number of Employees"
                                name="numberOfEmployees"
                                label="Number of Employees"
                                disabled={!isEditMode}
                            />
                        </div>
                        <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-4">
                            <FormInput
                                onChange={handleInputChange}
                                type="text"
                                value={formData.productVersion}
                                placeholder="Product Version"
                                name="productVersion"
                                label="Product Version"
                                disabled={!isEditMode}
                                icon={<DownArrow />}
                            />
                        </div>
                        <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-8">
                            <FormInput
                                onChange={handleInputChange}
                                type="text"
                                value={formData.product}
                                placeholder="Product + Service"
                                name="product"
                                label="Product + Service"
                                disabled={!isEditMode}
                            />
                        </div>

                        <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-4">
                            <FormInput
                                onChange={handleInputChange}
                                type="text"
                                value={formData.riskTolerance}
                                placeholder="Risk Tolerance"
                                name="riskTolerance"
                                label="Risk Tolerance"
                                disabled={!isEditMode}
                            />
                        </div>

                        <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-12">
                            <FormInput
                                onChange={handleInputChange}
                                type="text"
                                value={formData.keyBusinessIssues}
                                placeholder="Key Business Issues"
                                name="keyBusinessIssues"
                                label="Key Business Issues"
                                disabled={!isEditMode}
                            />
                        </div>
                        <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12">
                            <FormInput
                                onChange={handleInputChange}
                                type="text"
                                value={formData.programNotes}
                                placeholder="Program Notes"
                                name="programNotes"
                                label="Program Notes"
                                disabled={!isEditMode}
                                isTextArea={true}
                            />
                        </div>
                        <div className="col-span-12 my-2 w-full" style={{ borderBottom: '1px solid #DCDCDC' }}></div>
                        <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-8">
                            <FormInput
                                onChange={handleInputChange}
                                type="text"
                                value={formData.businessAddress}
                                placeholder="Address"
                                name="businessAddress"
                                label="Business Address"
                                disabled={!isEditMode}
                            />
                        </div>
                        <div className="max-xl:col-span-6 max-sm:col-span-12 col-span-12 sm:col-span-4">
                            <FormInput onChange={handleInputChange} type="text" value={formData.websiteUrl} placeholder="https://" name="websiteUrl" label="Business Website" disabled={!isEditMode} />
                        </div>
                    </div>
                    <div className="flex w-full justify-end gap-4">
                        {!isEditMode && (
                            <div className="flex gap-3 ">
                                <Button value="Edit" onClick={() => setIsEditMode(!isEditMode)} className="!h-[45px] !px-6 !py-2" />
                            </div>
                        )}
                        {isEditMode && (
                            <div className="flex gap-x-4">
                                <Button value="Cancel" onClick={() => ''} className="!h-[45px] !bg-[#EFEFEF] !px-6 !py-2 !text-charcoal" />
                                <Button value="Save" onClick={handleSave} className="!h-[45px] !px-6 !py-2" />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientForm;
