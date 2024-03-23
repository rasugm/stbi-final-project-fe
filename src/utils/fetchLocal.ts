import { URL_WEB } from '@/configs';
import axios, { AxiosRequestConfig } from 'axios';
import { accessToken, removeCookieStorage, sessionActive } from './storage';
import { redirect } from 'react-router-dom';
import { memoizedRefreshToken } from '@/services/auth';
import { env } from '@/configs/env';
import { ENVIRONMENT, WEB } from '@/constants';

const instance = axios.create({
    baseURL: 'http://localhost:7016',
});

instance.interceptors.request.use(
    function (config: any) {
        const token = accessToken.get();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        config.headers['dtp-id'] = 'CORE';

        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;
        const status = error.response?.status;
        try {
            if ((status === 401 || status === 403) && !originalRequest._retry) {
                originalRequest._retry = true;

                //memoize to handle multiple status 401/403
                const res = await memoizedRefreshToken();
                const newAccessToken = res.data.data.token;
                accessToken.set(newAccessToken);
                sessionActive.set(true);

                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                return instance(originalRequest);
            } else if ((status === 401 || status === 403) && originalRequest._retry) {
                //force logout
                if (typeof window !== 'undefined') {
                    removeCookieStorage();
                    if (!window.location.pathname.startsWith('/login')) {
                        window.location.href = location.protocol.concat('//').concat(window.location.host) === URL_WEB && env.REACT_APP_ENV !== ENVIRONMENT.DEV ? '/v4' + WEB.LOGIN : WEB.LOGIN;
                    }
                }
            }

            return Promise.reject(error);
        } catch (_) {
            if (typeof window !== 'undefined') {
                if (sessionActive.get() === 'true') {
                    redirect(`/login?next=${encodeURI(window.location.pathname)}&session=false`);
                } else {
                    redirect(`/login`);
                }
            }

            return Promise.reject(error);
        }
    }
);

export default function fetchLocal<T = any>(config: AxiosRequestConfig<any>) {
    return new Promise<T>((resolve, reject) => {
        instance(config)
            .then((res) => {
                resolve(res.data);
            })
            .catch((err) => {
                const defaultError = {
                    code: 500,
                    status: 'error',
                    message: 'Failed to fetch data. Please contact developer.',
                };

                if (typeof err.response === 'undefined') reject(defaultError);
                else if (typeof err.response.data === 'undefined') reject(defaultError);
                else reject(err.response.data);
            });
    });
}
