// MONTH IN INDONESIA
export const getNameMonth = (date: string) => {
    const month = new Date(date).getMonth();
    const months = [
        'Januari',
        'Februari',
        'Maret',
        'April',
        'Mei',
        'Juni',
        'Juli',
        'Agustus',
        'September',
        'Oktober',
        'November',
        'Desember',
    ];

    return months[month];
};
