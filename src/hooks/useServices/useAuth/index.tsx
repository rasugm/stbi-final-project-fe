import useAppMutation, { TMutationOptions } from '@/hooks/useAppMutation';
import {
    IBodyLogin,
    IBodyRequestOtp,
    IBodyVerifyOtp,
    loginUser,
    logoutUser,
    refreshToken,
    requestOtp,
    verifyOtp,
} from '@/services/auth';

export const useLogin = (options?: TMutationOptions) => {
    return useAppMutation<IBodyLogin>((value) => loginUser(value), options);
};

export const useLogout = (options?: TMutationOptions) => {
    return useAppMutation(() => logoutUser(), options);
};

export const useRefreshToken = (options?: TMutationOptions) => {
    return useAppMutation<string>(() => refreshToken(), options);
};

export const useRequestOtp = (options?: TMutationOptions) => {
    return useAppMutation<IBodyRequestOtp>((value) => requestOtp(value), options);
};

export const useVerifyOtp = (options?: TMutationOptions) => {
    return useAppMutation<IBodyVerifyOtp>((value) => verifyOtp(value), {
        ...options,
        toastError: 'Otp Code Invalid',
    });
};
