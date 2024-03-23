import axios from 'axios';
import fileDownload from 'js-file-download';
import { accessToken } from './storage';
import { memoizedRefreshToken } from '@/services/auth';

export const downloadFile = async (url: string, filename: string, params?: any) => {
    try {
        const response = await axios.get(url, {
            params,
            responseType: 'blob',
            headers: {
                Authorization: `Bearer ${accessToken.get()}`,
            },
        });

        fileDownload(response.data, filename);

    } catch (error:any) {
        const originalRequest = error.config;
        const status = error.response?.status;
        try {
            if ((status === 401 || status === 403) && !originalRequest._retry) {
                originalRequest._retry = true;

                //memoize to handle multiple status 401/403
                const res = await memoizedRefreshToken();
                const newAccessToken = res.data.data.token;
                accessToken.set(newAccessToken);

                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                return axios(originalRequest);
            }

            return Promise.reject(error);
        } catch (_) {
            return Promise.reject(error);
        }
    }
};
