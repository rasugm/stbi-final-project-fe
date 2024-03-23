import * as yup from 'yup';

export const validationSchema = yup
    .object({
        username: yup.string().required('Email atau NIK dibutuhkan.'),
        password: yup
            .string()
            .min(8, 'Pastikan kata sandi Anda mengandung setidaknya 8 karakter.')
            .max(32, 'Pastikan kata sandi Anda mengandung kurang dari 32 karakter.')
            .required('Password dibutuhkan.'),
        isRemember: yup.boolean().notRequired(),
    })
    .required();

import validate from '@/utils/validation';

export const validation = validate((yup) => ({
    username: yup.string().required('Email atau NIK dibutuhkan.'),
    password: yup
        .string()
        .min(8, 'Pastikan kata sandi Anda mengandung setidaknya 8 karakter.')
        .max(32, 'Pastikan kata sandi Anda mengandung kurang dari 32 karakter.')
        .required('Password dibutuhkan.'),
    isRemember: yup.boolean().notRequired(),
}));

export type LoginSubmitForm = yup.InferType<typeof validationSchema>;

export const initialValues = {
    username: '',
    password: '',
};
