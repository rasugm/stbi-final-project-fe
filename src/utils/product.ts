import { STATIC_OPTIONS } from '@/constants';
import { toRupiah } from './common';

export const getBillingMode = (value: string) => {
    return STATIC_OPTIONS.BILLING_MODE.find((item) => item.value === value)?.label ?? '-';
};

export const getPaymentType = (value: string) => {
    return STATIC_OPTIONS.PAYMENT_TYPE.find((item) => item.value === value)?.label ?? '-';
};

export const getProductType = (type: string) => {
    if (type?.toUpperCase() === 'PHYSICAL PRODUCT') return 'Physical Product';
    if (type?.toUpperCase() === 'DIGITAL PRODUCT') return 'Digital Product';
    return '';
};

export const getStatusVariantProduct = (status: number): { color: any; label: string } => {
    switch (status) {
    case 0:
        return {
            label: 'Draft',
            color: 'secondary',
        };
    case 1:
        return {
            label: 'Perlu Ditinjau',
            color: 'info',
        };
    case 2:
        return {
            label: 'Dikembalikan',
            color: 'warning',
        };
    case 3:
        return {
            label: 'Perlu Ditinjau Ulang',
            color: 'primary',
        };
    case 4:
        return {
            label: 'Disetujui',
            color: 'success',
        };
    case 5:
        return {
            label: 'Ditolak',
            color: 'error',
        };
    default:
        return {
            label: '-',
            color: 'black',
        };
    }
};

export const getNominalOrDiscount = (type: any, price: number) => {
    if (type?.toUpperCase() === 'PERCENTAGE') return `${price}%`;
    if (type?.toUpperCase() === 'NOMINAL') return toRupiah(price);
    return '-';
};
