import useAppMutation, { TMutationOptions } from '@/hooks/useAppMutation.tsx';
import { IBodyReqForgotPassword, IBodyResetPassword, reqForgotPassword, resetPassword } from '@/services/forgot';

export const useReqForgotPassword = (options?: TMutationOptions) => {
    return useAppMutation<IBodyReqForgotPassword>((value) => reqForgotPassword(value), options);
};

export const useForgotPassword = (options?: TMutationOptions) => {
    return useAppMutation<IBodyResetPassword>((value) => resetPassword(value), options);
};