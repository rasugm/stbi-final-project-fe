import nookies from 'nookies';
import { encrypt, decrypt } from './encryption';
import {
    ACCESS_TOKEN_KEY,
    REFRESH_TOKEN_KEY,
    DEVICE_ID_KEY,
    RESEND_OTP_KEY,
    OTP_KEY,
    PAYLOAD_LOGIN_KEY,
    RESPONSE_REGISTER_KEY,
    RESPONSE_FORGOT_PASS_KEY,
    ENVIRONMENT_MODE_KEY,
    SESSION_ACTIVE_KEY,
    TWOFA_KEY,
    SESSION_EDIT_KEY,
    DATA_BROWSER_KEY,
} from '@/configs/storageKey';

//SOURCE https://github.com/jshttp/cookie#options-1
interface CookiesOptions {
    domain?: string;
    expires?: Date;
    httpOnly?: boolean;
    maxAge?: number;
    overwrite?: boolean;
    path?: string;
    sameSite?: boolean | 'lax' | 'none' | 'strict';
    secure?: boolean;
}

interface Options {
    encryptValue?: boolean;
}

interface OptionsSetCookie extends CookiesOptions {
    ctx?: Parameters<typeof nookies.set>[0];
}

type Value = boolean | number | object | string;

export function createCookieStorage(_name: string, options: CookiesOptions & Options) {
    const { encryptValue, ...initialCookiesOptions } = options;
    return {
        _name,

        set(value: Value, optionsNookies: OptionsSetCookie = { ctx: null }) {
            const { ctx, ...cookieOptions } = optionsNookies;
            nookies.set(ctx, this._name, encryptValue ? encrypt(value) : JSON.stringify(value), {
                path: '/',
                ...initialCookiesOptions,
                ...cookieOptions,
            });
        },

        get(ctx?: Parameters<typeof nookies.get>[0], decode = decodeURIComponent) {
            const cookie = nookies.get(ctx, {
                decode,
            })[this._name];
            return encryptValue ? decrypt(cookie) : cookie;
        },

        remove(ctx?: Parameters<typeof nookies.destroy>[0], optionsNookies?: CookiesOptions) {
            nookies.destroy(ctx, this._name, {
                path: '/',
                ...initialCookiesOptions,
                ...optionsNookies,
            });
        },
    };
}

export function createLocalStorage(_name: string) {
    return {
        _name,
        set(value: Value) {
            localStorage.setItem(this._name, JSON.stringify(value));
        },
        get() {
            const value = localStorage.getItem(this._name);
            return value ? JSON.parse(value) : '';
        },
        remove() {
            localStorage.removeItem(this._name);
        },
    };
}

export const removeCookieStorage = (ctx?: Parameters<typeof nookies.destroy>[0]) => {
    // deviceId.remove(ctx);
    otp.remove(ctx);
    payloadLogin.remove(ctx);
    resendOtp.remove(ctx);
    refreshToken.remove(ctx);
    accessToken.remove(ctx);
    responseRegister.remove(ctx);
    responseForgotPassword.remove(ctx);
    sessionActive.remove(ctx);
    dataBrowser.remove(ctx);
    sessionEdit.remove();
};

export const removeCookieStorageForgotPass = (ctx?: Parameters<typeof nookies.destroy>[0]) => {
    // deviceId.remove(ctx);
    otp.remove(ctx);
    payloadLogin.remove(ctx);
    resendOtp.remove(ctx);
    refreshToken.remove(ctx);
    accessToken.remove(ctx);
    responseRegister.remove(ctx);
    twoFactorAuth.remove(ctx);
};

export const removeStorage = () => {
    removeCookieStorage();
    localStorage.clear();
};

export const deviceId = createCookieStorage(DEVICE_ID_KEY, {
    encryptValue: true,
    maxAge: 30 * 60,
});

export const twoFactorAuth = createCookieStorage(TWOFA_KEY, {
    encryptValue: true,
    maxAge: 10 * 60,
});

export const otp = createCookieStorage(OTP_KEY, {
    encryptValue: true,
    maxAge: 10000,
});

export const payloadLogin = createCookieStorage(PAYLOAD_LOGIN_KEY, {
    encryptValue: true,
    maxAge: 10000,
});

export const resendOtp = createCookieStorage(RESEND_OTP_KEY, {
    encryptValue: true,
    maxAge: 10000,
});

export const refreshToken = createCookieStorage(REFRESH_TOKEN_KEY, {
    encryptValue: true,
    maxAge: 30 * 60,
});

export const accessToken = createCookieStorage(ACCESS_TOKEN_KEY, {
    encryptValue: true,
    maxAge: 15 * 60,
});

export const dataBrowser = createCookieStorage(DATA_BROWSER_KEY, {
    encryptValue: true,
    maxAge: 99 * 60 * 60,
});

export const responseRegister = createCookieStorage(RESPONSE_REGISTER_KEY, {
    encryptValue: true,
    maxAge: 1 * 60 * 60,
});

export const responseForgotPassword = createCookieStorage(RESPONSE_FORGOT_PASS_KEY, {
    encryptValue: true,
    maxAge: 1 * 60 * 60,
});

export const environmentMode = createCookieStorage(ENVIRONMENT_MODE_KEY, {});

export const sessionActive = createCookieStorage(SESSION_ACTIVE_KEY, {});

export const sessionEdit = createCookieStorage(SESSION_EDIT_KEY, {
    encryptValue: true,
    maxAge: 10 * 60,
});
