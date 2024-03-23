export interface IBodyReqForgotPassword {
    email: string;
}

export interface IBodyResetPassword {
    password: string,
    token: string
}