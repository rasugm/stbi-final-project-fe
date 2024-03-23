import useAppQuery, { TQueryOptions } from '@/hooks/useAppQuery';
import { searchByBert, searchByVms } from '@/services/search';

export const useSearchVms = (params: any, option?: TQueryOptions) => {
    return useAppQuery<any>(['search-vms', params], () => searchByVms(params), option);
};

export const useSearchBert = (params: any, option?: TQueryOptions) => {
    return useAppQuery<any>(['search-bert', params], () => searchByBert(params), option);
};
