export interface IBodyLogin {
  password: string;
  username: string;
}

export interface IBodyVerifyOtp {
  password: string;
  username: string;
  code: string;
}

export interface IBodyRequestOtp {
  username: string;
  password: string;
  type: string;
}

export interface IOtpLogin {
  otp: string;
}