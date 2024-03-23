import { LazyExoticComponent } from 'react';
export type TDataUnit = 'Bytes' | 'EB' | 'GB' | 'KB' | 'MB' | 'PB' | 'TB' | 'YB' | 'ZB';

export type TAccessAction = 'read' | 'approve' | 'create' | 'update' | 'delete';

export interface ICommonResponse<Data> {
    code: string;
    data?: Data;
    message: string;
    status: string;
}

export interface IAditionalData {
    created_at: string;
    created_by: string;
    created_name: string;
    deleted_at: string | null;
    deleted_by: string | null;
    deleted_name: string | null;
    updated_at: string;
    updated_by: string;
    updated_name: string | null;
}

export interface IListResponse<Data> {
    code: string;
    data?: Data;
    message: string;
    meta: {
        current_page: number;
        per_page: number;
        total: number;
        total_filtered: number;
        total_page: number;
    };
    status: string;
}

export interface IListResponseWithoutMeta<Data> {
    code: string;
    data?: Data;
    message: string;
    status: string;
}

export interface ICommonParams {
    [x: string]: boolean | number | string | null | undefined;
    limit: number;
    page: number;
    search?: string;
}

export interface IOption {
    label: string;
    value: any;
}

export interface ILayout {
    title: string;
    stage: string[];
    exact?: boolean;
    breadcrumbs: {
        title: string
        path: string
    }[];
    path: string;
    isPrivate: boolean;
    component: LazyExoticComponent;
    permissions: string[];
    layout: 'dashboard' | 'landing' | 'auth';
}
