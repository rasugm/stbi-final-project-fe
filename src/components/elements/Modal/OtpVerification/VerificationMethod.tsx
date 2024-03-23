import Button from '@/components/base/Button';
import Icon from '@/components/base/Icon';
import { hideEmail, hidePhone } from '@/utils/hideCred';

interface VerificationMethodProps {
    data: any;
    handleRequestOtp: (type: string) => void;
}

const VerificationMethod = ({ data, handleRequestOtp }: VerificationMethodProps) => {

    const openNewTab = () => {
        window.open('https://t.me/fabdigital', '_blank');
    };

    return (
        <div className="flex flex-col space-y-4">
            <p className="caption-large font-light">
                Pilih salah satu metode dibawah ini untuk mendapatkan kode verifikasi.
            </p>
            <Button className="text-tertiary-500 border-[1px] border-solid border-tertiary-100 hover:bg-primary-25 bg-white" onClick={() => handleRequestOtp('email')}>
                <Icon className="text-tertiary-500 mr-1" name="mail" size={20} />
                <span className="text-tertiary-500 font-bold">Email to {hideEmail(data.email)}</span>
            </Button>
            <Button className="text-tertiary-500 border-[1px] border-solid border-tertiary-100 hover:bg-primary-25 bg-white" onClick={() => handleRequestOtp('phone')}>
                <Icon className="text-success-500 mr-1" name="whatsapp" size={20} />
                <span className="text-tertiary-500 font-bold">Send to {hidePhone(data.phone)}</span>
            </Button>
            <p className="caption-large ">
                Memiliki masalah untuk verifikasi atau mengubah nomor ponsel<span className="text-primary-500 font-semibold cursor-pointer" onClick={() => openNewTab()}>&nbsp;Hubungi Kami</span>
            </p>
        </div>
    );
};

export default VerificationMethod;