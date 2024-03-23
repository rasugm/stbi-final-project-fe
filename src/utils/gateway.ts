import { BASE_URL } from '@/configs';

export const GatewayVersion = (version: string, endpoint: string, params: string = '') => {
    return `${BASE_URL}/${version}/${endpoint}${params ? `?${params}` : ''}`;
};
