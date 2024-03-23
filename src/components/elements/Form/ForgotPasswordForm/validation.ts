import validate from '@/utils/validation';

export const validation = validate((yup) => ({
    email: yup.string().email('Email invalid').required('email or username is required'),
}));

export const initialValues = {
    email: '',
};
