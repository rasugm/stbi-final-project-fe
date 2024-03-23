import { useQueryClient } from '@tanstack/react-query';
import { QueryKey } from '@tanstack/query-core';

const useRefreshQuery = () => {
    const queryClient = useQueryClient();
    return (query: QueryKey) => queryClient.invalidateQueries(query);
};

export default useRefreshQuery;
