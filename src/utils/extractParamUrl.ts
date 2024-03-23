import { WEB } from '@/constants';

export const extractParamUrl = (url: keyof typeof WEB, replaceValue: { key: string; value: string }[]) => {
    let URL = WEB[url];
    if (replaceValue) {
        replaceValue.forEach((replacement) => {
            URL = URL.replace(replacement.key, replacement.value);
        });
    }
    return URL;
};
