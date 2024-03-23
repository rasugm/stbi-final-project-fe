import { ICommonResponse, IOption, IListResponse } from '@/constants/types';

export interface IUserManagement {
    avatar: string;
    company: string | null;
    company_id: string;
    directorate: string | null;
    directorate_id: string | null;
    division: string | '';
    division_id: string;
    email: string;
    email_verified: string | null;
    forgot_max_attempt: string | null;
    forgot_token: string | null;
    full_name: string;
    id: string;
    last_login: string | null;
    nik: string;
    otp_code: string | null;
    otp_expired: string | null;
    otp_max_attempt: string | null;
    phone: string;
    position: string;
    role: string | '';
    role_id: string | '';
    status: 'ACTIVE' | 'INACTIVE';
    type: 'EXTERNAL' | 'TELKOM';
    unit: string | '';
    unit_id: string;
    referral_code?: string | '';
    privy_id?: string;
    employee_status: string;
    privy_enterprise_token: string;
}

export type TResponseUserManagement = {
    detail: ICommonResponse<IUserManagement>;
    list: IListResponse<IUserManagement[]>;
    summary: ICommonResponse<IBodySummaryUserManagement>;
};

export interface IBodyUserManagement {
    division: IOption | null;
    email: string;
    name: string;
    nik: string;
    phone_number: string;
    position: IOption | null;
    role: IOption | null;
    status: boolean;
    tribe: IOption | null;
    type: IOption | null;
    referral_code?: string;
    privy_id?: string;
    employee_status:  IOption | null;
}

export interface IBodyUserManagementSubmit extends Omit<IBodyUserManagement, 'division', 'phone_number'> {
    company_id: string;
    division_id: string;
    full_name: string;
    phone: string;
    status: string;
    type: string;
    unit_id: string;
}

export interface IBodySummaryUserManagement {
    total: {
        user: number;
        current_month: number;
    },
    active: {
        user: number;
        current_month: number;
    },
    nonaktif: {
        user: number;
        current_month: number;
    },
    blocked: {
        user: number;
        current_month: number;
    }
}