import { AuthContext } from '@/context/AuthContext';
import { LoginContext } from '@/context/LoginContext';
import { ModalAlertContext } from '@/context/ModalAlertContext';
import { PageIdentityContext } from '@/context/PageIdentityContext';
import { TabContext } from '@/context/TabContext';
import { useContext } from 'react';

export const useTab = () => {
    const context = useContext(TabContext);
    if (context === undefined) {
        throw new Error('useTab must be within TabProvider');
    }
    return context;
};

export const useModalAlert = () => {
    const context = useContext(ModalAlertContext);
    if (context === undefined) {
        throw new Error('useModalAlert must be within ModalAlertProvider');
    }
    return context;
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be within AuthProvider');
    }
    return context;
};

export const useLoginContext = () => {
    const context = useContext(LoginContext);
    if (context === undefined) {
        throw new Error('useLogin must be within LoginProvider');
    }
    return context;
};

export const usePageIdentity = () => {
    const context = useContext(PageIdentityContext);
    if (context === undefined) {
        throw new Error('usePageIdentity must be within PageIdentityProvider');
    }
    return context;
};

