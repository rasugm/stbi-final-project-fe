import {
    accessToken as storageAccessToken,
} from '@/utils/storage';
import jwtDecode from 'jwt-decode';

export const checkTokenExpired = () => {

    let access_token = storageAccessToken.get();

    // JWT DECODE
    if (access_token) {
        let tokenDecoded:any = jwtDecode(access_token);
        let currentTime = Date.now() / 1000;
        return tokenDecoded.exp < currentTime;
    }

};