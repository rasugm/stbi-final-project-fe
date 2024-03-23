import { useState } from 'react';

import Modal from '@/components/base/Modal/Modal';
import VerificationMethod from './VerificationMethod';
import VerificationCode from './VerificationCode';
import { useRequestOtp } from '@/hooks/useServices/useAuth';

import { Toast } from '@/components/base';
import Loading from '@/components/base/Loading/Loading.tsx';
import { useLoginContext } from '@/hooks/useContext';
import Icon from '@/components/base/Icon';


interface OtpVerificationProps {
    data: any;
    handleClose: () => void;
    show: boolean;
}

const OtpVerification = ({ data, show, handleClose }: OtpVerificationProps) => {

    // STATE
    const [step, setStep] = useState(0);
    const [expiredOtp, setExpiredOtp] = useState(false);
    const [type, setType] = useState('');

    const { setOtp } = useLoginContext();


    const { mutateAsync: reqOtp, isLoading } = useRequestOtp({
        onSuccess(response: any) {
            setStep(1);
            setExpiredOtp(response.data.expired_at);
        },
        onError() {
            Toast({ type: 'error', title: 'Invalid email or password' });
        },
    });

    const handleRequestOtp = async (type: string) => {
        setType(type);
        await reqOtp({
            username: data.username,
            password: data.password,
            type: type
        });
    };

    const getStep: any = {
        0: <VerificationMethod data={data} handleRequestOtp={handleRequestOtp} />,
        1: <VerificationCode data={{ ...data, expiredOtp }} otpMethod={type} handleRequestOtp={handleRequestOtp} />,
    };

    return (
        <>
            <Loading isLoading={isLoading} />

            <Modal
                onClose={() => {
                    setStep(0);
                    handleClose();
                    setOtp('');
                }}
                size="sm"
                isOpen={show}
                isCentered={true}
                closeOnClickOverlay={false}
            >
                <div className="m-4">
                    <div className="flex justify-between items-center mb-3">
                        <h6>{step === 0 ? 'Pilih Metode Verifikasi' : 'Masukkan Kode Verifikasi'}</h6>

                        <button onClick={() => {
                            setStep(0);
                            handleClose();
                            setOtp('');
                        }}>
                            <Icon className="text-tertiary-500" name="x" size={20} />
                        </button>
                    </div>
                    {getStep[step]}
                </div>
            </Modal>
        </>
    );
};

export default OtpVerification;
