'use client';
import { LIEN_STATUS, MCA_COM_NAME, PAYMENT_FREQUENCY, PAYMENT_STATUS, SETTLEMENT_PRIORITY, TYPE_OF_CONTRACT } from '@/app/constants/dashboard';
import { clientLoanData } from '@/app/dummy/mcLoan';
import { InteractionProps } from '@/app/types/common';
import { Button } from '@/components/common/Button';
import SimpleDropdown from '@/components/common/DropDown';
import FormDropDown from '@/components/common/formdropdown/FormDropDown';

import { FormInput } from '@/components/common/FormInput';
import { DownArrow } from '@/components/icons/Dashboard/DownArrow';
import DateIcon from '@/components/icons/Interaction/DateIcon';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const MCA_Loan: React.FC<InteractionProps> = ({ id, mode }) => {
    const paymentFrequency = Object.values(PAYMENT_FREQUENCY);
    const paymentStatus = Object.values(PAYMENT_STATUS);
    const settlementPriority = Object.values(SETTLEMENT_PRIORITY);
    const typeOfContract = Object.values(TYPE_OF_CONTRACT);
    const lienStatus = Object.values(LIEN_STATUS);
    const mcaComName = Object.values(MCA_COM_NAME);
    const [formData, setFormData] = useState({
        clientMcaLoanName: '',
        clientCompanyName: '',
        mcaCompanyName: '',
        typeOfContract: '',
        originalRtr: '',
        loanDate: '',
        paymentFrequency: '',
        paymentAmount: '',
        actualPayments: '',
        actualPaymentNote: '',
        specifiedPercentage: '',
        actualPaymentDue: '',
        overUnderPayment: '',
        fbd: '',
        currentRtrBalance: '',
        principalBalance: '',
        demandBalance: '',
        paymentStatus: '',
        lienStatus: '',
        settlementPriority: '',
        notes: '',
    });
    const [isEditMode, setIsEditMode] = useState(false);
    const { push, back } = useRouter();

    useEffect(() => {
        if (id) {
            const data = clientLoanData.find((item) => item.slug === id);
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
        push('/mca-loan/0?mode=edit');
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
                        <h2 className="mb-0  font-inter text-lg font-bold text-charcoal">Add Client MCA Loans</h2>
                    ) : (
                        <div className="font-inter text-lg font-bold leading-[21.6px] text-charcoal">{isEditMode && mode === 'edit' ? 'Edit Client MCA Loans ' : 'View Client MCA Loans '}</div>
                    )}
                </div>
                {/* hr line */}
                <div className="w-full" style={{ borderBottom: '1px solid #DCDCDC' }}></div>
            </div>

            {/* Input */}
            <div className="flex flex-col gap-6 pt-8">
                {/* Form Inputs */}
                <div className="grid grid-cols-12 gap-6">
                    <div className="max-sm:col-span-12 col-span-12 sm:col-span-4">
                        <FormInput
                            type="select"
                            value={formData.clientCompanyName}
                            name="clientCompanyName"
                            placeholder="Client Name"
                            label="Client Name"
                            onChange={handleInputChange}
                            icon={<DownArrow />}
                        />
                    </div>

                    <div className="max-sm:col-span-12 col-span-12 sm:col-span-4">
                        <SimpleDropdown data={mcaComName} label="MCA Company Name" onHandleClick={dropdownClick} />
                    </div>
                    <div className="max-sm:col-span-12 col-span-12 sm:col-span-4">
                        <FormInput
                            type="number"
                            value={formData.currentRtrBalance}
                            name="currentRtrBalance"
                            placeholder="Current RTR Balance"
                            label="Current RTR Balance"
                            onChange={handleInputChange}
                            cap={true}
                        />
                    </div>
                    <div className="max-sm:col-span-12 col-span-12 sm:col-span-4">
                        <FormInput type="date" value={formData.loanDate} name="loanDate" placeholder="Loan date" label="Loan date" onChange={handleInputChange} />
                    </div>
                    <div className="max-sm:col-span-12 col-span-12 sm:col-span-4">

                        <SimpleDropdown data={typeOfContract} label="Type Of Contract" onHandleClick={dropdownClick} />
                    </div>
                    <div className="max-sm:col-span-12 col-span-12 sm:col-span-4">
                        <SimpleDropdown data={settlementPriority} label="Settlement Priority" onHandleClick={dropdownClick} />

                    </div>
                    <div className="max-sm:col-span-12 col-span-12 sm:col-span-4">
                        <FormInput type="text" value={formData.fbd} name="fbd" placeholder="FBD" label="FBD" onChange={handleInputChange} cap={true} />
                    </div>
                    <div className="max-sm:col-span-12 col-span-12 sm:col-span-4">

                        <SimpleDropdown data={paymentStatus} label="Payment Status" onHandleClick={dropdownClick} />

                    </div>
                    <div className="max-sm:col-span-12 col-span-12 sm:col-span-4">
                        <SimpleDropdown data={lienStatus} label="Lien Status" onHandleClick={dropdownClick} />
                    </div>
                    <div className="max-sm:col-span-12 col-span-12 sm:col-span-12">
                        <FormInput type="text" value={formData.notes} name="notes" placeholder="write..." label="Notes" onChange={handleInputChange} icon={<DownArrow />} isTextArea={true} />
                    </div>
                    <div className="max-sm:col-span-12 col-span-12 sm:px-6">
                        <h3 className=" text-lg font-bold">Loan Details</h3>
                    </div>

                    <div className="max-sm:col-span-12 col-span-12 sm:col-span-4">

                        <SimpleDropdown data={paymentFrequency} label="Payment Frequency" onHandleClick={dropdownClick} />

                    </div>

                    <div className="max-sm:col-span-12 col-span-12 sm:col-span-4">
                        <FormInput type="number" value={formData.paymentAmount} name="paymentAmount" placeholder="Payment amount" label="Payment amount" onChange={handleInputChange} />
                    </div>
                    <div className="max-sm:col-span-12 col-span-12 sm:col-span-4">
                        <FormInput
                            type="number"
                            value={formData.specifiedPercentage}
                            name="specifiedPercentage"
                            placeholder="Specified percentage"
                            label="Specified percentage"
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="max-sm:col-span-12 col-span-12 sm:col-span-6">
                        <FormInput type="number" value={formData.actualPayments} name="actualPayments" placeholder="Actual payments" label="Actual payments" onChange={handleInputChange} />
                    </div>

                    <div className="max-sm:col-span-12 col-span-12 sm:col-span-6">
                        <FormInput type="text" value={formData.actualPaymentNote} name="actualPaymentNote" placeholder="Actual payment note" label="Actual payment note" onChange={handleInputChange} />
                    </div>

                    <div className="max-sm:col-span-12 col-span-12 sm:col-span-6">
                        <FormInput type="text" value={formData.actualPaymentDue} name="actualPaymentDue" placeholder="Actual payment due" label="Actual payment due" onChange={handleInputChange} />
                    </div>
                    <div className="max-sm:col-span-12 col-span-12 sm:col-span-6">
                        <FormInput
                            type="text"
                            value={formData.overUnderPayment}
                            name="overUnderPayment"
                            placeholder="Over- / Under- Payment"
                            label="Over- / Under- Payment"
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="max-sm:col-span-12 col-span-12 sm:col-span-4">
                        <FormInput type="number" value={formData.principalBalance} name="principalBalance" placeholder="Principal balance" label="Principal balance" onChange={handleInputChange} />
                    </div>

                    <div className="max-sm:col-span-12 col-span-12 sm:col-span-4">
                        <FormInput type="number" value={formData.demandBalance} name="demandBalance" placeholder="Demand balance" label="Demand balance" onChange={handleInputChange} />
                    </div>
                    <div className="max-sm:col-span-12 col-span-12 sm:col-span-4">
                        <FormInput type="number" value={formData.originalRtr} name="originalRtr" placeholder="Original RTR" label="Original RTR" onChange={handleInputChange} cap={true} />
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

export default MCA_Loan;
