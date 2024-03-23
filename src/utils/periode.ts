import { MONTHS } from '@/constants/months';

// CONVERT PERIODE YYYY-MM TO MONTH YYYY
export const convertStringPeriode = (periode: string) => {
    return `${MONTHS[parseInt(periode?.split('-')[1])-1]?.label} ${periode?.split('-')[0]}` ?? '-';
};