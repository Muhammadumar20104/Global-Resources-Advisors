'use client';
import React, { useState, useRef, ChangeEvent } from 'react';
import { Button } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { maskEmail } from './utils';
import { ProfileImg } from '@/components/icons/Interaction/ProfileImg';
import ImgPlus from '@/components/icons/Interaction/ImgPlus';
import UpdateModal from '@/components/common/updatemodal/UpdateModal';

export const Profile = () => {
    const emails = {
        secondary: 'peteramazeen@gmail.com',
        primary: 'peteramazeen@globalresource.com',
    };

    const [showPassword, setShowPassword] = useState('password');
    const [password, setPassword] = useState('');
    const [fName, setFName] = useState('Peter Amazeen');
    const [email, setEmail] = useState(maskEmail(emails.secondary));
    const [recoverEmail, setRecoverEmail] = useState(maskEmail(emails.primary));
    const [image, setImage] = useState('/assets/images/login.png');

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.files);
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const { push } = useRouter();

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handlePlusClick = () => {
        fileInputRef.current?.click();
    };


    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setImage(URL.createObjectURL(e.target.files[0]));
        }
    };

    const profileContent = (
        <div className="mb-5 rounded-md border border-[#ebedf2] bg-white p-4 dark:border-[#191e3a] dark:bg-black">
            <h6 className="mb-5 text-lg font-bold">General Information</h6>
            <div className="flex lg:flex-col xl:flex-row flex-col sm:flex-row">
                <div className="mb-5 w-full sm:w-2/12 ltr:sm:mr-4 rtl:sm:ml-4">
                    <div className="relative h-32 w-32 cursor-pointer rounded-full bg-mintlight">
                        <input type="file" accept="image/*" ref={fileInputRef} className="absolute inset-0 cursor-pointer opacity-0" onChange={handleFileChange} />
                        <div className="flex h-full w-full flex-col items-center justify-center">
                            <ProfileImg />
                        </div>
                        <div className="absolute -right-1 bottom-0 h-10 w-10 cursor-pointer rounded-full bg-blueroyal" onClick={handlePlusClick}>
                            <div className="flex h-full w-full items-center justify-center">
                                <ImgPlus />                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid flex-1 grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                        <p className="mb-1 text-sm font-normal text-lightgrey ">Full Name</p>
                        <Input type="text" placeholder="Full Name" value={fName} onChange={(e) => setFName(e.target.value)} />
                    </div>
                    <div>
                        <p className="mb-1 text-sm font-normal text-lightgrey ">Email Address</p>
                        <Input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="relative">
                        <p className="mb-1 text-sm font-normal text-lightgrey ">Update Password</p>
                        <Button
                            value="Update Password"
                            onClick={() => setIsModalOpen(true)} // Open modal on click
                            className="!h-[45px] justify-center !px-6 !py-2"
                        />
                    </div>
                    <div>
                        <p className="mb-1 text-sm font-normal text-lightgrey ">Reovery Email Address</p>
                        <Input type="text" placeholder="Email" value={recoverEmail} onChange={(e) => setRecoverEmail(e.target.value)} />
                    </div>
                    <div></div>
                    <div className='flex flex-col'>
                        <p className="mb-1 text-sm font-normal text-lightgrey ">Login Image</p>
                        <div className="relative flex xl:flex-row !flex-col gap-x-4 gap-4">
                            <div className="relative flex h-11 w-32 cursor-pointer items-center justify-center rounded-xl border border-blueroyal bg-mintlight">
                                <p className="mb-0 text-sm font-normal text-blueroyal ">Choose Image</p>
                                <input type="file" accept="image/*" className="absolute inset-0 h-11 w-32 cursor-pointer opacity-0" onChange={handleImageChange} />
                            </div>
                            <Image src={image} width={408} height={408} alt="img" className="  h-32 w-60 rounded-md" />
                        </div>
                    </div>
                    <div className="mt-3 w-40 sm:col-span-2">
                        <Button value="Save" onClick={() => push('/')} className="!h-[45px] justify-center !px-6 !py-2" />
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <>
            {profileContent}
            {isModalOpen && (
                <UpdateModal isOpen={isModalOpen} setOpenModal={setIsModalOpen} name={fName}>
                    {profileContent}
                </UpdateModal>
            )}
        </>
    );
};
