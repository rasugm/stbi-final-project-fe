export const DEV = 'development';
export const STAGING = 'staging';
export const PROD = 'production';
export const ALL = [DEV, STAGING, PROD];
export type OPTIONAL = typeof DEV | typeof PROD | typeof STAGING;
