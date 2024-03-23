import { AuthProvider } from '@/context/AuthContext';
import { Outlet } from 'react-router-dom';
import DashboardLayout from '../Dashboard';
import LandingLayout from '../OnePage';
import AuthLayout from '../Auth';

interface Props {
    layout?: 'dashboard' | 'landing' | 'auth';
}

const layouts = {
    dashboard: DashboardLayout,
    landing: LandingLayout,
    auth: AuthLayout,
};

function AppLayout({ layout }: Props) {
    const Layout = layout ? layouts[layout as keyof typeof layouts] : Outlet;
    return (
        <AuthProvider>
            <Layout />
        </AuthProvider>
    );
}

AppLayout.defaultProps = {
    layout: undefined,
};
export default AppLayout;
