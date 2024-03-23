import { createContext, useState } from 'react';

type LoginContextType = {
    otp: string;
    setOtp: (otp: string) => void;
};

const LoginContext = createContext<LoginContextType | undefined>(undefined);

type Props = {
    children: React.ReactNode;
};

const LoginProvider = ({ children }: Props) => {
    const [otp, setOtp] = useState<string>('');
    return <LoginContext.Provider value={{ otp, setOtp }}>{children}</LoginContext.Provider>;
};

export { LoginProvider, LoginContext };
