import React, { type Dispatch, type ReactNode, type SetStateAction } from 'react';
import { Delete } from '@/components/icons/Delete';

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

const Modal = ({ children, isOpen, width = 'max-w-md', height = 'h-[600px]', setOpenModal, outerClassName = '', innerClassName = '', bgColor = 'bg-grey dark:bg-gray-800', name }: ModalProps) => {
    const closeModal = () => {
        setOpenModal?.(false);
    };

    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 z-[999] flex items-center justify-center overflow-y-auto overflow-x-hidden"
                    onClick={closeModal} // Close the modal on clicking the background
                >
                    {/* Black mask */}
                    <div className="fixed inset-0 bg-black opacity-70"></div>

                    {/* Modal content */}
                    <div
                        className="my-8 inline-block w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal content
                    >
                        <h1 className="text-lg font-medium leading-6 text-gray-900">Confirm Deletion ({name})</h1>
                        <div className="mt-2">
                            <p className="text-sm text-gray-500">Are you sure you want to delete this event?</p>
                        </div>
                        <div className="mt-4 text-end">
                            <button
                                type="button"
                                className="inline-flex justify-center rounded-lg border border-transparent bg-red-500 px-4 py-3 text-sm font-medium text-white hover:bg-red-600 focus:outline-none"
                            >
                                Delete
                            </button>
                            <button
                                type="button"
                                className="ml-2 inline-flex justify-center rounded-lg border border-transparent bg-gray-200 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-300 focus:outline-none"
                                onClick={closeModal}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
