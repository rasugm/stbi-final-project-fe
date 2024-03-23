import { useState } from 'react';

import Button from '@/components/base/Button/Button';
import ResetPasswordNotification from '../../Modal/ResetPasswordNotification';

import { validation, initialValues } from './validation';
import { useSearchParams } from 'react-router-dom';
import Loading from '@/components/base/Loading';
import { TextField, Toast } from '@/components/base';
import { Field, Form } from '@/components/base/FormBase';
import { useForgotPassword } from '@/hooks/useServices/useForgotPassword';
import { RE_ANS } from '@/configs/regex';

function ResetPasswordForm() {
    const [search] = useSearchParams();

    const [showSuccess, setShowSuccess] = useState(false);
    const [passwordValidation, setPasswordValidation] = useState({
        isMinLengthValid: false,
        containsLetterNumberSymbol: false,
        containsUppercaseLowercase: false,
    });

    const { mutateAsync: resetPassword, isLoading } = useForgotPassword({
        onSuccess: () => {
            setShowSuccess(true);
        },
        onError() {
            Toast({ type: 'error', title: 'Error Reset Password' });
        },
    });

    const validatePassword = (password: string) => {
        setPasswordValidation({
            isMinLengthValid: password.length >= 8,
            containsLetterNumberSymbol: RE_ANS.test(password),
            containsUppercaseLowercase: /[a-z]/.test(password) && /[A-Z]/.test(password),
        });
    };

    const onSubmit = async (data: any) => {
        let resetPasswordData = {
            password: data.password,
            token: search.get('token') ?? '',
        };

        await resetPassword(resetPasswordData);
    };

    return (
        <div className="space-y-6">
            <Loading isLoading={isLoading} />

            <ResetPasswordNotification show={showSuccess} onClose={() => setShowSuccess(false)} />
            <Form
                className="flex flex-col gap-y-6 w-full"
                initialValues={initialValues}
                onSubmit={onSubmit}
                validation={validation}
            >
                {() => (
                    <>
                        <Field
                            label="Password Baru"
                            name="password"
                            component={TextField}
                            placeholder="Masukan password baru Anda"
                            type="password"
                            onChange={(e) => validatePassword(e.target.value)}
                        />
                        <div className="flex flex-col gap-2">
                            <p>Kata sandi harus</p>
                            <ul className="list-disc ml-4">
                                <li className={passwordValidation.isMinLengthValid ? 'text-success-500' : 'text-error-500'}>Minimal 8 karakter</li>
                                <li className={passwordValidation.containsLetterNumberSymbol ? 'text-success-500' : 'text-error-500'}>Terdiri dari huruf, angka, dan simbol</li>
                                <li className={passwordValidation.containsUppercaseLowercase ? 'text-success-500' : 'text-error-500'}>Menggunakan huruf kapital dan huruf kecil</li>
                            </ul>
                        </div>
                        <Field
                            label="Konfirmasi Password Baru"
                            name="passwordConfirm"
                            component={TextField}
                            placeholder="Masukan kembali password baru Anda"
                            type={'password'}
                        />
                        <Button
                            className="w-full bg-gradient-to-r from-secondary-400 to-primary-400 text-white"
                            isLoading={isLoading}
                            block={true}
                            type="submit"
                        // disabled={!formState.isValid || !formState.isDirty}
                        >
                            Simpan
                        </Button>
                    </>
                )}
            </Form>
        </div>
    );
}

export default ResetPasswordForm;
