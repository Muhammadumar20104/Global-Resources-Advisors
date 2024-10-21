'use client';
import Image from 'next/image';
import React, { useState, type ChangeEvent } from 'react';
import { Input } from '@/components/common/Input';
import { Eye, EyeOff } from '@/components/icons/Eye';
import { Button } from '@/components/common/Button';
import { useRouter } from 'next/navigation';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState('password');
    const { push, back } = useRouter();
    return (
        <div>
            <div className="relative flex min-h-screen flex-col items-center justify-between bg-[url(/assets/images/login.png)] bg-cover bg-center bg-no-repeat px-2 sm:px-16 sm:py-[30px]">
                <div className="mt-10 flex items-center justify-center sm:mt-10 ">
                    <Image src="/assets/images/logo.png" alt="image" width={400} height={128} className='sm:w-auto !w-[300px]'/>
                </div>

                <div className="relative -mt-10 w-full max-w-[870px]  rounded-md sm:p-2">
                    <div className="relative flex flex-col items-center justify-center">
                        <div className="mx-auto flex w-full max-w-[662px] flex-col gap-y-6 rounded-2xl bg-white px-4 py-6 sm:p-12">
                            <p className="mb-0 text-base font-normal text-lightblue">Please fill in your Unique Admin Login details below</p>
                            <div>
                                <p className="mb-1 text-sm font-normal text-lightgrey ">Email Address</p>
                                <Input type="text" placeholder="Email" value={email} onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
                            </div>
                            <div>
                                <p className="mb-1 text-sm font-normal text-lightgrey ">Password</p>
                                <div className="relative">
                                    <Input type={showPassword} placeholder="Password" value={password} onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
                                    <span className="absolute right-5 top-1/2 -translate-y-1/2" onClick={() => setShowPassword(showPassword === 'password' ? 'text' : 'password')}>
                                        {showPassword === 'password' ? <Eye /> : <EyeOff />}
                                    </span>
                                </div>
                            </div>
                            <div>
                                <Button value="Login" onClick={() => push('/')} className="justify-center" />
                            </div>
                        </div>
                    </div>
                </div>
                <p className="mb-0 text-right text-lg font-normal text-white">GRA Dashboard Version 1.0</p>
            </div>
        </div>
    );
};

export default Login;
