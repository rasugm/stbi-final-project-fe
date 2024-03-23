import fetch from '@/utils/fetch';
import { IBodyChangePassword } from './types';

const BASE_URL = '/v4/profiles';

export const getUser = () => {
    const config = {
        method: 'GET',
        url: BASE_URL,
    };
    return fetch(config);
};

export const changePassword = (body: IBodyChangePassword) => {
    const config = {
        method: 'POST',
        url: `${BASE_URL}/change-password`,
        data: body,
    };
    return fetch(config);
};

export const uploadAvatar = (body: FormData) => {
    const config = {
        method: 'PUT',
        url: `${BASE_URL}/upload-avatar`,
        data: body,
    };
    return fetch(config);
};
