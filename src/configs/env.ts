export const env = {
    REACT_APP_ENV: import.meta.env.VITE_REACT_APP_ENV ?? 'development',
    REACT_APP_BASE_URL_API: import.meta.env.VITE_REACT_APP_BASE_URL_API ?? '',
    REACT_APP_BASE_URL_API_TEST: import.meta.env.VITE_REACT_APP_BASE_URL_API_TEST ?? '',
    REACT_APP_BASE_URL_WEB: import.meta.env.VITE_REACT_APP_BASE_URL ?? '',
    REACT_APP_URL: import.meta.env.VITE_REACT_APP_URL ?? '',
    REACT_GA_MEASUREMENT_ID: import.meta.env.VITE_REACT_GA_MEASUREMENT_ID ?? '',
};