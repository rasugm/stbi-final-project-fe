import { toRupiah } from '@/utils/common';

export const nominalDiscount = (totalPrice: number, discount: number, discount_type: string): string => {
    if (discount_type === 'percentage') {
        if (discount > 0 && discount <= 100) {
            return toRupiah((totalPrice * discount) / 100);
        } else {
            return toRupiah(0);
        }
    } else if (discount_type === 'nominal') {
        if (discount > 0 && discount <= totalPrice) {
            return String(((discount / totalPrice) * 100) + '%');
        } else {
            return toRupiah(0);
        }
    } else {
        return toRupiah(0);
    }
};

