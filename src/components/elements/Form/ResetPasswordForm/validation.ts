import { PASSWORD } from '@/configs/regex';
import validate from '@/utils/validation';

export const validation = validate((yup) => ({
    password: yup
        .string()
        .min(8, 'Pastikan 8 karakter untuk kata sandi anda.')
        .matches(
            PASSWORD,
            'Kata sandi anda tidak mengandung karakter angka, huruf, dan simbol.'
        )
        .max(32, 'Pastikan 32 karakter untuk kata sandi anda.')
        .required('Kata Sandi Baru wajib diisi'),
    passwordConfirm: yup
        .string()
        .oneOf([yup.ref('password'), ''], 'The re-entered password does not match. Please try again.')
        .required('Confirm New Password is required'),
}));

export const initialValues = {
    password: '',
    passwordConfirm: '',
};
