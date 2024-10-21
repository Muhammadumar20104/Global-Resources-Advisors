import React from 'react';
import NotificationPanel from '../layouts/NotificanPanel';
import { notification, notificationActivities } from '@/app/dummy/notification';

export const Notification = () => {
    return (
        <NotificationPanel>
            <div className="flex flex-col gap-y-6">
                <h3 className="mb-0 font-inter text-sm font-normal text-charcoal">Notifications</h3>
                <div className="flex flex-col gap-y-4">
                    {notification.map((item, index) => (
                        <div key={index} className="flex gap-x-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFEEE6]">{item.icon}</div>
                            <div className="">
                                <h3 className="font-inter text-base font-normal text-charcoal">{item.title}</h3>
                                <div className="flex items-center justify-between gap-x-2 text-lightgrey">
                                    <p className="font-inter text-xs font-normal">{item.description}</p>
                                    <span className="h-1 w-1 rounded-full bg-lightgrey"></span>
                                    <span className="font-inter text-xs font-normal">{item.date}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-y-6">
                <h3 className="mb-0 font-inter text-sm font-normal text-charcoal">Recent Activities</h3>
                <div className="flex flex-col gap-y-4">
                    {notificationActivities.map((item, index) => (
                        <div key={index} className="flex gap-x-4">
                            <div className={`flex h-10 w-10 items-center justify-center rounded-full `} style={{ backgroundColor: item.iconBg }}>
                                {item.icon}
                            </div>
                            <div className="">
                                <h3 className="font-inter text-base font-normal text-charcoal">{item.title}</h3>
                                <div className="flex items-center justify-between gap-x-2 text-lightgrey">
                                    <p className="font-inter text-xs font-normal">{item.description}</p>
                                    <span className="h-1 w-1 rounded-full bg-lightgrey"></span>
                                    <span className="font-inter text-xs font-normal">{item.date}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </NotificationPanel>
    );
};
