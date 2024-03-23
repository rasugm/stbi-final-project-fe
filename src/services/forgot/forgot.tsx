import { GatewayVersion } from '@/utils/gateway.ts';
import queryString from 'query-string';
import fetch from '@/utils/fetch.ts';
import { IBodyReqForgotPassword, IBodyResetPassword } from '@/services/forgot/types';

export const reqForgotPassword = (data: IBodyReqForgotPassword) => {
    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        method: 'POST',
        url: GatewayVersion('v4', 'forgot'),
        data: queryString.stringify(data),
    };
    return fetch(config);
};

export const resetPassword = (data: IBodyResetPassword) => {
    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        method: 'POST',
        url: GatewayVersion('v4', 'forgot/reset'),
        data: queryString.stringify(data),
    };
    return fetch(config);
};