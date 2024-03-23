import { RouterProvider } from 'react-router-dom';
import RootRouter from './routes/root';
import { Suspense, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ErrorBoundary } from 'react-error-boundary';

import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from './context/AuthContext';
import { ModalAlertProvider } from './context/ModalAlertContext';
import FullPageSpinner from './components/elements/FullPageSpinner/FullPageSpinner';
import { FallbackError } from './components/elements/Error';
import { cn } from './utils/className';
import { FaTimes } from 'react-icons/fa';
import PageIdentityProvider from './context/PageIdentityContext';
// import tracer from "dd-trace";
// import { APM } from './configs';

const contextClass: any = {
    success: 'bg-success-50 text-gray-800 border border-success-500 sm:border-l-[5px]',
    error: 'bg-error-50 text-gray-800 border border-error-400 sm:border-l-[5px]',
    info: 'bg-info-50 text-gray-800 border border-info-500 sm:border-l-[5px]',
    warning: 'bg-warning-50 text-gray-800 border border-warning-400 sm:border-l-[5px]',
    default: 'bg-black text-white',
};

const App = () => {
    const [queryClient] = useState(() => new QueryClient());

    // if (APM === 'trace') {
    //     tracer.init();
    // }

    return (
        <QueryClientProvider client={queryClient}>
            <HelmetProvider>
                <AuthProvider>
                    <PageIdentityProvider>
                        <Suspense fallback={<FullPageSpinner />}>
                            <ErrorBoundary FallbackComponent={FallbackError}>
                                <ModalAlertProvider>
                                    <RouterProvider router={RootRouter} />
                                    <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
                                    <ToastContainer
                                        closeButton={<FaTimes className="mt-3 mr-2 relative" />}
                                        toastClassName={({ type }: any) =>
                                            cn(
                                                contextClass[type || 'default'],
                                                'relative flex p-1 item-start min-h-10  sm:rounded-md rounded-md justify-between mb-2 overflow-hidden cursor-pointer shadow-xl'
                                            )
                                        }
                                        bodyClassName={() => 'text-sm flex items-start font-semibold p-3'}
                                    />
                                </ModalAlertProvider>
                            </ErrorBoundary>
                        </Suspense>
                    </PageIdentityProvider>
                </AuthProvider>
            </HelmetProvider>
        </QueryClientProvider>
    );
};

export default App;
