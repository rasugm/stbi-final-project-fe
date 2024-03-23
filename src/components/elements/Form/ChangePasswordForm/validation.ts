import validate from '@/utils/validation';

export const validation = validate((yup) => ({
    confirm_password: yup
        .string()
        .required('Kata sandi konfirmasi perlu diisi')
        .oneOf([yup.ref('password'), ''], 'Kata sandi yang dimasukan ulang harus sama'), 
    password: yup
        .string()
        .required('Kata sandi baru perlu diisi')
        .min(8, 'Pastikan 8 karakter untuk kata sandi anda.')
        .max(32, 'Pastikan 32 karakter untuk kata sandi anda.')
}));