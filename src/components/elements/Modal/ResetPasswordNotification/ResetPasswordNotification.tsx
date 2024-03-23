import Button from '@/components/base/Button';
import Icon from '@/components/base/Icon';
import { Modal } from '@/components/base/Modal';
import { useWebNavigate } from '@/hooks/useWebNavigate';

interface ResetPasswordProps {
    onClose: () => void;
    show: boolean;
}

const ResetPasswordNotification = ({ onClose, show }: ResetPasswordProps) => {

    const navigate = useWebNavigate();

    return (
        <Modal onClose={onClose} isOpen={show} isCentered={true}>
            <div className="flex p-3 items-center justify-center flex-col space-y-6 min-w-[376px]">
                <div className="flex justify-center items-center flex-col gap-2">
                    <div className="bg-success-100 p-2 rounded-full">
                        <Icon name="check-circle" size={40} className="text-success-500" />
                    </div>
                    <h5 className="text-tertiary-800 text-center">Password Reset</h5>
                    <p className="text-center caption-large font-secondary text-tertiary-800">
                        Kata sandi Anda telah berhasil diatur ulang. <br/>
                        Klik tombol di bawah ini untuk login
                    </p>
                </div>

                <Button block onClick={() => navigate('LOGIN', [])}>
                    Continue
                </Button>
            </div>
        </Modal>
    );
};

export default ResetPasswordNotification;
