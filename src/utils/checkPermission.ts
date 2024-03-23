import { URL_WEB } from '@/configs';
import { env } from '@/configs/env';
import { ENVIRONMENT, WEB } from '@/constants';

export const checkPermission = (role: string, rules: string[], action: string[]) => {
    try {
        if (role === 'super-admin') return true;

        if (action && action.indexOf('all') > -1) return true;

        if (action && action.length) {
            for (let i = 0; i < action.length; i++) {
                const item = action[i];

                for (let j = 0; j < rules.length; j++) {
                    const rule = rules[j];
                    if (item === rule) {
                        return true;
                    }
                }
            }
        }
        return false;
    } catch (error) {
        window.localStorage.clear();
        window.location.href = location.protocol.concat('//').concat(window.location.host) === URL_WEB && env.REACT_APP_ENV !== ENVIRONMENT.DEV ? '/v4' + WEB.LOGIN : WEB.LOGIN;
    }
};
