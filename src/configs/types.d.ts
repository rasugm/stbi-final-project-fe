// Select Component
export interface IOption {
    label: string;
    value: string;
}

// Pagination Component
export interface IMeta {
    page: number;
    totalData: number;
    totalDataOnPage: number;
    totalPage: number;
}

// Users
export interface IUsers {
    id: string,
    full_name: string,
    avatar: string,
    email: string,
    phone: string,
    division: string | null | undefined,
    division_id: string | null | undefined,
    unit: string | null | undefined,
    unit_id: string | null | undefined,
    role_id: string | null | undefined,
    role: string | null | undefined,
    status: string,
    position: string | null | undefined,
    nik: string,
    type: string,
    employee_status: string
}

export interface IMenus {
    id: string;
    key: string;
    name: string;
    url: string;
    icon: string;
    parent_id: string;
    show: boolean;
}

export interface IRoleMenu {
    menu: string,
    level: number,
    permissions: {
        maker: boolean,
        viewer: boolean,
        approver: boolean
    },
}

export interface IRoles {
    roleId: string,
    roleName: string,
    permissions: {
        maker: boolean,
        viewer: boolean,
        approver: boolean
    },
    status: boolean,
    roleMenu: IRoleMenu[]
}

export interface IRoleForm {
    menu: string,
    level: number,
    permissions: {
        maker: boolean,
        viewer: boolean,
        approver: boolean
    },
}

export interface StatusState {
    semua: boolean;
    aktif: boolean;
    tidakAktif: boolean;
    block: boolean;
}

export interface ILogActivity {
    id: string | null,
    user_id: string | null,
    user_fullname?: string | null,
    user_photo_url?: string | null,
    user_role?: string | null,
    city?: string | null,
    country?: string | null,
    os?: string | null,
    browser?: string | null,
    ip_address?: string | null,
    activity?: string | null,
    created_at?: string | null,
    deleted_at?: string | null,
}

export interface RadioOption<T> {
    label: string;
    value: T;
}

export interface ILogActivityParams {
    username?: string;
    page?: number;
    limit?: number;
    user_role?: string;
    city?: string;
    start_date?: string | null;
    end_date? :string | null;
    activity?: string;
}

export interface IMenuManagementParams {
    [x: string]: boolean | number | string | null | undefined;
    page?: number;
    limit?: number;
    end_date?: string | null;
    activity?: string;
}
