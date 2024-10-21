import { Dispatch } from '@reduxjs/toolkit';
import type { ChangeEvent, ReactNode, SetStateAction } from 'react';

export type inputField = {
    type: string;
    placeholder?: string;
    className?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    value: string;
    disabled?: boolean;
};

export type button = {
    className?: string;
    value: string;
    icon?: React.ReactNode;
    onClick: () => void;
};
export interface FormLink {
    link: string;
    label: string;
    isDisabled: boolean;
}

export type FormLinks = FormLink[] | string[];

export interface FormDropDownProps {
    formLinks?: FormLinks;
    onClick: (linkOrLabel: string) => void;
    isOpen: boolean;
    toggleDropdown: () => void;
    close:()=>void;
    wirdth?:string;
    name?:string;
}

export type inputFieldForm = {
    type: string;
    placeholder?: string;
    className?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
    value?: string;
    name: string;
    isTextArea?: boolean;
    icon?: React.ReactNode;
    label?: string;
    disabled?: boolean;
    cap?: boolean;
};

export type searchParams = {
    slug?: string;
    mode?: string;
};

export type InteractionProps = {
    id?: string;
    mode?: string;
};
