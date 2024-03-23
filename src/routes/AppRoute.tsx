/* eslint-disable react/no-multi-comp */
import { APP_ENV } from '@/configs';
import { ENVIRONMENT, WEB } from '@/constants';
import { checkPermission } from '@/utils/checkPermission';
import { Navigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useAuth, usePageIdentity } from '@/hooks/useContext';
import { ErrorBoundary } from 'react-error-boundary';
import { Suspense, useEffect } from 'react';
import { FullPageSpinner } from '@/components/elements';
import { NotFound } from '@/pages/NotFound';
import { useWatchSession } from '@/hooks/useWatchSession';
// import { NotAuthorized } from '@/pages/NotAuthorized';
import { FallbackError } from '@/components/elements/Error';
import { removeStorage } from '@/utils/storage';

type AppRouteProps = {
    children: JSX.Element;
    path: string;
    permissions: string[];
    isPrivate?: boolean;
    stage: ENVIRONMENT.OPTIONAL[] | string[];
    title: string;
    breadcrumbs?: {
        title: string;
        path: string;
    }[];
};

const grantAccess = [''];
const role = 'admin';

function FallbackErrorNotif() {
    return <FallbackError />;
}

const AppRoute = ({ permissions, isPrivate, stage, children, title, breadcrumbs }: AppRouteProps) => {
    const PageIdentityCtx = usePageIdentity();
    useEffect(() => {
        PageIdentityCtx.setPageIdentity({
            title: title,
            breadcrumbs: breadcrumbs as any,
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [title]);

    const { isAuthenticated } = useAuth();
    useWatchSession();

    let location = useLocation();


    if (!stage.includes(APP_ENV)) {
        return (
            <>
                <Helmet>
                    <title>Halaman Tidak Ditemukan</title>
                </Helmet>
                <NotFound />
            </>
        );
    }

    if (!isAuthenticated && isPrivate) {
        removeStorage();
        return <Navigate replace state={{ from: location }} to={WEB.LOGIN} />;
    }

    // if (isAuthenticated && isPrivate) {
    //     return (
    //         <>
    //             <Helmet>
    //                 <title>Kamu tidak punya akses</title>
    //             </Helmet>
    //             <NotAuthorized />
    //         </>
    //     );
    // }

    // if (
    //     isAuthenticated &&
    //     isPrivate
    //     // && !canCreate &&
    //     // (location.pathname.includes('create') || location.pathname.includes('tambah'))
    // ) {
    //     return (
    //         <>
    //             <Helmet>
    //                 <title>Kamu tidak punya akses</title>
    //             </Helmet>
    //             <NotAuthorized />
    //         </>
    //     );
    // }

    // if (
    //     isAuthenticated &&
    //     isPrivate 
    //     // && !canUpdate &&
    //     // (location.pathname.includes('edit') ||
    //     //     location.pathname.includes('update') ||
    //     //     location.pathname.includes('ubah'))
    // ) {
    //     return (
    //         <>
    //             <Helmet>
    //                 <title>Kamu tidak punya akses</title>
    //             </Helmet>
    //             <NotAuthorized />
    //         </>
    //     );
    // }

    if (isAuthenticated && location.pathname === WEB.LOGIN) {
        return <Navigate replace state={{ from: location }} to={WEB.DASHBOARD} />;
    }

    if (isPrivate && isAuthenticated && !checkPermission(role, grantAccess, permissions)) {
        return <Navigate replace state={{ from: location }} to="/403" />;
    }

    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <ErrorBoundary FallbackComponent={FallbackErrorNotif}>
                <Suspense fallback={<FullPageSpinner />}>{children}</Suspense>
            </ErrorBoundary>
        </>
    );
};

AppRoute.defaultProps = {
    isPrivate: false,
};

export default AppRoute;
