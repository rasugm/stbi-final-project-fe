import { LoginSubmitForm, initialValues, validation } from './validation';
import Button from '@/components/base/Button';
import { Field, Form } from '@/components/base/FormBase';
import { TextField } from '@/components/base';

interface LoginFormProps {
    isLoading: boolean;
    setModal: any;
    onSubmit: (data: LoginSubmitForm) => void;
}

const LoginForm = ({ setModal, isLoading, onSubmit }: LoginFormProps) => {
    return (
        <div className="space-y-4">
            <Form
                className="flex flex-col gap-y-6 w-full"
                initialValues={initialValues}
                onSubmit={onSubmit}
                validation={validation}
            >
                <div className="flex flex-col gap-2">
                    <div>
                        <Field
                            label="NIK atau Email"
                            name="username"
                            component={TextField}
                            placeholder="NIK atau Email"
                            iconLeft={{
                                name: 'user',
                                color: '#1D2939',
                                size: 16,
                            }}
                        />
                    </div>

                    <div>
                        <Field
                            label="Password"
                            name="password"
                            component={TextField}
                            iconLeft={{
                                name: 'lock',
                                color: '#1D2939',
                                size: 16,
                            }}
                            placeholder="Masukan password anda"
                            type={'password'}
                        />
                    </div>

                    <p
                        className="caption-large text-primary-500 font-semibold cursor-pointer text-right"
                        onClick={() => setModal({ verifyOtp: false, forgotPassword: true })}
                    >
                        Lupa Password ?
                    </p>
                </div>

                <div className="mt-3 flex justify-end">
                    <Button isLoading={isLoading} className="w-full bg-gradient-to-r from-secondary-400 to-primary-400" type="submit">
                        Login
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default LoginForm;
