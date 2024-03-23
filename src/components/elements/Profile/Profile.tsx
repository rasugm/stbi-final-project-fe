import { Button, Modal, Toast } from '@/components/base';
import DropzoneAvatar from '@/components/base/Field/DropzoneAvatar';
import Icon from '@/components/base/Icon';
import HorizontalLine from '@/components/base/Line/Horizontal/Horizontal';
import { USER_PROFILE } from '@/configs/images';
import { useChangePassword, useProfile, useUploadAvatar } from '@/hooks/useServices/useProfile';
import { useMemo, useState } from 'react';
import ChangePasswordForm from '../Form/ChangePasswordForm';
// import ModalConfirm from '../Modal/ModalConfirm';

interface ProfileProps {
    isOpen: boolean,
    onClose: () => void,
}

const Profile = ({ isOpen, onClose }: ProfileProps) => {
    const [isChangePassword, setIsChangePassword] = useState(false);

    const { data: dataProfile, isSuccess: isSuccessProfile, refetch: refetchProfile } = useProfile();
    const { mutate: uploadAvatar, isLoading: isLoadingUpload } = useUploadAvatar();
    const { mutate: changePassword, isLoading: isLoadingChangePassword } = useChangePassword();

    // @ts-ignore
    const avatar: any = useMemo((): any => {
        if (isSuccessProfile && dataProfile) {
            return dataProfile?.data?.avatar ?? '';
        }
    }, [dataProfile, isSuccessProfile]);

    const onHandleDataAvatar = (values: any) => {
        let formData = new FormData();

        formData.append('file', values);

        uploadAvatar(formData, {
            onSuccess() {
                Toast({ type: 'success', title: 'success/update', message: 'Photo profile berhasil diubah' });
                refetchProfile();
            },
            onError() {
                Toast({ type: 'error', title: 'failed/update', message: 'Photo profile gagal diubah' });
            }
        });
    };

    const onHandleDataChangePassword = (values: any) => {
        changePassword(values, {
            onSuccess() {
                Toast({ type: 'success', title: 'success/update', message: 'Password berhasil diubah' });
                setIsChangePassword(false);
            },
            onError() {
                Toast({ type: 'error', title: 'success/update', message: 'Photo profile gagal diubah' });
            }
        });
    };

    return (
        <>

            <Modal
                isOpen={isOpen}
                onClose={onClose}
                isCentered={true}
                size="md"
                closeOnClickOverlay={false}
            >
                <div className="flex flex-col p-6 gap-6">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                            <span className="text-base2 text-tertiary-400 font-bold">Account Information</span>
                            <Icon name="x" className="text-primary-500 font-bold cursor-pointer" size={20} onClick={onClose} />
                        </div>
                        <HorizontalLine />
                    </div>
                    <div className="flex gap-6">
                        <div className="flex flex-col w-[45%] gap-4">
                            <DropzoneAvatar
                                defaultPreview={avatar || USER_PROFILE}
                                maxSize={{ size: 5, unit: 'MB' }}
                                fileTypes={['image/jpeg', 'image/png']}
                                description=""
                                textButton=""
                                isLoading={isLoadingUpload}
                                onChange={onHandleDataAvatar} />

                            <div className="flex flex-col justify-center items-center">
                                <p className="text-xl text-tertiary-900 font-bold">{dataProfile?.data?.full_name || '-'}</p>
                                <p className="text-base2 text-primary-500 font-bold">{dataProfile?.data?.nik || '-'}</p>
                                <p className="text-base2 text-primary-500 font-bold">{dataProfile?.data?.position || '-'}</p>
                            </div>

                            <Button className="rounded-[8px]" onClick={() => setIsChangePassword(true)}> <Icon name="edit" className="mr-2" /> Change Password</Button>
                        </div>
                        <div className="flex flex-col w-[55%] gap-6">
                            <div className="flex flex-col">
                                <span className="font-normal text-sm text-[#212121]">Email</span>
                                <p className="font-semibold text-sm text-tertiary-900">{dataProfile?.data?.email || '-'}</p>
                            </div>

                            <div className="flex flex-col">
                                <span className="font-normal text-sm text-[#212121]">Telephone</span>
                                <p className="font-semibold text-sm text-tertiary-900">{dataProfile?.data?.phone || '-'}</p>
                            </div>

                            <div className="flex flex-col">
                                <span className="font-normal text-sm text-[#212121]">Tribe/Unit</span>
                                <p className="font-semibold text-sm text-tertiary-900">{dataProfile?.data?.unit || '-'}</p>
                            </div>

                            <div className="flex flex-col">
                                <span className="font-normal text-sm text-[#212121]">Division</span>
                                <p className="font-semibold text-sm text-tertiary-900">{dataProfile?.data?.division || '-'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

            <ChangePasswordForm
                isLoading={isLoadingChangePassword}
                isChangePassword={isChangePassword}
                onClose={() => setIsChangePassword(false)}
                onSubmit={onHandleDataChangePassword}
            />

        </>
    );
};

export default Profile;
