import { LANDING_ROUTES } from '@/routes/public/Landing.routes.ts';
import { LOGIN_ROUTES } from '@/routes/public/Login.routes.ts';

export const PUBLIC_ROUTES = [
    ...LANDING_ROUTES,
    ...LOGIN_ROUTES,
];