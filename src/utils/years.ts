// FUNCTION GET FULL YEAR
export const getFullYear = (date: string) => {
    const year = new Date(date).getFullYear();
    return year;
};
