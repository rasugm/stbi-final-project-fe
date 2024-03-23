/* eslint-disable max-len */
/* eslint-disable indent */

import clsx from 'clsx';
import { Link, useLocation } from 'react-router-dom';
import { LIST_MENU } from '@/constants/menus.ts';
import Icon from '@/components/base/Icon';
import { APP_ENV, IMAGES } from '@/configs';
import { Fragment, useEffect, useState } from 'react';
import useWindowDimensions from '@/hooks/useWindowDimensions';
import { cn } from '@/utils/className';
import { usePageIdentity } from '@/hooks/useContext';

const ANIMATION = 'gap-2 transform transition-all duration-300';

const DEFAULT_MENU =
    'p-2 relative justify-between flex w-full items-center cursor-pointer hover:rounded-l-[30px] hover:bg-tertiary-100 hover:text-primary-500 duration-100';

const SidebarMobile = () => {
    const [menuExpand, setMenuExpand] = useState('');

    const { minimize, setMinimize } = usePageIdentity();
    const { pathname } = useLocation();
    const getActivePage = (url: string) => {
        return url.split('/')[1] === pathname.split('/')[1];
    };

    const { width } = useWindowDimensions();

    const isCollapse = (menu: any) => {
        return menuExpand === menu.title || getActivePage(menu.link)
            ? 'block translate-y-0'
            : 'hidden -translate-y-full';
    };

    useEffect(() => {
        if (width < 1028) {
            setMinimize(true);
        } else {
            setMinimize(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [width]);

    return (
        <>
            <div
                className={cn(
                    'z-[100]  overflow-y-auto fixed w-full h-full flex flex-col left-0  transition-all duration-300 ',
                    minimize ? 'w-0 pl-0 bg-tertiary-100' : 'w-[264px] pl-2 bg-white'
                )}
            >
                {/* backdrop */}
                <div className="pt-9 pb-4 px-2 pr-3 relative flex items-center justify-between">
                    <img
                        src={minimize ? IMAGES.LOGO_FABD_V4_MINIMIZE : IMAGES.LOGO_FABD_V4}
                        alt="logo-fabd"
                        className="h-[27px]"
                    />
                </div>
                {LIST_MENU.map((group_menu, index) =>
                    group_menu.stage.includes(APP_ENV) ? (
                        <div className="mb-2 relative" key={`group-nav-${index}`}>
                            {!minimize && (
                                <div className="mb-2">
                                    <small
                                        key={`group-title-${index}`}
                                        className="pt-3 pl-2 pb-3 text-tertiary-400 text-base"
                                    >
                                        {group_menu.name}
                                    </small>
                                </div>
                            )}

                            <div key={index}>
                                {/* ELEMENT DROPDOWN MENU */}
                                {group_menu.list_menu.map((menu, index) => (
                                    <Fragment key={index}>
                                        {menu?.submenu.length > 0 ? (
                                            <Fragment key={index}>
                                                {menu.stage.includes(APP_ENV) ? (
                                                    <Fragment key={index}>
                                                        <div
                                                            className={clsx(
                                                                DEFAULT_MENU,
                                                                getActivePage(menu.link)
                                                                    ? 'bg-tertiary-100 rounded-l-[30px] font-bold text-primary-500'
                                                                    : ' text-tertiary-500'
                                                            )}
                                                            onClick={() =>
                                                                setMenuExpand(
                                                                    menuExpand === menu.title ? '' : menu.title
                                                                )
                                                            }
                                                        >
                                                            {getActivePage(menu.link) && (
                                                                <>
                                                                    <div className="bg-tertiary-100 w-[20px] h-[20px] absolute top-[-20px] right-0 nav-items-curve" />
                                                                    <div className="bg-tertiary-100 w-[20px] h-[20px] absolute bottom-[-20px] rotate-[-90deg] right-0 nav-items-curve" />
                                                                </>
                                                            )}
                                                            <div className="flex items-center gap-3">
                                                                <div
                                                                    className={clsx(
                                                                        getActivePage(menu.link)
                                                                            ? `bg-primary-500 p-3 rounded-[20px]`
                                                                            : `${
                                                                                  minimize ? 'pl-0' : 'pl-3'
                                                                              } pt-3 pb-3 pr-3`
                                                                    )}
                                                                >
                                                                    <menu.icon
                                                                        className={clsx(
                                                                            getActivePage(menu.link)
                                                                                ? 'text-white'
                                                                                : 'opacity-50'
                                                                        )}
                                                                        size={20}
                                                                        variant="outline"
                                                                    />
                                                                </div>
                                                                {!minimize && (
                                                                    <span className={`truncate flex-1 text-[14px]`}>
                                                                        {menu.title}
                                                                    </span>
                                                                )}
                                                            </div>
                                                            {!minimize && (
                                                                <div className="pr-2">
                                                                    <Icon
                                                                        name="chevron-right"
                                                                        className={clsx(
                                                                            'transition-all duration-300',
                                                                            menuExpand === menu.title
                                                                                ? 'transform rotate-90'
                                                                                : ''
                                                                        )}
                                                                        size={24}
                                                                    />
                                                                </div>
                                                            )}
                                                        </div>
                                                        {!minimize && (
                                                            <div
                                                                className={`p-4 flex flex-col ${ANIMATION}
                                                                ${isCollapse(menu)}`}
                                                            >
                                                                {menu?.submenu.map((sub, index) => (
                                                                    <Link
                                                                        key={`item-sub-menu-${index}`}
                                                                        to={sub.link}
                                                                        className={`${
                                                                            getActivePage(sub.link)
                                                                                ? 'text-primary-500'
                                                                                : 'text-tertiary-500'
                                                                        }  cursor-pointer hover:text-primary-500 flex gap-2 items-center`}
                                                                    >
                                                                        <Icon name="circle" size={16} />
                                                                        <p
                                                                            className={`${
                                                                                getActivePage(sub.link)
                                                                                    ? 'text-primary-500'
                                                                                    : 'text-tertiary-500'
                                                                            }  hover:text-primary-500 text-[14px]`}
                                                                        >
                                                                            {sub.title}
                                                                        </p>
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </Fragment>
                                                ) : (
                                                    <></>
                                                )}
                                            </Fragment>
                                        ) : menu.stage.includes(APP_ENV) ? (
                                            <Fragment key={index}>
                                                <Link
                                                    // onClick={width <= 768 ? () => setMinimize(true) : () => null}
                                                    to={menu.link}
                                                    key={`item-nav-${index}`}
                                                    title={menu.title}
                                                    className={clsx(
                                                        DEFAULT_MENU,
                                                        minimize ? 'justify-center' : 'justify-between',
                                                        getActivePage(menu.link)
                                                            ? 'bg-tertiary-100 rounded-l-[30px] font-bold text-primary-500'
                                                            : ' border-l-4 border-transparent text-tertiary-500'
                                                    )}
                                                >
                                                    {getActivePage(menu.link) && (
                                                        <>
                                                            <div className="bg-tertiary-100 w-[20px] h-[20px] absolute top-[-20px] right-0 nav-items-curve" />
                                                            <div className="bg-tertiary-100 w-[20px] h-[20px] absolute bottom-[-20px] rotate-[-90deg] right-0 nav-items-curve" />
                                                        </>
                                                    )}

                                                    <div className="flex gap-2 items-center">
                                                        <div
                                                            className={clsx(
                                                                getActivePage(menu.link)
                                                                    ? `bg-primary-500 p-3 text-center rounded-full elevation-3 `
                                                                    : `${minimize ? 'pl-0' : 'pl-3'} pt-3 pb-3 pr-3 `
                                                            )}
                                                        >
                                                            <menu.icon
                                                                className={clsx(
                                                                    getActivePage(menu.link)
                                                                        ? 'text-white '
                                                                        : 'opacity-50'
                                                                )}
                                                                size={20}
                                                            />
                                                        </div>
                                                        {!minimize && (
                                                            <span className="truncate flex-1 text-[14px]">
                                                                {menu.title}
                                                            </span>
                                                        )}
                                                    </div>
                                                </Link>
                                            </Fragment>
                                        ) : (
                                            <></>
                                        )}
                                    </Fragment>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <></>
                    )
                )}
            </div>
            {!minimize ? (
                <div
                    onClick={() => setMinimize(true)}
                    className="z-[99] bg-black/50 w-full h-ful fixed left-0 right-0 bottom-0 top-0"
                />
            ) : null}
        </>
    );
};

export default SidebarMobile;
