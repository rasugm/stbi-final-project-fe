import dayjsModule from 'dayjs';
import utc from 'dayjs/plugin/utc';
import localizedFormat from 'dayjs/plugin/localizedFormat';

import 'dayjs/locale/id';

dayjsModule.locale('id');
dayjsModule.extend(utc);
dayjsModule.extend(localizedFormat);

export const dayjs = dayjsModule;

export const dateFormat = (date?: Date | string, format = 'YYYY/MM/DD', gmtOffset = 7) => {
    // Parse tanggal ke dayjs
    const parsedDate = dayjsModule(date);

    // Set zona waktu berdasarkan gmtOffset yang diberikan
    const gmtDate = parsedDate.utcOffset(gmtOffset * 60);

    // Format tanggal dengan zona waktu yang diatur
    return gmtDate.format(format);
};

export const getDatesRange = (
    startDate: Date | string,
    endDate: Date | string,
    unit: 'day' | 'month' | 'year' = 'day'
) => {
    let start = dayjs(startDate);
    let end = dayjs(endDate);
    const diff = end.diff(start, unit);
    let result = [];

    for (let i = 0; i <= diff; i++) {
        let newDate = start.add(i, unit).format('YYYY-MM-DD');
        result.push(newDate);
    }
    return result;
};

export const getCurrentDate = () => dayjs().format('DD-MM-YYYY');

export const determineNotificationTime = (dateStr: string): string => {
    const inputDate = new Date(dateStr);
    const now = new Date();

    const timeDifference = now.getTime() - inputDate.getTime();
    const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));

    if (hoursDifference < 1) {
        return 'just now';
    } else if (hoursDifference < 24) {
        return `${hoursDifference} ${hoursDifference > 1 ? 'hours' : 'hour'} ago`;
    } else if (hoursDifference < 48) {
        return 'yesterday';
    } else {
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        return `${daysDifference} ${daysDifference > 1 ? 'days' : 'day'} ago`;
    }
};

export const formatDateToIndonesianFormat = (inputDate: string, includeTime?: boolean): string => {
    let formatString = 'DD MMMM YYYY';

    if (includeTime) {
        formatString += ' HH:mm:ss';
    }

    const formattedDate = dayjs(inputDate).format(formatString);
    return formattedDate;
};
