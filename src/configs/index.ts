import { env } from './env';
export * as IMAGES from './images';
export * as REGEX from './regex';
export * as STORAGE from './storageKey';

export const APP_ENV = env.REACT_APP_ENV ?? 'development';
export const BASE_URL = env.REACT_APP_BASE_URL_API;
export const BASE_URL_WEB = env.REACT_APP_BASE_URL_WEB;
export const URL_WEB = env.REACT_APP_URL;

export const SESSION_ACTIVE = 30 * 60; // 30 minutes
