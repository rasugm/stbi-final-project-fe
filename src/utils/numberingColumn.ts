export const numberingColumn = (pageNumber: number, itemsPerPage: number, index: number) => {
    return (pageNumber - 1) * itemsPerPage + index + 1;
};
