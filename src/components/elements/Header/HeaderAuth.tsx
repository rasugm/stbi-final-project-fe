import { Link } from 'react-router-dom';

import Button from '@/components/base/Button/Button';
import Icon from '@/components/base/Icon/Icon';

import { IMAGES } from '@/configs';

const HeaderAuth = () => {

    const navItems = [
        { title: 'Home', link: '/', submenu: [], dropdown: false },
        { title: 'About Us', link: '/about', submenu: [], dropdown: true },
        { title: 'News', link: '', submenu: [], dropdown: false },
        { title: 'Help', link: '/', submenu: [], dropdown: true },
        { title: 'Contact', link: '', submenu: [], dropdown: false },
    ];

    return (
        <header className="z-header z-[100] sticky left-0 top-0 border-b border-tertiary-300 bg-white font-primary h-[78px] flex items-center">
            <div className="max-w-[1440px] flex w-full items-center justify-between mx-auto px-6 py-2">
                <img src={IMAGES.LOGO_FABD} alt="logo" className="h-[21px]" />
                <nav className="hidden md:block">
                    <ul className="flex space-x-4 relative">
                        {navItems.map((navItem, index) => (
                            <li className="" key={index}>
                                {navItem.link ? (
                                    <Link to={navItem.link}>
                                        <p className="body-small text-tertiary-700 px-3 py-2 hover:bg-tertiary-50 hover:rounded-md">
                                            {navItem.title}
                                        </p>
                                    </Link>
                                ) : (
                                    <div className="cursor-pointer flex items-center hover:bg-tertiary-50 hover:rounded-md px-3 py-2">
                                        <p className="body-small text-tertiary-700 mr-2">{navItem.title}</p>
                                        <Icon name="chevron-down" size={16} className="text-tertiary-700" />
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="space-x-8 items-center hidden md:flex">
                    <div className="cursor-pointer flex items-center hover:bg-tertiary-50 hover:rounded-md px-3 py-2">
                        <Icon name="language" size={16} className="text-tertiary-70" />
                        <p className="body-small text-tertiary-70 mx-2">IND</p>
                        <Icon name="chevron-down" size={16} className="text-tertiary-70" />
                    </div>
                    <Button size="xs" variant="outlined" color="tertiary" children={(<span className="font-semibold text-tertiary-800">Login</span>)} />
                </div>
            </div>
        </header>
    );
};

export default HeaderAuth;
