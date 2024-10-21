'use client';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { toggleSidebar } from '@/store/themeConfigSlice';
import { IRootState } from '@/store';
import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { Dashboard } from '../icons/Dashboard';
import { sidebarLinks } from '@/app/constants/siderbar';
import { SidebarLinks } from '@/components/common/SidebarLinks';
import { Logout } from '../icons/sidebar/Logout';
import { LogoutActive } from '../icons/sidebar/LogoutActive';
import { DownArrow } from '../icons/Dashboard/DownArrow';
import AnimateHeight from 'react-animate-height';

const Sidebar = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isCoreOpen, setIsCoreOpen] = useState(true);
    const [isOperationalOpen, setIsOperationalOpen] = useState(true);

    const dispatch = useDispatch();
    const pathname = usePathname();
    const { push } = useRouter();
    const themeConfig = useSelector((state: IRootState) => state.themeConfig);

    useEffect(() => {
        if (window.innerWidth < 1024 && themeConfig.sidebar) {
            dispatch(toggleSidebar());
        }
    }, [pathname]);

    const activePath = pathname.split('/')[1];

    const toggleCoreManagement = () => {
        setIsCoreOpen(!isCoreOpen);
    };

    const toggleOperationalManagement = () => {
        setIsOperationalOpen(!isOperationalOpen);
    };

    return (
        <div>
            <nav className={`sidebar fixed bottom-0 top-0 z-50 h-full min-h-screen w-[280px] overflow-y-scroll bg-white transition-all duration-300`} style={{ borderRight: '1px solid #DCDCDC' }}>
                <div className="flex flex-col gap-y-6 px-4 py-3 sm:px-8 sm:py-6">
                    <Link href={'/profile'} className="flex items-center gap-x-3 p-2">
                        <Image src="/assets/images/profile.png" alt="image" width={48} height={48} className="rounded-full" />
                        <p className="mb-0 text-base font-normal text-charcoal">Peter Amazeen</p>
                    </Link>
                    <div className="flex flex-col gap-y-2">
                        <Link href={'/'} className={`flex cursor-pointer items-center gap-x-3 rounded-xl hover:bg-offwhite bg-${pathname == '/' ? 'offwhite' : ''} px-6 py-2`}>
                            <Dashboard />
                            <p className="mb-0 font-inter text-base font-normal text-charcoal">Dashboard</p>
                        </Link>

                        {/* Core Management */}
                        <div className="flex cursor-pointer items-center justify-between" onClick={toggleCoreManagement}>
                            <h3 className="mb-0 font-inter text-sm font-normal text-lightgrey">Core Functions</h3>
                            <div className={`transition-transform duration-300 ${isCoreOpen ? 'rotate-180' : ''}`}>
                                <DownArrow />
                            </div>
                        </div>
                        <AnimateHeight duration={300} height={isCoreOpen ? 'auto' : 0}>
                            <div className="flex flex-col gap-y-2 overflow-hidden">
                                {sidebarLinks.core.map((item, index) => (
                                    <SidebarLinks key={index} item={item} index={index} activePath={activePath} />
                                ))}
                            </div>
                        </AnimateHeight>

                        {/* Operational Management */}
                        <div className="flex cursor-pointer items-center justify-between" onClick={toggleOperationalManagement}>
                            <h3 className="mb-0 font-inter text-sm font-normal text-lightgrey">Extra Functions</h3>
                            <div className={`transition-transform duration-300 ${isOperationalOpen ? 'rotate-180' : ''}`}>
                                <DownArrow />
                            </div>
                        </div>
                        <AnimateHeight duration={300} height={isOperationalOpen ? 'auto' : 0}>
                            <div className="flex flex-col gap-y-2 overflow-hidden">
                                {sidebarLinks.operational.map((item, index) => (
                                    <SidebarLinks key={index} item={item} index={index} activePath={activePath} />
                                ))}
                            </div>
                        </AnimateHeight>

                        {/* Logout */}
                        <button
                            className={`flex cursor-pointer items-center gap-x-3 rounded-xl px-6 py-2 hover:bg-offwhite`}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            onClick={() => push('/signin')}
                        >
                            {!isHovered ? <Logout /> : <LogoutActive />}
                            <p className="mb-0 font-inter text-base font-normal text-charcoal">Logout</p>
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;
