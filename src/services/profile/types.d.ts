export interface IResUser {
    email: string;
    grantAccess: string[];
    name: string;
    phone_number: string;
    profile_pict: string;
    role: string;
}

export interface IBodyChangePassword {
    confirm_password: string;
    password: string;
}
