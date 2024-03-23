import { ICommonParams } from '@/constants/types';
import fetch from '@/utils/fetch';
import queryString from 'query-string';
import { IBodyUserManagementSubmit } from '.';

const BASE_URL = `/v4/users`;

export const listUserManagement = (params: ICommonParams) => {
    const url = queryString.stringifyUrl(
        {
            url: BASE_URL,
            query: params,
        },
        {
            skipEmptyString: true,
            skipNull: true,
        }
    );
    const config = {
        method: 'GET',
        url,
    };
    return fetch(config);
};

export const listUserManagementTelkom = (params: ICommonParams) => {
    const url = queryString.stringifyUrl(
        {
            url: BASE_URL + '/type/telkom',
            query: params,
        },
        {
            skipEmptyString: true,
            skipNull: true,
        }
    );
    const config = {
        method: 'GET',
        url,
    };
    return fetch(config);
};

export const detailUserManagement = (id: string) => {
    const config = {
        method: 'GET',
        url: `${BASE_URL}/${id}`,
    };
    return fetch(config);
};

export const createUserManagement = (body: IBodyUserManagementSubmit) => {
    const config = {
        method: 'POST',
        url: `${BASE_URL}`,
        data: body,
    };
    return fetch(config);
};

export const updateUserManagement = (id: string, body: IBodyUserManagementSubmit) => {
    const config = {
        method: 'PUT',
        url: `${BASE_URL}/${id}`,
        data: body,
    };
    return fetch(config);
};

export const summaryUserManagement = () => {
    const config = {
        method: 'GET',
        url: `${BASE_URL}/summary`
    };
    return fetch(config);
};

export const blockUserManagement = (id: string) => {
    const config = {
        method: 'PUT',
        url: `${BASE_URL}/${id}/block`
    };
    return fetch(config);
};

export const unblockUserManagement = (id: string) => {
    const config = {
        method: 'PUT',
        url: `${BASE_URL}/${id}/unblock`
    };
    return fetch(config);
};

export const deleteUserManagement = (id: string) => {
    const config = {
        method: 'DELETE',
        url: `${BASE_URL}/${id}`
    };
    return fetch(config);
};

// GET USER BY NIK
export const getUserByNik = (nik: string) => {
    const config = {
        method: 'GET',
        url: `${BASE_URL}/nik/${nik}`
    };
    return fetch(config);
};