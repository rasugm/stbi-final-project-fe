export const getErrorMsg = (err: any, defaultMsg = 'Error') => {
    return (
        err?.response?.data?.error ||
        err?.response?.data?.message ||
        err?.response?.error ||
        err?.response?.message ||
        err?.data?.error ||
        err?.data?.message ||
        err?.message ||
        defaultMsg
    );
};
