import { Outlet } from 'react-router-dom';

// import HeaderAuth from '@/components/elements/Header/HeaderAuth';

const Auth = () => {
    return (
        <div className="font-primary min-h-screen bg-white">
            {/* <HeaderAuth /> */}
            <main className="mx-auto">
                <Outlet />
            </main>
        </div>
    );
};

export default Auth;
