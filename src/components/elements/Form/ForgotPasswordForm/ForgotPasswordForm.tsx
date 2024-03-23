import Button from '../../../base/Button';
import Icon from '../../../base/Icon';
import { useReqForgotPassword } from '@/hooks/useServices/useForgotPassword';
import { TextField, Toast } from '@/components/base';
import Loading from '@/components/base/Loading/Loading.tsx';
import { Field, Form } from '@/components/base/FormBase';
import { validation, initialValues } from './validation';

interface ForgotPasswordFormProps {
    handleStep: () => void;
    onClose: () => void;
    handleData: (data: any) => void;
}

const ForgotPasswordForm = ({ onClose, handleStep, handleData }: ForgotPasswordFormProps) => {
    const { mutateAsync: reqForgot, isLoading } = useReqForgotPassword({
        onSuccess: () => {
            handleStep();
        },
        onError() {
            Toast({ type: 'error', title: 'Invalid email' });
        },
    });

    const onSubmit = async (data: any) => {
        await reqForgot(data);
        handleData(data);
    };

    return (
        <>
            <Loading isLoading={isLoading} />

            <div className="space-y-4 min-w-[80%] md:min-w-[376px]">
                <div onClick={onClose} className="cursor-pointer font-semibold text-tertiary-800 text-left">
                    <Icon name="arrow-left" className="mr-2" size={24} />
                </div>
                <>
                    <h5 className="text-tertiary-800 text-center">Lupa Password?</h5>
                    <p className="caption-large text-tertiary-800 text-center">
                        Masukkan e-mail anda, kami akan mengirimkan kode <br /> verifikasi untuk atur ulang kata sandi.
                    </p>
                </>
                <Form initialValues={initialValues} onSubmit={onSubmit} validation={validation} className="space-y-4">
                    {({ formState }) => (
                        <>
                            <Field
                                label="Email"
                                name="email"
                                component={TextField}
                                placeholder="Masukan alamat email"
                            />
                            <div className="w-full">
                                <Button block={true} type="submit" disabled={!formState.isDirty || !formState.isValid}>
                                    Reset Password
                                </Button>
                            </div>
                        </>
                    )}
                </Form>
            </div>
        </>
    );
};

export default ForgotPasswordForm;
