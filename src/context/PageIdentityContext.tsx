import { Dispatch, ReactNode, SetStateAction, createContext, useMemo, useState } from 'react';

interface IPageIdentityProvider {
    children: ReactNode;
}

type TPageIdentity = {
    title: string;
    breadcrumbs?: {
        title: string;
        path: string;
    }[];
};

interface IPageIdentityContext extends TPageIdentity {
    setPageIdentity: Dispatch<SetStateAction<{ title: string; breadcrumbs: never[] }>>;
    minimize: boolean;
    setMinimize: Dispatch<SetStateAction<boolean>>;
}

export const PageIdentityContext = createContext<IPageIdentityContext | undefined>(undefined);

const PageIdentityProvider = ({ children }: IPageIdentityProvider) => {
    // CREATE SETTER AND GETTER FOR BREADCRUMBS
    const [pageIdentity, setPageIdentity] = useState({
        title: '',
        breadcrumbs: [],
    });
    const [minimize, setMinimize] = useState(false);

    // USE MEMO
    const values = useMemo(() => {
        return {
            ...pageIdentity,
            setPageIdentity,
            minimize,
            setMinimize,
        };
    }, [pageIdentity, minimize]);

    return <PageIdentityContext.Provider value={values}>{children}</PageIdentityContext.Provider>;
};

export default PageIdentityProvider;
