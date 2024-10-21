'use client';
import { useEffect, useState, useRef, type ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { toggleNotificationPanel, toggleSidebar } from '@/store/themeConfigSlice';
import IconSearch from '@/components/icon/icon-search';
import { usePathname } from 'next/navigation';
import { LeftMenu, RightMenu } from '../icons/Menu';
import { Notification } from '../icons/Notification';
import Link from 'next/link';
import { searchOption } from '@/app/constants/dashboard';
import { searchInData } from '../utils/common';
import { setSearchData } from '@/store/searchResult';

const Header = () => {
    const [search, setSearch] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const pathname = usePathname();
    const dispatch = useDispatch();
    const searchRef = useRef(null);

    const name = pathname.split('/')[1];

    useEffect(() => {
        const selector = document.querySelector('ul.horizontal-menu a[href="' + window.location.pathname + '"]');
        if (selector) {
            const all: any = document.querySelectorAll('ul.horizontal-menu .nav-link.active');
            for (let i = 0; i < all.length; i++) {
                all[0]?.classList.remove('active');
            }

            let allLinks = document.querySelectorAll('ul.horizontal-menu a.active');
            for (let i = 0; i < allLinks.length; i++) {
                const element = allLinks[i];
                element?.classList.remove('active');
            }
            selector?.classList.add('active');

            const ul: any = selector.closest('ul.sub-menu');
            if (ul) {
                let ele: any = ul.closest('li.menu').querySelectorAll('.nav-link');
                if (ele) {
                    ele = ele[0];
                    setTimeout(() => {
                        ele?.classList.add('active');
                    });
                }
            }
        }
        setSearchValue('');
        const searchInput = name ? name : 'clients';
        const data = searchOption.find((item) => item.name === searchInput);
        const searchResult = searchInData(data?.data, '') ?? [];
        dispatch(setSearchData(searchResult));
    }, [pathname]);

    useEffect(() => {
        function handleClickOutside(event: any) {
            //@ts-ignore
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setSearch(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [searchRef]);

    const lastPageName = name
        .slice(1)
        .split('-')
        .map((word, index) => {
            if (index === 0) {
                return word.charAt(0).toLowerCase() + word.slice(1);
            }
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(' ');

    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
        const searchInput = name ? name : 'clients';
        const data = searchOption.find((item) => item.name === searchInput);
        const searchResult = searchInData(data?.data, event.target.value);
        dispatch(setSearchData(searchResult));
    };

    return (
        <header className={`z-40 bg-white`} style={{ borderBottom: '1px solid #DCDCDC' }}>
            <div className="shadow-sm">
                <div className="relative flex w-full items-center bg-white px-8 py-4 dark:bg-black">
                    <div className="horizontal-logo flex items-center justify-between ltr:mr-2 rtl:ml-2 lg:hidden">
                        <button type="button" className="collapse-icon flex flex-none lg:hidden" onClick={() => dispatch(toggleSidebar())}>
                            <LeftMenu />
                        </button>
                        <div className="ms-6 hidden gap-x-3 sm:flex">
                            <Link href={'/'}>
                                <p className="mb-0 text-sm font-normal text-lightgrey"> Dashboard</p>
                            </Link>
                            <p className="mb-0 text-charcoal">/</p>
                            <p className="mb-0 text-sm font-normal text-charcoal">{name ? name.charAt(0).toUpperCase() + lastPageName : 'Overview'}</p>
                        </div>{' '}
                    </div>

                    <div className="ms-auto flex items-center">
                        <div className="sm:ltr:mr-auto sm:rtl:ml-auto" ref={searchRef}>
                            <form
                                className={`${search && '!block'} absolute inset-x-0 top-1/2 z-10 mx-4 hidden -translate-y-1/2 sm:relative sm:top-0 sm:mx-0 sm:block sm:translate-y-0`}
                                onSubmit={() => setSearch(false)}
                            >
                                <div className="relative">
                                    <input
                                        type="text"
                                        className="w-[220px] rounded-xl bg-offwhite py-2 pe-8 ps-12 text-sm font-normal text-lightgrey outline-none 2xl:w-[330px] sm:w-[240px]"
                                        placeholder="Search"
                                        value={searchValue}
                                        onChange={handleSearch}
                                    />
                                    <button type="button" className="absolute left-6 top-2.5 h-4 w-4 appearance-none" onClick={() => setSearch(false)}>
                                        <IconSearch className="mx-auto" />
                                    </button>
                                </div>
                            </form>
                            <button
                                type="button"
                                onClick={() => setSearch(!search)}
                                className="search_btn rounded-full bg-white-light/40 p-2 hover:bg-white-light/90 dark:bg-dark/40 dark:hover:bg-dark/60 sm:hidden"
                            >
                                <IconSearch className="relative z-30 mx-auto h-4.5 w-4.5 dark:text-[#d0d2d6]" />
                            </button>
                        </div>
                        <span className="ms-6">
                            <Notification />
                        </span>
                        <button type="button" className="collapse-icon ms-6 flex flex-none lg:hidden" onClick={() => dispatch(toggleNotificationPanel())}>
                            <RightMenu />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
