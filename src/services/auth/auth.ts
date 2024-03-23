import fetch from '@/utils/fetch';
import queryString from 'query-string';
import { IBodyLogin, IBodyRequestOtp, IBodyVerifyOtp, IOtpLogin } from './types';
import memoize from '@/utils/memoize';
import axios from 'axios';
import { refreshToken as rfToken } from '@/utils/storage';
import { GatewayVersion } from '@/utils/gateway';

export const loginUser = (data: IBodyLogin) => {
    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        method: 'POST',
        url: GatewayVersion('v4', 'login'),
        data: queryString.stringify(data),
    };
    return fetch(config);
};

export const logoutUser = () => {
    const config = {
        method: 'POST',
        url: GatewayVersion('v4', 'logout'),
    };
    return fetch(config);
};

export const requestOtp = (data: IBodyRequestOtp) => {
    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        method: 'POST',
        url: GatewayVersion('v4', 'otp/request'),
        data: queryString.stringify(data),
    };
    return fetch(config);
};

export const verifyOtp = (data: IBodyVerifyOtp) => {
    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        method: 'POST',
        url: GatewayVersion('v4', 'otp/verify'),
        data: queryString.stringify(data),
    };
    return fetch(config);
};

export const sendOtp = (otp: IOtpLogin) => {
    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        method: 'POST',
        url: GatewayVersion('v4', 'otp/request'),
        data: queryString.stringify(otp),
    };
    return fetch(config);
};

export const refreshToken = () => {
    return axios({
        url: GatewayVersion('v4', 'login/refresh-token'),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: queryString.stringify({
            token: rfToken.get(),
        }),
        method: 'POST',
    });
};

export const memoizedRefreshToken = memoize(refreshToken, { maxAge: 10 });
