'use client';
import { useDispatch } from 'react-redux';
import { toggleNotificationPanel } from '@/store/themeConfigSlice';
import { useEffect } from 'react';

import { usePathname } from 'next/navigation';
import CloseArrow from '../icons/Dashboard/CloseArrow';

const NotificationPanel = ({ children }: { children: React.ReactNode }) => {
    const dispatch = useDispatch();
    const pathname = usePathname();

    // useEffect(() => {
    //     if (window.innerWidth < 1024) {
    //         dispatch(toggleNotificationPanel());
    //     }
    // }, [pathname]);

    return (
        <div>
            <nav
                className={`notification-panel overflow-y-scroll no-scrollbar fixed bottom-0 top-0 z-50 h-full min-h-screen w-[360px] bg-white px-4 py-3 transition-all duration-300 sm:px-8 sm:py-6`}
                style={{ borderLeft: '1px solid #DCDCDC' }}
            >
                <div className="relative flex flex-col gap-12">
                    <div className="absolute sm:right-0 -right-2  top-0 cursor-pointer text-black xl:hidden" onClick={() => dispatch(toggleNotificationPanel())}>
                        <CloseArrow />
                    </div>
                    {children}
                </div>
            </nav>
        </div>
    );
};

export default NotificationPanel;
