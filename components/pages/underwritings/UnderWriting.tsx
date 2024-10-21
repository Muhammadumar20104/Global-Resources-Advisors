'use client';
import { underWritingData } from '@/app/dummy/underwritings';
import { InteractionProps } from '@/app/types/common';
import { Button } from '@/components/common/Button';
import { FormInput } from '@/components/common/FormInput';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const UnderWriting: React.FC<InteractionProps> = ({ id, mode }) => {
    const [formData, setFormData] = useState({
        client: '',
        revenue: '',
        directLabor: '',
        materials: '',
        subContractorLabor: '',
        cardFees: '',
        subTotal: '',
        gp: '',
        advertising: '',
        bankFees: '',
        equipmentPayments: '',
        insurance: '',
        licensesPermits: '',
        salaries: '',
        repairsMaintenance: '',
        subscriptions: '',
        phoneInternet: '',
        webSite: '',
        rent: '',
        utilities: '',
        other: '',
        subTotalExpenses: '',
        ebitda: '',
        cash: '',
        ar: '',
        equipment: '',
        otherFixed: '',
        assets: '',
        totalDebt: '',
        totalPayables: '',
        taxLiability: '',
        liabilities: '',
        assetsLiabilities: '',
        scheduledMCA: '',
        actualMCA: '',
        notes: '',
    });
    const [isEditMode, setIsEditMode] = useState(false);
    const { push, back } = useRouter();

    useEffect(() => {
        if (id) {
            const data = underWritingData.find((item) => item.slug === id);
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

    const calculateSubTotal: any = () => {
        return Number(formData.directLabor) + Number(formData.cardFees);
    };
    const calculateGP: any = () => {
        return Number(formData.revenue) - calculateSubTotal();
    };
    const calculateSubTotalExpenses: any = () => {
        return Number(formData.advertising) + Number(formData.other);
    };
    const calculateEBITDA: any = () => {
        return calculateGP() - calculateSubTotalExpenses();
    };
    const calculateAssets: any = () => {
        return Number(formData.cash) + Number(formData.otherFixed);
    };
    const calculateLiabilities: any = () => {
        return Number(formData.totalDebt) + Number(formData.taxLiability);
    };
    const handleSave = () => {
        // Save logic here
        console.log('Data saved:', formData);
        setIsEditMode(!isEditMode);
        push('/underwriting/0?mode=edit');
        back();
    };
    return (
        <div className="px-4 py-4 sm:px-8 sm:py-8">
            {/* Navabr  */}
            <div className="flex flex-col gap-6">
                <div className="flex w-full items-center  justify-between sm:px-6 ">
                    {mode === 'create' ? (
                        <h2 className="mb-0  font-inter text-lg font-bold text-charcoal">Add Underwriting</h2>
                    ) : (
                        <div className="font-inter text-lg font-bold leading-[21.6px] text-charcoal">{isEditMode && mode === 'edit' ? 'Edit Underwriting Details' : 'View Underwriting Details'}</div>
                    )}
                </div>
                {/* hr line  */}
                <div className="w-full" style={{ borderBottom: '1px solid #DCDCDC' }}></div>
            </div>

            {/* Input  */}
            <div className="flex flex-col gap-6 pt-8">
                {/* images  */}

                {/* input field  */}
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 sm:col-span-6">
                        <FormInput disabled={!isEditMode} type="text" value={formData.revenue} placeholder="Client" className="" onChange={handleInputChange} name="client" label="Client" />
                    </div>
                    <div className="max-sm:col-span-6 col-span-12 sm:px-6">
                        <h3 className="text-lg font-bold">P&L</h3>
                    </div>
                    {/* Revenue */}
                    <div className="max-xl:col-span-6 max-sm:col-span-6 col-span-12 sm:col-span-6">
                        <FormInput disabled={!isEditMode} type="number" value={formData.revenue} placeholder="Revenue" className="" onChange={handleInputChange} name="revenue" label="Revenue" />
                    </div>

                    {/* Direct Labor */}
                    <div className="max-xl:col-span-6 max-sm:col-span-6 col-span-12 sm:col-span-6">
                        <FormInput
                            disabled={!isEditMode}
                            type="number"
                            value={formData.directLabor}
                            placeholder="Direct labor"
                            className=""
                            onChange={handleInputChange}
                            name="directLabor"
                            label="Direct labor"
                        />
                    </div>

                    {/* Materials */}
                    <div className="max-xl:col-span-6 max-sm:col-span-6 col-span-12 sm:col-span-6">
                        <FormInput
                            disabled={!isEditMode}
                            type="number"
                            value={formData.materials}
                            placeholder="Materials"
                            className=""
                            onChange={handleInputChange}
                            name="materials"
                            label="Materials"
                        />
                    </div>

                    {/* Sub-contractor Labor */}
                    <div className="max-xl:col-span-6 max-sm:col-span-6 col-span-12 sm:col-span-6">
                        <FormInput
                            disabled={!isEditMode}
                            type="number"
                            value={formData.subContractorLabor}
                            placeholder="Sub-contractor labor"
                            className=""
                            onChange={handleInputChange}
                            name="subContractorLabor"
                            label="Sub-contractor labor"
                        />
                    </div>

                    {/* Card Fees */}
                    <div className="max-xl:col-span-6 max-sm:col-span-6 col-span-12 sm:col-span-6">
                        <FormInput disabled={!isEditMode} type="number" value={formData.cardFees} placeholder="Card fees" className="" onChange={handleInputChange} name="cardFees" label="Card fees" />
                    </div>

                    {/* Sub-total (Sum a:e) - This will be a calculated field */}
                    <div className="max-xl:col-span-6 max-sm:col-span-6 col-span-12 sm:col-span-6">
                        <FormInput
                            disabled={!isEditMode}
                            type="number"
                            value={calculateSubTotal()}
                            placeholder="Sub-total"
                            className=""
                            onChange={handleInputChange}
                            name="subTotal"
                            label="Sub-total (sum b:e)"
                            cap={true}
                        />
                    </div>

                    {/* GP (a-f) - This will be a calculated field */}
                    <div className="max-xl:col-span-6 max-sm:col-span-6 col-span-12 sm:col-span-6">
                        <FormInput disabled={!isEditMode} type="number" value={calculateGP()} placeholder="GP" className="" onChange={handleInputChange} name="gp" label="GP (a-f)" cap={true} />
                    </div>

                    {/* Advertising */}
                    <div className="max-xl:col-span-6 max-sm:col-span-6 col-span-12 sm:col-span-6">
                        <FormInput
                            disabled={!isEditMode}
                            type="number"
                            value={formData.advertising}
                            placeholder="Advertising"
                            className=""
                            onChange={handleInputChange}
                            name="advertising"
                            label="Advertising"
                        />
                    </div>

                    {/* Bank Fees */}
                    <div className="max-xl:col-span-6 max-sm:col-span-6 col-span-12 sm:col-span-6">
                        <FormInput disabled={!isEditMode} type="number" value={formData.bankFees} placeholder="Bank fees" className="" onChange={handleInputChange} name="bankFees" label="Bank fees" />
                    </div>

                    {/* Equipment Payments */}
                    <div className="max-xl:col-span-6 max-sm:col-span-6 col-span-12 sm:col-span-6">
                        <FormInput
                            disabled={!isEditMode}
                            type="number"
                            value={formData.equipmentPayments}
                            placeholder="Equipment payments"
                            className=""
                            onChange={handleInputChange}
                            name="equipmentPayments"
                            label="Equipment payments"
                        />
                    </div>

                    {/* Insurance */}
                    <div className="max-xl:col-span-6 max-sm:col-span-6 col-span-12 sm:col-span-6">
                        <FormInput
                            disabled={!isEditMode}
                            type="number"
                            value={formData.insurance}
                            placeholder="Insurance"
                            className=""
                            onChange={handleInputChange}
                            name="insurance"
                            label="Insurance"
                        />
                    </div>

                    {/* Licenses / Permits */}
                    <div className="max-xl:col-span-6 max-sm:col-span-6 col-span-12 sm:col-span-6">
                        <FormInput
                            disabled={!isEditMode}
                            type="number"
                            value={formData.licensesPermits}
                            placeholder="Licenses / permits"
                            className=""
                            onChange={handleInputChange}
                            name="licensesPermits"
                            label="Licenses / permits"
                        />
                    </div>

                    {/* Salaries */}
                    <div className="max-xl:col-span-6 max-sm:col-span-6 col-span-12 sm:col-span-6">
                        <FormInput disabled={!isEditMode} type="number" value={formData.salaries} placeholder="Salaries" className="" onChange={handleInputChange} name="salaries" label="Salaries" />
                    </div>

                    {/* Repairs + Maintenance */}
                    <div className="max-xl:col-span-6 max-sm:col-span-6 col-span-12 sm:col-span-6">
                        <FormInput
                            disabled={!isEditMode}
                            type="number"
                            value={formData.repairsMaintenance}
                            placeholder="Repairs + maintenance"
                            className=""
                            onChange={handleInputChange}
                            name="repairsMaintenance"
                            label="Repairs + maintenance"
                        />
                    </div>

                    {/* Subscriptions */}
                    <div className="max-xl:col-span-6 max-sm:col-span-6 col-span-12 sm:col-span-6">
                        <FormInput
                            disabled={!isEditMode}
                            type="number"
                            value={formData.subscriptions}
                            placeholder="Subscriptions"
                            className=""
                            onChange={handleInputChange}
                            name="subscriptions"
                            label="Subscriptions"
                        />
                    </div>

                    {/* Phone / Internet */}
                    <div className="max-xl:col-span-6 max-sm:col-span-6 col-span-12 sm:col-span-6">
                        <FormInput
                            disabled={!isEditMode}
                            type="number"
                            value={formData.phoneInternet}
                            placeholder="Phone / internet"
                            className=""
                            onChange={handleInputChange}
                            name="phoneInternet"
                            label="Phone / internet"
                        />
                    </div>

                    {/* WebSite */}
                    <div className="max-xl:col-span-6 max-sm:col-span-6 col-span-12 sm:col-span-6">
                        <FormInput disabled={!isEditMode} type="number" value={formData.webSite} placeholder="Website" className="" onChange={handleInputChange} name="webSite" label="Website" />
                    </div>

                    {/* Rent */}
                    <div className="max-xl:col-span-6 max-sm:col-span-6 col-span-12 sm:col-span-6">
                        <FormInput disabled={!isEditMode} type="number" value={formData.rent} placeholder="Rent" className="" onChange={handleInputChange} name="rent" label="Rent" />
                    </div>

                    {/* Utilities */}
                    <div className="max-xl:col-span-6 max-sm:col-span-6 col-span-12 sm:col-span-6">
                        <FormInput
                            disabled={!isEditMode}
                            type="number"
                            value={formData.utilities}
                            placeholder="Utilities"
                            className=""
                            onChange={handleInputChange}
                            name="utilities"
                            label="Utilities"
                        />
                    </div>

                    {/* Other */}
                    <div className="max-xl:col-span-6 max-sm:col-span-6 col-span-12 sm:col-span-6">
                        <FormInput disabled={!isEditMode} type="number" value={formData.other} placeholder="Other" className="" onChange={handleInputChange} name="other" label="Other" />
                    </div>

                    {/* Sub-total (Sum h:t) - This will be a calculated field */}
                    <div className="max-xl:col-span-6 max-sm:col-span-6 col-span-12 sm:col-span-6">
                        <FormInput
                            disabled={!isEditMode}
                            type="number"
                            value={calculateSubTotalExpenses()}
                            placeholder="Sub-total"
                            className=""
                            onChange={handleInputChange}
                            name="subTotalExpenses"
                            label="Sub-total (Sum h:t)"
                        />
                    </div>

                    {/* EBITDA (g-u) - This will be a calculated field */}
                    <div className="max-xl:col-span-6 max-sm:col-span-6 col-span-12 sm:col-span-6">
                        <FormInput
                            disabled={!isEditMode}
                            type="number"
                            value={calculateEBITDA()}
                            placeholder="EBITDA"
                            className=""
                            onChange={handleInputChange}
                            name="ebitda"
                            label="EBITDA (g-u)"
                            cap={true}
                        />
                    </div>
                    <div className="max-sm:col-span-6 col-span-12 sm:px-6">
                        <h3 className=" text-lg font-bold">Balance sheet</h3>
                    </div>

                    {/* Cash */}
                    <div className="max-xl:col-span-6 max-sm:col-span-6 col-span-12 sm:col-span-6">
                        <FormInput disabled={!isEditMode} type="number" value={formData.cash} placeholder="Cash" className="" onChange={handleInputChange} name="cash" label="Cash" />
                    </div>

                    {/* A/R */}
                    <div className="max-xl:col-span-6 max-sm:col-span-6 col-span-12 sm:col-span-6">
                        <FormInput disabled={!isEditMode} type="number" value={formData.ar} placeholder="A/R" className="" onChange={handleInputChange} name="ar" label="A/R" cap={true} />
                    </div>

                    {/* Equipment */}
                    <div className="max-xl:col-span-6 max-sm:col-span-6 col-span-12 sm:col-span-6">
                        <FormInput
                            disabled={!isEditMode}
                            type="number"
                            value={formData.equipment}
                            placeholder="Equipment"
                            className=""
                            onChange={handleInputChange}
                            name="equipment"
                            label="Equipment"
                        />
                    </div>

                    {/* Other Fixed */}
                    <div className="max-xl:col-span-6 max-sm:col-span-6 col-span-12 sm:col-span-6">
                        <FormInput
                            disabled={!isEditMode}
                            type="number"
                            value={formData.otherFixed}
                            placeholder="Other fixed"
                            className=""
                            onChange={handleInputChange}
                            name="otherFixed"
                            label="Other fixed"
                        />
                    </div>

                    {/* Assets (Sum a:d) - This will be a calculated field */}
                    <div className="max-xl:col-span-6 max-sm:col-span-6 col-span-12 sm:col-span-6">
                        <FormInput
                            disabled={!isEditMode}
                            type="number"
                            value={calculateAssets()}
                            placeholder="Assets"
                            className=""
                            onChange={handleInputChange}
                            name="assets"
                            label="Assets (Sum a:d)"
                        />
                    </div>

                    {/* Total Debt */}
                    <div className="max-xl:col-span-6 max-sm:col-span-6 col-span-12 sm:col-span-6">
                        <FormInput
                            disabled={!isEditMode}
                            type="number"
                            value={formData.totalDebt}
                            placeholder="Total debt"
                            className=""
                            onChange={handleInputChange}
                            name="totalDebt"
                            label="Total debt"
                        />
                    </div>
                    <div className="max-xl:col-span-6 max-sm:col-span-6 col-span-12 sm:col-span-6">
                        <FormInput
                            disabled={!isEditMode}
                            type="number"
                            value={formData.totalPayables}
                            placeholder="Total payables"
                            className=""
                            onChange={handleInputChange}
                            name="totalPayables"
                            label="Total payables"
                        />
                    </div>
                    <div className="max-xl:col-span-6 max-sm:col-span-6 col-span-12 sm:col-span-6">
                        <FormInput
                            disabled={!isEditMode}
                            type="number"
                            value={formData.taxLiability}
                            placeholder="Tax liability"
                            className=""
                            onChange={handleInputChange}
                            name="taxLiability"
                            label="Tax liability"
                        />
                    </div>
                    <div className="max-xl:col-span-6 max-sm:col-span-6 col-span-12 sm:col-span-6">
                        <FormInput
                            disabled={!isEditMode}
                            type="number"
                            value={calculateLiabilities()}
                            placeholder="Liabilities(sum e:g)"
                            className=""
                            onChange={handleInputChange}
                            name="liabilities"
                            label="Liabilities(sum e:g)"
                        />
                    </div>

                    <div className="max-xl:col-span-6 max-sm:col-span-6 col-span-12 sm:col-span-6">
                        <FormInput
                            disabled={!isEditMode}
                            type="number"
                            value={formData.scheduledMCA}
                            placeholder="Scheduled MCA payments"
                            className=""
                            onChange={handleInputChange}
                            name="scheduledMCA"
                            label="Scheduled MCA Payments"
                            cap={true}
                        />
                    </div>
                    <div className="max-xl:col-span-6 max-sm:col-span-6 col-span-12 sm:col-span-6">
                        <FormInput
                            disabled={!isEditMode}
                            type="number"
                            value={formData.actualMCA}
                            placeholder="Actual MCA payments"
                            className=""
                            onChange={handleInputChange}
                            name="actualMCA"
                            label="Actual MCA Payments"
                            cap={true}
                        />
                    </div>
                    <div className="col-span-12">
                        <FormInput
                            disabled={!isEditMode}
                            type="text"
                            value={formData.notes}
                            placeholder="Write here..."
                            className=""
                            onChange={handleInputChange}
                            name="notes"
                            label="Notes"
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
    );
};

export default UnderWriting;
