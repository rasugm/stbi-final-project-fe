import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { QueryKey } from '@tanstack/query-core';

export type TQueryOptions = UseQueryOptions<any, unknown, any>;

export default function useAppQuery<T>(type: QueryKey, fetcher: () => Promise<any>, option?: TQueryOptions) {
    return useQuery<T>({
        queryKey: type,
        queryFn: fetcher,
        refetchOnMount: true,
        refetchOnWindowFocus: false,
        ...option,
    });
}
