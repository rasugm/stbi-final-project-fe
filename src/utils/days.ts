// DAY IN INDONESIA
export const getNameDay = (date: string) => {
    const day = new Date(date).getDay();
    const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];

    return days[day];
};

export const getDay = (date: string) => {
    const day = new Date(date).getDate();

    return day;
};
