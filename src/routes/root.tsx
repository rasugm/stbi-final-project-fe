import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { NotFound } from '@/pages/NotFound';
import AppRoute from './AppRoute';
import { NotAuthorized } from '@/pages/NotAuthorized';
import { PRIVATES_ROUTES } from '@/routes/private';
import { PUBLIC_ROUTES } from '@/routes/public';
import { URL_WEB } from '@/configs';
import AppLayout from '@/components/layouts/App';
import { env } from '@/configs/env';
import { ENVIRONMENT } from '@/constants';

function PublicPage() {
    return <h3>Public</h3>;
}

const RootRouter = createBrowserRouter(
    createRoutesFromElements(
        <>
            {/* INFO: pembuatan route bisa perkelompok */}
            {[...PRIVATES_ROUTES, ...PUBLIC_ROUTES].map((item) => (
                <Route
                    element={<AppLayout layout={item.layout as React.ComponentProps<typeof AppLayout>['layout']} />}
                    key={item.path}
                >
                    <Route
                        element={
                            <AppRoute
                                key={item.path}
                                path={item.path}
                                permissions={item.permissions}
                                isPrivate={item.isPrivate}
                                stage={item.stage}
                                title={item.title}
                                breadcrumbs={item.breadcrumbs}
                            >
                                <item.component />
                            </AppRoute>
                        }
                        errorElement={<NotFound />}
                        key={item.path}
                        path={item.path}
                    />
                </Route>
            ))}

            {/* INFO: atau bisa individu langsung (lebih di sarankan di kelompokan biar mudah di baca) */}
            <Route element={<p>about</p>}>
                <Route element={<PublicPage />} path="/about" />
            </Route>
            <Route element={<NotFound />} path="*" />
            <Route element={<NotAuthorized />} path="/403" />
        </>
    ),
    { basename: 
        location.protocol.concat('//').concat(window.location.host) === URL_WEB && env.REACT_APP_ENV !== ENVIRONMENT.DEV ? '/v4' : '' }
);
export default RootRouter;
