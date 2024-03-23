import clsx from 'clsx';
import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/base/Icon';
import { IMAGES } from '@/configs';
import { usePageIdentity } from '@/hooks/useContext';
import { IconType } from '@/configs/Icons';
import { Fragment, useEffect, useState } from 'react';
import { cn } from '@/utils/className';
import { useWindowSize } from 'usehooks-ts';
import ReactGA from 'react-ga';
import { ENVIRONMENT } from '@/constants';
import { env } from '@/configs/env';
import { LIST_MENU } from './const';

const ANIMATION = 'gap-2 transform transition-all duration-300';
const DEFAULT_MENU =
    'p-2 relative justify-between flex w-full items-center cursor-pointer hover:rounded-l-[30px] hover:bg-tertiary-100 hover:text-primary-500 duration-100';

const Sidebar = () => {
    const { minimize, setMinimize } = usePageIdentity();

    const [isHide, setIsHide] = useState(false);

    const [menuExpand, setMenuExpand] = useState('');

    const {
        pathname,
        search
    } = useLocation();

    const getActivePage = (url: string) => {
        return pathname?.includes(url);
    };

    const { width } = useWindowSize();
    const isCollapse = (menu: any) => {
        return menuExpand === menu.menu.name || getActivePage(menu.menu.link)
            ? 'block translate-y-0'
            : 'hidden -translate-y-full';
    };

    useEffect(() => {
        if (width !== 0) {
            if (width < 1028) {
                setMinimize(true);
                setIsHide(true);
            } else {
                setMinimize(false);
                setIsHide(false);
            }
        }
        return () => { };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [width]);

    useEffect(() => {
        setIsHide(minimize);
    }, [minimize]);

    useEffect(() => {
        if (ENVIRONMENT.PROD === env.REACT_APP_ENV) {
            ReactGA.initialize(env.REACT_GA_MEASUREMENT_ID);
        }
    }, []);

    useEffect(() => {
        if (ENVIRONMENT.PROD === env.REACT_APP_ENV) {
            ReactGA.pageview(pathname + search);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    if (width === 0) return null;

    return (
        <div
            className={cn(
                'pl-2 z-15 bg-white h-full relative overflow-y-auto flex flex-col left-0  transition-all duration-300 ', // Menambahkan transisi pada semua properti termasuk lebar
                minimize && isHide ? 'w-[60px] items-center' : 'w-[264px]' // Menggunakan lebar yang berbeda sesuai dengan kondisi minimize
            )}
        >
            <div className="pt-9 pb-4 px-2 pr-3 relative flex items-center justify-between">
                <img
                    src={isHide && minimize ? IMAGES.LOGO_FABD_V4_MINIMIZE : IMAGES.LOGO_FABD_V4}
                    alt="logo-fabd"
                    className="h-[27px]"
                />
            </div>
            {LIST_MENU.map((group_menu, index) => (
                <div className="mb-2 relative" key={`group-nav-${index}`}>
                    {(!isHide || !minimize) && (
                        <div className="mb-2">
                            <small key={`group-title-${index}`} className="pt-3 pl-2 pb-3 text-tertiary-400 text-base">
                                {group_menu.title}
                            </small>
                        </div>
                    )}

                    <div key={index}>
                        {/* ELEMENT DROPDOWN MENU */}
                        {group_menu.menus.map((menu:any, index:number) => (
                            <Fragment key={index}>
                                {menu?.sub_menu.length > 0 ? (
                                    <Fragment key={index}>
                                        <div
                                            className={clsx(
                                                DEFAULT_MENU,
                                                getActivePage(menu.menu.url)
                                                    ? 'bg-tertiary-100 rounded-l-[30px] font-bold text-primary-500'
                                                    : ' text-tertiary-500'
                                            )}
                                            onClick={() =>
                                                setMenuExpand(menuExpand === menu.menu.name ? '' : menu.menu.name)
                                            }
                                        >
                                            {getActivePage(menu.menu.url) && (
                                                <>
                                                    <div className="bg-tertiary-100 w-[20px] h-[20px] absolute top-[-20px] right-0 nav-items-curve" />
                                                    <div className="bg-tertiary-100 w-[20px] h-[20px] absolute bottom-[-20px] rotate-[-90deg] right-0 nav-items-curve" />
                                                </>
                                            )}
                                            <div className="flex items-center gap-3">
                                                <div
                                                    className={clsx(
                                                        getActivePage(menu.menu.url)
                                                            ? `bg-primary-500 p-3 rounded-[20px]`
                                                            : `${isHide && minimize ? 'pl-0' : 'pl-3'} pt-3 pb-3 pr-3`
                                                    )}
                                                >
                                                    <Icon
                                                        name={menu.menu.icon as IconType}
                                                        className={clsx(
                                                            getActivePage(menu.menu.url) ? 'text-white' : 'opacity-50'
                                                        )}
                                                        size={20}
                                                    />
                                                </div>
                                                {(!isHide || !minimize) && (
                                                    <span className={`truncate flex-1 text-[14px]`}>
                                                        {menu.menu.name}
                                                    </span>
                                                )}
                                            </div>
                                            {(!isHide || !minimize) && (
                                                <div className="pr-2">
                                                    <Icon
                                                        name="chevron-right"
                                                        className={clsx(
                                                            'transition-all duration-300',
                                                            menuExpand === menu.menu.name ? 'transform rotate-90' : ''
                                                        )}
                                                        size={24}
                                                    />
                                                </div>
                                            )}
                                        </div>

                                        {(!isHide || !minimize) && (
                                            <div className={`p-4 flex flex-col ${ANIMATION} ${isCollapse(menu)}`}>
                                                {menu?.sub_menu.map((sub:any, index:number) => (
                                                    <Link
                                                        key={`item-sub-menu-${index}`}
                                                        to={sub.menu.url}
                                                        className={cn(
                                                            getActivePage(sub.menu.url)
                                                                ? 'text-primary-500'
                                                                : 'text-tertiary-500',
                                                            'cursor-pointer hover:text-primary-500 flex gap-2 items-center'
                                                        )}
                                                    >
                                                        <Icon name="circle" size={16} />
                                                        <p
                                                            className={`${getActivePage(sub.menu.url)
                                                                ? 'text-primary-500': 'text-tertiary-500'}  hover:text-primary-500 text-[14px]`}
                                                        >
                                                            {sub.menu.name}
                                                        </p>
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </Fragment>
                                ) : (
                                    <Fragment key={index}>
                                        <Link
                                            // onClick={width <= 768 ? () => setMinimize(true) : () => null}
                                            to={menu.menu.url}
                                            key={`item-nav-${index}`}
                                            title={menu.menu.name}
                                            className={clsx(
                                                DEFAULT_MENU,
                                                isHide && minimize ? 'justify-center' : 'justify-between',
                                                getActivePage(menu.menu.url)
                                                    ? 'bg-tertiary-100 rounded-l-[30px] font-bold text-primary-500'
                                                    : ' border-l-4 border-transparent text-tertiary-500'
                                            )}
                                        >
                                            {getActivePage(menu.menu.url) && (
                                                <>
                                                    <div className="bg-tertiary-100 w-[20px] h-[20px] absolute top-[-20px] right-0 nav-items-curve" />
                                                    <div className="bg-tertiary-100 w-[20px] h-[20px] absolute bottom-[-20px] rotate-[-90deg] right-0 nav-items-curve" />
                                                </>
                                            )}

                                            <div className="flex gap-2 items-center">
                                                <div
                                                    className={clsx(
                                                        getActivePage(menu.menu.url)
                                                            ? `bg-primary-500 p-3 text-center rounded-full elevation-3 `
                                                            : `${isHide && minimize ? 'pl-0' : 'pl-3'} pt-3 pb-3 pr-3 `
                                                    )}
                                                >
                                                    <Icon
                                                        name={menu.menu.icon as IconType}
                                                        className={clsx(
                                                            getActivePage(menu.menu.url) ? 'text-white' : 'opacity-50'
                                                        )}
                                                        size={20}
                                                    />
                                                </div>
                                                {(!isHide || !minimize) && (
                                                    <span className="truncate flex-1 text-[14px]">
                                                        {menu.menu.name}
                                                    </span>
                                                )}
                                            </div>
                                        </Link>
                                    </Fragment>
                                )}
                            </Fragment>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Sidebar;
