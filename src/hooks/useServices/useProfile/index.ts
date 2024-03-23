import useAppMutation, { TMutationOptions } from '@/hooks/useAppMutation';
import useAppQuery, { TQueryOptions } from '@/hooks/useAppQuery';
import { IBodyChangePassword, changePassword, getUser, uploadAvatar } from '@/services/profile';
import { TResponseUserManagement } from '@/services/user';

export const useProfile = (option?: TQueryOptions) => {
    return useAppQuery<TResponseUserManagement['detail']>(['my-profile'], getUser, option);
};

export const useChangePassword = (option?: TMutationOptions) => {
    return useAppMutation<IBodyChangePassword>((value) => changePassword(value), option);
};

export const useUploadAvatar = (option?: TMutationOptions) => {
    return useAppMutation<FormData>((value) => uploadAvatar(value), option);
};
