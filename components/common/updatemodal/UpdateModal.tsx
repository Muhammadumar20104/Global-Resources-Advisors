import { Eye, EyeOff } from '@/components/icons/Eye';
import React, { useState, type Dispatch, type ReactNode, type SetStateAction } from 'react';
import { Input } from '../Input';
import { Button } from '../Button';

type ModalProps = {
    isOpen?: boolean;
    width?: string;
    height?: string;
    children?: ReactNode;
    setOpenModal?: Dispatch<SetStateAction<boolean>>;
    name?: string;
    outerClassName?: string;
    innerClassName?: string;
    bgColor?: string;
};

const UpdateModal = ({
    children,
    isOpen,
    width = 'max-w-md',
    height = 'h-[600px]',
    setOpenModal,
    outerClassName = '',
    innerClassName = '',
    bgColor = 'bg-grey dark:bg-gray-800',
    name,
}: ModalProps) => {
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const closeModal = () => {
        setOpenModal?.(false);
    };

    return (
        <>
            <div
                className="fixed inset-0 z-[999] flex items-center justify-center overflow-y-auto overflow-x-hidden"
                onClick={closeModal} // Close the modal on clicking the background
            >
                {/* Black mask */}
                <div className="fixed inset-0 bg-black opacity-70"></div>

                {/* Modal content */}
                <div
                    className={`my-8 inline-block w-full ${width} transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all ${innerClassName}`}
                    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal content
                >
                    <h1 className="text-lg font-medium leading-6 text-gray-900">Change Password ({name})</h1>
                    <div className="mt-4 space-y-4">
                        {/* Old Password */}
                        <div>
                            <label className="block text-sm font-medium text-lightgrey">Old Password</label>
                            <div className="relative mt-1">
                                <Input
                                    type={showOldPassword ? 'text' : 'password'}
                                    placeholder="Old Password"
                                    value={oldPassword}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setOldPassword(e.target.value)}
                                />
                                <span className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3" onClick={() => setShowOldPassword(!showOldPassword)}>
                                    {showOldPassword ? <EyeOff /> : <Eye />}
                                </span>
                            </div>
                        </div>

                        {/* New Password */}
                        <div>
                            <label className="block text-sm font-medium text-lightgrey">New Password</label>
                            <div className="relative mt-1">
                                <Input
                                    type={showNewPassword ? 'text' : 'password'}
                                    placeholder="New Password"
                                    value={newPassword}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewPassword(e.target.value)}
                                />
                                <span className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3" onClick={() => setShowNewPassword(!showNewPassword)}>
                                    {showNewPassword ? <EyeOff /> : <Eye />}
                                </span>
                            </div>
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label className="block text-sm font-medium text-lightgrey">Confirm Password</label>
                            <div className="relative mt-1">
                                <Input
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    placeholder="Confirm Password"
                                    value={confirmPassword}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
                                />
                                <span className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                    {showConfirmPassword ? <EyeOff /> : <Eye />}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Additional content passed as children */}
                    {/* {children} */}

                    <div className="mt-6 flex w-full justify-end gap-4 text-right">
                        <Button value="Cancel" onClick={closeModal} className="!h-[45px] !w-fit justify-center bg-gray-200 !px-6 !py-2 !text-gray-700 hover:bg-gray-300" />
                        <Button value="Save" onClick={closeModal} className="!h-[45px] !w-fit justify-center   !px-6 !py-2" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default UpdateModal;
