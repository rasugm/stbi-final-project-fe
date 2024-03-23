export const checkStartNumber = (totalPage: number, currentPage: number) => {
    if (currentPage <= 4) {
        return 0;
    }
    return currentPage >= totalPage - 3 ? totalPage - 5 : currentPage - 2;
};

export const checkEndNumber = (totalPage: number, currentPage: number) => {
    if (totalPage <= 5) {
        return totalPage;
    } else if (currentPage < 5) {
        return 5;
    }
    return currentPage >= totalPage - 3 ? totalPage : currentPage + 1;
};

export default function getPagePagination(totalPage: number, currentPage: number) {
    return Array(totalPage)
        .fill('')
        .map((_, i) => i + 1)
        .slice(checkStartNumber(totalPage, currentPage), checkEndNumber(totalPage, currentPage));
}

export const showLastNumber = (totalPage: number, currentPage: number) => {
    if (totalPage < 6) return false;
    if (totalPage <= 6 && [5, 6].includes(currentPage)) return false;
    if (totalPage <= 6) return true;
    if (totalPage === 7 && [4].includes(currentPage)) return true;
    return currentPage <= totalPage - 4;
};

export const showLastDot = (totalPage: number, currentPage: number) => {
    if ([5, 6].includes(currentPage) && [7, 8].includes(totalPage)) return false;
    if (currentPage < 6 && totalPage > 6) return true;
    return currentPage > 5 && currentPage <= totalPage - 4 && totalPage > 5;
};

export const showFirstDot = (totalPage: number, currentPage: number) => {
    if ([5, 6].includes(currentPage) && [6].includes(totalPage)) return false;
    return currentPage > 4 && totalPage > 5;
};

export const showFirstNumber = (totalPage: number, currentPage: number) => {
    return currentPage > 4 && totalPage !== 5;
};
