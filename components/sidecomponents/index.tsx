'use client';
import { usePathname } from 'next/navigation';
import React from 'react';
import { TopClients } from './TopClients';
import { Notification } from './Notification';

export const Notifications = () => {
    const pathname = usePathname().split('/')[1];
    return <div>{pathname == 'clients' ? <TopClients /> : <Notification />}</div>;
};
