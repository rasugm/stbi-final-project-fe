import { ICommonParams } from '@/constants/types';
import fetch from '@/utils/fetch';
import queryString from 'query-string';

const BASE_URL = `/v1/search`;

export const searchByVms = (params: ICommonParams) => {
    const url = queryString.stringifyUrl(
        {
            url: `${BASE_URL}/vms`,
            query: params,
        },
        {
            skipEmptyString: true,
            skipNull: true,
        }
    );
    const config = {
        method: 'GET',
        url,
    };
    return fetch(config);
};

export const searchByBert = (params: ICommonParams) => {
    const url = queryString.stringifyUrl(
        {
            url: `${BASE_URL}/bert`,
            query: params,
        },
        {
            skipEmptyString: true,
            skipNull: true,
        }
    );
    const config = {
        method: 'GET',
        url,
    };
    return fetch(config);
};

