import { TAccessAction } from '@/constants/types';
import { KEY_STORAGE } from '@/constants/keyStorage';
import { decrypt } from '@/utils/encryption';
import { useEffectOnce } from 'usehooks-ts';
import { useState } from 'react';

// for dynamic use case
export const useAccessAction = (action?: TAccessAction): boolean | undefined => {
    const [res, setRes] = useState<boolean | undefined>(undefined);
    useEffectOnce(() => {
        if (!action) return;
        const storageMenu = localStorage.getItem(KEY_STORAGE.menu);
        let pathname = window.location.href.replace('//', '');
        const menuUrl = pathname?.replace('/v4', '').split('/')[1];
        let menus: any['permissions'] = [];
        if (storageMenu) {
            try {
                const menu = JSON.parse(storageMenu);
                menus = JSON.parse(decrypt(menu));
            } catch {
                menus = [];
            }
        }
        const checkAccess = (property: TAccessAction) => {
            const currentMenu = menus.find((item:any) => item.menu.url.replace('/', '') === menuUrl);
            if (!currentMenu) return false;
            return Boolean(currentMenu[property]);
        };
        setRes(checkAccess(action));
    });
    if (!action) return undefined;
    return res;
};

// better for one or many use case
export const useCanAccess = () => {
    const [res, setRes] = useState({
        canRead: false,
        canCreate: false,
        canUpdate: false,
        canDelete: false,
        canApprove: false,
    });
    useEffectOnce(() => {
        const storageMenu = localStorage.getItem(KEY_STORAGE.menu);
        let pathname = window.location.href.replace('//', '');
        const menuUrl = pathname?.replace('/v4', '').split('/')[1];
        let menus: any['permissions'] = [];
        if (storageMenu) {
            try {
                const menu = JSON.parse(storageMenu);
                menus = JSON.parse(decrypt(menu));
            } catch {
                menus = [];
            }
        }
        const checkAccess = (property: TAccessAction) => {
            const currentMenu = menus.find((item:any) => item.menu.url.replace('/', '') === menuUrl);
            if (!currentMenu) return false;
            return Boolean(currentMenu[property]);
        };
        setRes({
            canRead: checkAccess('read'),
            canCreate: checkAccess('create'),
            canUpdate: checkAccess('update'),
            canDelete: checkAccess('delete'),
            canApprove: checkAccess('approve'),
        });
    });
    return res;
};

// better for spesific use case
export const useCanCreate = () => {
    return useAccessAction('create');
};

export const useCanUpdate = () => {
    return useAccessAction('update');
};

export const useCanDelete = () => {
    return useAccessAction('delete');
};

export const useCanRead = () => {
    return useAccessAction('read');
};

export const useCanApprove = () => {
    return useAccessAction('approve');
};
