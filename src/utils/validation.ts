/* eslint-disable no-duplicate-imports */
import { PASSWORD, PHONE } from '@/configs/regex';
import { TDataUnit } from '@/constants/types';
import { yupResolver } from '@hookform/resolvers/yup';
import * as YupModule from 'yup';
import type * as YupType from 'yup';

const Yup = {
    ...YupModule,
    common: () => ({
        required: (options?: { requiredMessage?: string }) =>
            YupModule.string().required(options?.requiredMessage || 'Harus diisi'),
        password: (options?: { passwordMessage?: string; requiredMessage?: string }) =>
            YupModule.string()
                .required(options?.requiredMessage || 'Harus diisi')
                .matches(
                    PASSWORD,
                    options?.passwordMessage ||
                        'Kata sandi harus terdiri dari huruf besar, huruf kecil, angka dan minimal 8 karakter'
                ),
        phone: (options?: { phoneMessage?: string }) =>
            YupModule.string().matches(PHONE, options?.phoneMessage || 'Nomor telepon tidak valid'),
    }),
};

type Callback<T extends { [key: string]: YupType.Schema<any> }> = (yup: typeof Yup) => T;

const validate = <T extends { [key: string]: YupType.Schema<any> }>(callback: Callback<T>) => {
    const schema = Yup.object(callback(Yup));
    return yupResolver(schema);
};

export default validate;

export const validateFileSize = (size: number, maxSize: { size: number; unit: TDataUnit }) => {
    const k = 1024;
    const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = units.indexOf(maxSize.unit);
    const fileSize = size / Math.pow(k, i);

    return fileSize <= maxSize.size;
};

export const validateFileType = (fileTypes: string[], file: File | null) => {
    const splitName = file?.name?.split('.') || [];
    const extension = splitName[splitName.length - 1] || '';
    const isValidExtension = fileTypes.some((type) => type.toLowerCase() === `.${extension.toLowerCase()}`);

    return fileTypes.includes(file?.type || '') || isValidExtension;
};