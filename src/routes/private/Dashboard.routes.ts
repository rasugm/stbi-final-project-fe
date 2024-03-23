import { Home } from '@/pages/Home';
import { ENVIRONMENT, WEB } from '@/constants';
import { ILayout } from '@/constants/types';

// DEFINE ROUTES
export const DASHBOARD_ROUTES: ILayout[] = [
    {
        title: 'Home',
        stage: ENVIRONMENT.ALL,
        path: WEB.DASHBOARD,
        breadcrumbs: [],
        isPrivate: true,
        component: Home,
        permissions: ['all'],
        layout: 'dashboard'
    }
];
