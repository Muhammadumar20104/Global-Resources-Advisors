import Login from '@/components/pages/auth/Login';
import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';

export const metadata: Metadata = {
    title: 'Login',
};

const SignIn = () => {
    return (
        <div>
          <Login/>
        </div>
    );
};

export default SignIn;
