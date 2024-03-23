import Card from '@/components/base/Card';
import Icon from '@/components/base/Icon';
import { ENVIRONMENT } from '@/constants';
import { useAuth, useModalAlert, usePageIdentity } from '@/hooks/useContext';
import { cn } from '@/utils/style';
import { Dispatch, SetStateAction, useState } from 'react';
import Profile from '../Profile';
import Breadcrumb from '@/components/base/Breadcrumb';
import { APP_ENV } from '@/configs';
import { useBreadcrumb } from '@/hooks/useBreadcrumb';
import { truncateString } from '@/utils/common';

interface HeaderDashboardProps {
    minimize: boolean;
    setMinimize: Dispatch<SetStateAction<boolean>>;
}

const HeaderDashboard = ({ minimize, setMinimize }: HeaderDashboardProps) => {
    const pageIdentity = usePageIdentity();

    const [mode, setMode] = useState('light');

    const [showDropdown, setShowDropdown] = useState(false);
    const [showAccountInformation, setAccountInformation] = useState(false);
    const { openModalAlert } = useModalAlert();
    const { user, logout } = useAuth();

    const onMinimize = () => {
        setMinimize(!minimize);
    };

    const handleAccountInformation = () => {
        setAccountInformation(true);
        setShowDropdown(false);
    };

    const handleOnLogout = () => {
        openModalAlert({
            title: 'Log Out',
            desc: 'Are you sure want to logout?',
            labelYes: 'Yes',
            labelClose: 'Cancel',
            centered: true,
            size: 'sm',
            onSubmit: async () => {
                await logout();
            },
        });
    };
    const breadcrumbs = useBreadcrumb();

    return (
        <>
            <header className="z-header shadow-sm rounded-md z-20 bg-white w-full left-0 top-0 px-2 py-2 font-primary h-[65px] flex items-center justify-center ">
                <div className="max-w-[100%] flex w-full items-center justify-between mx-auto px-1">
                    {/* Logo */}
                    <div className="space-x-2 items-center flex gap-1">
                        {/* <img src={IMAGES.LOGO_FABD_V4} alt="logo-fabd" className="h-[45px] cursor-pointer" /> */}
                        <div className="cursor-pointer bg-primary-500 rounded-md p-2" onClick={onMinimize}>
                            <Icon name="menu-2" size={20} className="text-white " />
                        </div>
                        <div className="flex flex-col gap-0 pr-0 border-l border-tertiary-200">
                            <div className="pl-3">
                                <p className="text-tertiary-800 text-[15px] font-bold block">{pageIdentity?.title}</p>
                                <div className="md:block hidden">
                                    <Breadcrumb
                                        items={
                                            pageIdentity?.breadcrumbs && pageIdentity?.breadcrumbs?.length > 0
                                                ? pageIdentity.breadcrumbs
                                                : breadcrumbs
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Account */}
                    <div className="space-x-2 items-center flex">
                        {/* Mode */}
                        {[ENVIRONMENT.STAGING, ENVIRONMENT.DEV].includes(APP_ENV) ? (
                            <div className="p-2.5 hidden md:block">
                                <Icon
                                    name={mode === 'dark' ? 'moon' : 'sun'}
                                    size={20}
                                    className="text-tertiary-800 cursor-pointer"
                                    onClick={() => (mode === 'dark' ? setMode('light') : setMode('dark'))}
                                />
                            </div>
                        ) : (
                            <></>
                        )}

                        {/* Settings */}
                        {[ENVIRONMENT.STAGING, ENVIRONMENT.DEV].includes(APP_ENV) ? (
                            <div className="p-2.5 hidden md:block">
                                <Icon name="settings" size={20} className="text-tertiary-800 cursor-pointer" />
                            </div>
                        ) : (
                            <></>
                        )}
                        {/* Profile */}
                        <div
                            className="relative"
                            // onMouseEnter={() => setShowDropdown(true)}
                            // onMouseLeave={() => setShowDropdown(false)}
                            onClick={() => setShowDropdown(!showDropdown)}
                        >
                            <button
                                className={cn(
                                    'inline-flex w-full items-center rounded-md justify-center border-none space-x-2 px-2 py-1 hover:rounded-md hover:bg-tertiary-100',
                                    showDropdown ? 'bg-tertiary-100' : ''
                                )}
                                type="button"
                            >
                                <img
                                    src={user?.avatar}
                                    className="object-cover h-10 w-10 rounded-full"
                                    alt={user?.full_name}
                                />
                                <div className="flex flex-col w-auto min-w-[100px] text-left text-tertiary-800 caption-large font-bold ">
                                    <span className="truncate">{truncateString(user?.full_name ?? '', 15)}</span>
                                    <small className="text-tertiary-500 font-normal">
                                        {truncateString(user?.position?.toUpperCase() ?? '', 15) }
                                    </small>
                                </div>
                                <Icon name="chevron-down" size={16} />
                            </button>

                            {/* Dropdown */}
                            <Card
                                className={cn(
                                    'absolute p-2 ml-4 min-w-[250px] pt-2 mt-1 right-0 block shadow-sm border border-tertiary-100',
                                    showDropdown ? 'block' : 'hidden'
                                )}
                            >
                                <span>
                                    <p className="dropdown-list" onClick={handleAccountInformation}>
                                        Account Information
                                    </p>
                                </span>
                                <div className="md:hidden block ">
                                    {[ENVIRONMENT.STAGING, ENVIRONMENT.DEV].includes(APP_ENV) ? (
                                        <div
                                            className="p-2.5 flex items-center gap-2 cursor-pointer dropdown-list"
                                            onClick={() => (mode === 'dark' ? setMode('light') : setMode('dark'))}
                                        >
                                            <Icon
                                                name={mode === 'dark' ? 'moon' : 'sun'}
                                                size={20}
                                                className="text-tertiary-800"
                                            />

                                            <p className="font-bold">Theme</p>
                                        </div>
                                    ) : null}

                                    {/* Settings */}
                                    {[ENVIRONMENT.STAGING, ENVIRONMENT.DEV].includes(APP_ENV) ? (
                                        <div className="p-2.5 flex items-center gap-2 cursor-pointer dropdown-list">
                                            <Icon
                                                name="settings"
                                                size={20}
                                                className="text-tertiary-800 cursor-pointer"
                                            />
                                            <p className="font-bold">Settings</p>
                                        </div>
                                    ) : null}
                                </div>
                                <p onClick={handleOnLogout} className="dropdown-list">
                                    Logout
                                </p>
                            </Card>
                        </div>
                    </div>
                </div>

                <Profile isOpen={showAccountInformation} onClose={() => setAccountInformation(false)} />
            </header>
        </>
    );
};

export default HeaderDashboard;
