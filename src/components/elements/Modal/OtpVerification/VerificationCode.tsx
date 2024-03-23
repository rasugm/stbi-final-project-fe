import InputOtp from '@/components/base/Input/InputOtp';
import { useState } from 'react';
import Loading from '@/components/base/Loading/Loading.tsx';
import { useVerifyOtp } from '@/hooks/useServices/useAuth';
import { accessToken, dataBrowser, refreshToken } from '@/utils/storage';
import jwtDecode from 'jwt-decode';
import CountdownTimer from '@/components/elements/CountdownTimer';
import { hideEmail, hidePhone } from '@/utils/hideCred';
import { KEY_STORAGE } from '@/constants/keyStorage';
import { WEB } from '@/constants';
import { URL_WEB } from '@/configs';
import { checkIncognitoMode } from '@/utils/checkIncognitoMode';

type VerifcationCodeProps = {
    data: any;
    otpMethod?: string;
    handleRequestOtp: (type: string) => void;
};

const VerificationCode = ({ data, otpMethod, handleRequestOtp }: VerifcationCodeProps) => {
    const [value, setValue] = useState('');
    const { mutate: verifyOtp, isLoading } = useVerifyOtp();

    const handleSubmit = async (otp: string) => {
        let payload = {
            username: data.username,
            password: data.password,
            code: otp,
        };

        verifyOtp(payload, {
            async onSuccess(data){
                // const decoded = (data?.data?.refresh_token ? jwtDecode(data?.data?.refresh_token) : {}) as {
                //     exp: number;
                // };

                const decoded = jwtDecode(data?.data?.refresh_token) as { exp: number };

                let newAccessToken = data.data.token;
                let newRefreshToken = data.data.refresh_token;

                accessToken.set(newAccessToken);
                refreshToken.set(newRefreshToken);
                const browser = await checkIncognitoMode;
                dataBrowser.set({
                    isIncognito: browser.isPrivate,
                    browser: browser.browserName,
                });

                refreshToken.set(data?.data?.refresh_token, {
                    expires: new Date(decoded.exp * 1000),
                    maxAge: undefined,
                });
                accessToken.set(data?.data?.token || '');
                localStorage.removeItem(KEY_STORAGE.menu);

                setTimeout(() => {

                    window.location.href =
                        location.protocol.concat('//').concat(window.location.host) === URL_WEB
                            ? '/v4' + WEB.DASHBOARD
                            : WEB.DASHBOARD;
                }, 1000);
            },
        });
    };

    const timer = CountdownTimer({ expiredDate: new Date(data.expiredOtp) });



    return (
        <div className="flex items-start flex-col  gap-3">
            <Loading isLoading={isLoading} />

            <div className="text-center w-full">
                {otpMethod === 'email' && (
                    <p className="caption-large text-tertiary-500 font-light ">
                        Kode verifikasi telah dikirim melalui <br /> Email ke&nbsp;
                        <b className="font-bold text-tertiary-500">{hideEmail(data.email)}</b>
                    </p>
                )}
                {otpMethod === 'phone' && (
                    <p className="caption-large text-tertiary-500 font-light ">
                        Kode verifikasi telah dikirim melalui <br /> Whatsapp ke&nbsp;
                        <b className=" text-tertiary-500">{hidePhone(data.phone)}</b>
                    </p>
                )}
            </div>
            <div className="mx-auto">
                <InputOtp
                    onSubmit={handleSubmit}
                    onChange={(otp) => setValue(otp)}
                    numInputs={6}
                    isInputNum
                    value={value}
                    shouldAutoFocus
                    disabled={isLoading}
                    className="justify-normal"
                />
            </div>
            {/* {console.log(CountdownTimer({ expiredDate: new Date(data.expiredOtp) }))} */}
            {timer > 0 ?
                <p className="text-center w-full caption-large text-tertiary-500 font-light">
                    Mohon tunggu dalam <span className="text-primary-400 font-bold">
                        {timer}  detik
                    </span> untuk kirim ulang
                </p>
                : <p className="text-center w-full caption-large text-tertiary-500 font-light">
                    Tidak menerima kode? <span
                        className="cursor-pointer text-primary-400 font-bold"
                        onClick={() => handleRequestOtp(otpMethod ?? '')}
                    >
                        Kirim ulang
                    </span> atau <span className="text-primary-400 font-bold">
                        gunakan metode verifikasi lain
                    </span>
                </p>}

        </div>
    );
};

export default VerificationCode;
