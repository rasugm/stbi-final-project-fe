import { detectIncognito } from 'detectincognitojs';
export const checkIncognitoMode = detectIncognito().then((result) => {
    return result;
});
