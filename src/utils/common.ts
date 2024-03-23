/* eslint-disable indent */

import { KEY_STORAGE } from '@/constants/keyStorage';

export const toNumber = (num: number | string) => {
    if (typeof num === 'number') return num;
    return Number(num?.replace(/[^0-9]/g, ''));
};

export const toRupiah = (value: number, format: string = 'Rp') => {
    const parse = value?.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.');
    return `${format}${parse ?? 0}`;
};

export const fileSize = (size: number, decimal = 2) => {
    if (size === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(size) / Math.log(k));
    return parseFloat((size / Math.pow(k, i)).toFixed(decimal)) + ' ' + sizes[i];
};

// Convert seconds to day, hours, minute and remaining seconds
export function secondsToDHHMS(seconds: number) {
    const days = Math.floor(seconds / (3600 * 24));
    seconds %= 3600 * 24;
    const hours = Math.floor(seconds / 3600);
    seconds %= 3600;
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return { days, hours, minutes, seconds: remainingSeconds };
}

export const truncateString = (text: string, maxLength?: number) => {
    if (text.length <= maxLength! || typeof maxLength !== 'number') return text;

    return text.slice(0, maxLength) + '...';
};

export const bytesToMB = (bytes: number) => {
    /*Float 2 Point*/
    return (bytes / (1024 * 1024)).toFixed(2);
};

export const refreshSidebarMenu = () => {
    localStorage.removeItem(KEY_STORAGE.menu);
    window.location.reload();
};
