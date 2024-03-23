import { Toast } from '@/components/base';
import Carousel from '@/components/base/Carousel';
import ForgotPassword from '@/components/elements/ForgotPassword/ForgotPassword.tsx';
import LoginForm from '@/components/elements/Form/LoginForm';
import { LoginSubmitForm } from '@/components/elements/Form/LoginForm/validation.ts';
import { OtpVerification } from '@/components/elements/Modal/OtpVerification';
import { IMAGES, URL_WEB } from '@/configs';
import { useLogin } from '@/hooks/useServices/useAuth';
import { useState } from 'react';
import './login.css';
import { accessToken, dataBrowser, refreshToken } from '@/utils/storage.ts';
import { imageUrls } from './const';
import jwtDecode from 'jwt-decode';
import { LoginProvider } from '@/context/LoginContext';
import { ENVIRONMENT, WEB } from '@/constants';
import { checkIncognitoMode } from '@/utils/checkIncognitoMode';
import { KEY_STORAGE } from '@/constants/keyStorage';
import { env } from '@/configs/env';

const initialModal = { forgotPassword: false, verifyOtp: false };
const Login = () => {
    //NOTE: STATE

    const [modal, setModal] = useState(initialModal);
    const [user, setUser] = useState<any>(null);

    const { mutate: reqLogin, isLoading } = useLogin();

    const handleCloseModal = () => {
        setModal(initialModal);
    };

    const onSubmit = (data: LoginSubmitForm) => {
        const body = {
            username: data.username,
            password: data.password,
        };
        setUser(body);
        reqLogin(body, {
            async onSuccess(response: any, variable: { username: string; password: string }) {
                if (!response.data.fingerprint) {
                    setModal({ verifyOtp: true, forgotPassword: false });
                    setUser({
                        ...variable,
                        ...response.data,
                    });
                } else {
                    let newAccessToken = response.data.token;
                    let newRefreshToken = response.data.refresh_token;
                    const decoded = jwtDecode(response?.data?.refresh_token) as { exp: number };

                    accessToken.set(newAccessToken);
                    refreshToken.set(newRefreshToken);
                    const browser = await checkIncognitoMode;
                    dataBrowser.set({
                        isIncognito: browser.isPrivate,
                        browser: browser.browserName,
                    });

                    refreshToken.set(response?.data?.refresh_token, {
                        expires: new Date(decoded.exp * 1000),
                        maxAge: undefined,
                    });
                    localStorage.removeItem(KEY_STORAGE.menu);

                    window.location.href =
                        location.protocol.concat('//').concat(window.location.host) === URL_WEB && env.REACT_APP_ENV !== ENVIRONMENT.DEV
                            ? '/v4' + WEB.DASHBOARD
                            : WEB.DASHBOARD;
                }
            },
            onError() {
                Toast({ type: 'error', title: 'Email atau Password yang dimasukan Salah' });
            },
        });
    };

    return (
        <LoginProvider>
            <OtpVerification data={user} handleClose={handleCloseModal} show={modal.verifyOtp} />
            <ForgotPassword onClose={handleCloseModal} show={modal.forgotPassword} />

            <div className="bg-secondary-50 w-full h-full fixed">
                <div className="flex w-full h-full justify-center items-center">
                    <div className="flex bg-white w-9/12 h-5/6 rounded-xl drop-shadow-md">
                        <div className="w-10/12 bg-primary-700 rounded-l-xl flex justify-center items-center">
                            <div className="w-[300px]">
                                <Carousel images={imageUrls} />
                            </div>
                        </div>

                        <div className="w-full flex flex-col justify-center gap-4 p-[100px]">
                            <div>
                                <img src={IMAGES.LOGO_FABD_V4} className="h-[40px]" alt="FAB Digital Logo" />
                            </div>
                            <div>
                                <h4>Hello</h4>
                                <small>Selamat Datang di FAB Digital.</small>
                            </div>
                            <div>
                                <LoginForm setModal={setModal} onSubmit={onSubmit} isLoading={isLoading} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LoginProvider>
    );
};

export default Login;
