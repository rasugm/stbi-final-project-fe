import Crypto from 'crypto-js';

const q = ',o,mvjISmKEAE2|QZgZ$-CKj!w^bEofdm3yY$H@CgP66~f>[)?V_oKkxF/8WrbhX=';

export const encrypt = (value?: boolean | number | object | string) => {
    if (!value) return '';
    let valueStringified;
    if (typeof value === 'object') valueStringified = JSON.stringify(value);
    else valueStringified = value.toString();
    return Crypto.AES.encrypt(valueStringified, q, {
        padding: Crypto.pad.Pkcs7,
        mode: Crypto.mode.CBC,
    }).toString();
};

export const decrypt = (value?: string) => {
    if (!value) return '';

    try {
        return Crypto.AES.decrypt(value, q).toString(Crypto.enc.Utf8);
    } catch (error) {
        return ''; // or handle the error in a way that makes sense for your application
    }
};
