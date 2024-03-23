import { Button, Modal, TextField } from '@/components/base';
import { Field, Form } from '@/components/base/FormBase';
import Icon from '@/components/base/Icon';
import HorizontalLine from '@/components/base/Line/Horizontal/Horizontal';
import { IBodyChangePassword } from '@/services/profile';
import { validation } from './validation';

interface ChangePasswordProps {
    isLoading: boolean,
    isChangePassword: boolean,
    onClose: () => void;
    onSubmit: (values: IBodyChangePassword) => void;
}

const initialValues = {
    confirm_password: '',
    password: ''
};

const ChangePasswordForm = ({ isLoading, isChangePassword, onClose, onSubmit }: ChangePasswordProps) => {
    return (
        <>
            <Modal
                isOpen={isChangePassword}
                onClose={onClose}
                isCentered={true}
                size="sm2"
                closeOnClickOverlay={false}
            >
                <div className="flex flex-col gap-8 p-8">
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center justify-between">
                            <span className="text-base2 text-tertiary-400 font-bold">Change Password</span>
                            <Icon name="x" className="text-primary-500 font-bold" size={20} onClick={onClose} />
                        </div>
                        <HorizontalLine />
                    </div>
                    <Form
                        className="flex flex-col gap-y-8 w-full"
                        initialValues={initialValues}
                        onSubmit={onSubmit}
                        validation={validation}
                    >
                        <div className="flex flex-col gap-2">
                            <div>
                                <Field
                                    label="New Password"
                                    name="password"
                                    component={TextField}
                                    placeholder="Masukan password baru anda"
                                    type={'password'}
                                    id="password"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <div>
                                <Field
                                    label="Confirm New Password"
                                    name="confirm_password"
                                    component={TextField}
                                    placeholder="Masukan password konfirmasi anda"
                                    type={'password'}
                                    id="confirm_password"
                                />
                            </div>
                        </div>

                        <div className="flex justify-end gap-4">
                            <Button
                                type="submit"
                                onClick={onClose}
                                variant="clear"
                            >
                                Batal
                            </Button>
                            <Button
                                isLoading={isLoading}
                                type="submit"
                            >
                                Simpan
                            </Button>
                        </div>
                    </Form>
                </div>
            </Modal>
        </>
    );
};

export default ChangePasswordForm;