import { ReactNode, createContext, useCallback, useEffect, useMemo, useState } from 'react';

import { useProfile } from '@/hooks/useServices/useProfile';
import { accessToken, dataBrowser, refreshToken, sessionActive } from '@/utils/storage';
import { FullPageSpinner } from '@/components/elements';
import { TResponseUserManagement } from '@/services/user';
import { URL_WEB } from '@/configs';
import { ENVIRONMENT, WEB } from '@/constants';
import { KEY_STORAGE } from '@/constants/keyStorage';
import { checkIncognitoMode } from '@/utils/checkIncognitoMode';
import { env } from '@/configs/env';

interface IAuthProvider {
    children: ReactNode;
}

interface State {
    isAuthenticated: boolean;
    user: TResponseUserManagement['detail']['data'];
    logout: () => Promise<void>;
    // setUserCache: () => any;
}

const AuthContext = createContext<State | undefined>(undefined);

const AuthProvider = ({ children }: IAuthProvider) => {
    //NOTE: STATE
    const [gettingUser, setGettingUser] = useState(true);
    const accToken = accessToken.get();
    const rfToken = refreshToken.get();
    const cookieDataBrowser = dataBrowser.get();

    //NOTE: HOOKS
    const { data, refetch } = useProfile({
        enabled: false,
        onSuccess() {
            setGettingUser(false);
        },
        onError() {
            setGettingUser(false);
        },
    });


    //NOTE: FUNCTION
    const logout = useCallback(async () => {
        accessToken.remove();
        refreshToken.remove();
        sessionActive.remove();
        dataBrowser.remove();
        localStorage.removeItem(KEY_STORAGE.menu);
        window.location.href =
            location.protocol.concat('//').concat(window.location.host) === URL_WEB && env.REACT_APP_ENV !== ENVIRONMENT.DEV
                ? '/v4' + WEB.LOGIN
                : WEB.LOGIN;
    }, []);

    const value = useMemo(
        () => ({
            user: data?.data,
            isAuthenticated: !!(accToken || rfToken) && Boolean(cookieDataBrowser),
            logout,
        }),
        [data, accToken, rfToken, logout, cookieDataBrowser]
    );
    //NOTE: USE EFFECT
    // useEffect(() => {
    //     if (storageMenu) {
    //         const decryptMenu = JSON.parse(decrypt(storageMenu as any));
    //         setMenus(decryptMenu);
    //     } else {
    //         if (dataRole?.data) {
    //             const filteredMenu = dataRole.data.permissions.filter((item) => {
    //                 if (item.read) return item;
    //             });
    //             setStorageMenu(encrypt(filteredMenu));
    //             setMenus(filteredMenu);
    //         }
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [dataRole, storageMenu]);

    //pengecekan browser
    useEffect(() => {
        const x = async () => {
            let data: {
                isIncognito: boolean,
                browser: string
            } = JSON.parse(cookieDataBrowser);

            if (value.isAuthenticated) {
                const isIncognito = await checkIncognitoMode;
                if (data.isIncognito !== isIncognito.isPrivate || isIncognito.browserName !== data.browser) {
                    logout();
                }
            }
        };
        if (cookieDataBrowser) {
            x();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cookieDataBrowser, value]);

    //pengecekan token
    useEffect(() => {
        if (accToken || rfToken) {
            refetch();
        } else {
            setGettingUser(false);
        }
    }, [rfToken, accToken, refetch]);



    if ((data === undefined && gettingUser)) {
        return <FullPageSpinner />;
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
