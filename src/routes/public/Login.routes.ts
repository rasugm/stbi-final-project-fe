import { Login } from '@/pages/Login';
import { ENVIRONMENT, WEB } from '@/constants';
import { ILayout } from '@/constants/types';

export const LOGIN_ROUTES: ILayout[] = [
    {
        title: 'Login',
        stage: ENVIRONMENT.ALL,
        exact: true,
        breadcrumbs: [],
        path: WEB.LOGIN,
        isPrivate: false,
        component: Login,
        permissions: ['all'],
        layout: 'auth',
    },
];
