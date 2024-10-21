import React from 'react';
import { Metadata } from 'next';
import { Dashboard } from '@/components/pages/dashboard/Dashboard';

export const metadata: Metadata = {
    title: 'Dashboard',
};

const Sales = () => {
    return (
        <div>
            <Dashboard />
        </div>
    );
};

export default Sales;
