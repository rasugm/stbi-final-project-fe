import Toast from '@/components/base/Toast';
import { getErrorMsg } from '@/utils/getErrorMsg';
import { TGetStatusMsg } from '@/utils/getStatusMsg';
import { useMutation, UseMutationOptions, MutationFunction } from '@tanstack/react-query';

/* NOTES
  D-> Data
  V-> Variables
  E-> Error
  C-> Context */

type TFetcher<D, V> = MutationFunction<D, V>;
type TOptions<D, E, V, C> = Omit<UseMutationOptions<D, E, V, C>, 'mutationFn'> & {
    toastError?: TGetStatusMsg;
    toastSuccess?: TSuccessMessage<D>;
};
export type TMutationOptions = TOptions<any, any, any, any>;
type TSuccessMessage<D> = (data: D) => string;

function useAppMutation<V = any, D = any, E = D, C = any>(fetcher: TFetcher<D, V>, options: TOptions<D, E, V, C> = {}) {
    const { onError, onSuccess, toastSuccess, toastError, ...rest } = options;
    const result = useMutation<D, E, V, C>({
        ...rest,
        mutationFn: fetcher,
        onError: (error, variables, ctx) => {
            toastError && Toast({ title: getErrorMsg(error, toastError), type: 'error' });
            onError?.(error, variables, ctx);
        },
        onSuccess: (data, variables, ctx) => {
            toastSuccess && Toast({ title: toastSuccess(data), type: 'success' });
            onSuccess?.(data, variables, ctx);
        },
    });

    return { response: result.data ? result.data : result.error, ...result };
}
export default useAppMutation;
