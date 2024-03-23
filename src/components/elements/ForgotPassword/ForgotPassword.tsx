import ForgotPasswordForm from '@/components/elements/Form/ForgotPasswordForm/ForgotPasswordForm';
import { useState } from 'react';
import ForgotPasswordNotification from './ForgotPasswordNotification';
import { Modal } from '@/components/base/Modal';

interface ForgotPasswordProps {
    onClose: () => void;
    show: boolean;
}

const ForgotPassword = ({ show, onClose }: ForgotPasswordProps) => {

    const [step, setStep] = useState(0);

    const [data, setData] = useState();

    const getStep: any = {
        0: <ForgotPasswordForm onClose={onClose} handleStep={() => setStep(1)} handleData={setData} />,
        1: <ForgotPasswordNotification onClose={onClose} data={data}/>,
    };

    return (
        <Modal onClose={onClose} isCentered={true} isOpen={show} closeOnClickOverlay={false}>
            <div className="m-4">
                {getStep[step]}
            </div>
        </Modal>
    );
};

export default ForgotPassword;
