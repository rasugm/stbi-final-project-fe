/* eslint-disable no-console */
import Button from '@/components/base/Button';
import Icon from '@/components/base/Icon';
import { useReqForgotPassword } from '@/hooks/useServices/useForgotPassword';
import { Toast } from '@/components/base';
import { useState } from 'react';
import Loading from '@/components/base/Loading';

interface ForgotPasswordNotificationProps {
    onClose: () => void;
    data: any;
}

const ForgotPasswordNotification = ({ onClose, data }: ForgotPasswordNotificationProps) => {

    const [reAttempt, setReAttempt] = useState(0);

    const splitEmail = data.email.split('@');
    const email = splitEmail[0].slice(0, 3) + '***@' + splitEmail[1];

    const { mutateAsync: reqForgot, isLoading } = useReqForgotPassword({
        onSuccess: () => {

        },
        onError() {
            Toast({ type: 'error', title: 'Email tidak ditemukan' });
        },
    });

    const handleResend = async () => {
        if(reAttempt <= 10){
            setReAttempt(reAttempt + 1);
            await reqForgot(data);
        } else {
            Toast({ type: 'error', title: 'Anda telah mengirimkan sebanyak 10 kali' });
        }
    };

    return (
        <div className="flex items-center justify-center flex-col space-y-6 min-w-[376px]">

            <Loading isLoading={isLoading} />

            <div className="w-full flex justify-end">
                <div
                    onClick={onClose}
                    className="cursor-pointer font-semibold text-tertiary-800 text-left"
                >
                    <Icon name="x" className="mr-2" size={24} />
                </div>
            </div>

            <div className="flex justify-center items-center flex-col gap-2">
                <Icon name="mail" size={40} className="text-primary-500" />
                <h5 className="text-tertiary-800 text-center">Cek Email Anda</h5>
                <p className="text-center caption-large font-secondary text-tertiary-800">
                    Email Verifikasi telah dikirimkan ke <br /> {email}
                </p>
            </div>
            <Button rel="noopener noreferrer" href={`https://${splitEmail[1]}`} target="_blank" block>
                Buka Email
            </Button>
            <p className="text-center text-tertiary-500">Tidak menerima email? &nbsp;
                <a
                    className={`text-secondary-500 ${reAttempt === 0 ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                    onClick={() => handleResend()}
                >
                    Kirim Ulang
                </a>
            </p>
        </div>
    );
};

export default ForgotPasswordNotification;
