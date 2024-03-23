import { LandingPage } from '@/pages/LandingPage';
import { ENVIRONMENT, WEB } from '@/constants';
import { ILayout } from '@/constants/types';

export const LANDING_ROUTES: ILayout[] = [
    {
        title: 'Search Engine KPU',
        stage: ENVIRONMENT.ALL,
        exact: true,
        breadcrumbs: [],
        path: WEB.LANDING,
        isPrivate: false,
        component: LandingPage,
        permissions: ['all'],
        layout: 'landing'
    }
];
