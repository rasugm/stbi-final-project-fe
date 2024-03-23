import { Button } from '@/components/base';
import { Modal, ModalBody, ModalFooter, ModalHeader } from '@/components/base/Modal';

type Props = {
    isOpen: boolean;
    onCancel: any;
    onConfirm: any;
};

const ModalExitConfirmation = ({ isOpen, onCancel, onConfirm }: Props) => {
    return (
        <Modal size="sm" isOpen={isOpen} onClose={onCancel} closeOnClickOverlay={false}>
            <ModalHeader hideIconClose className="">
                Apakah anda yakin meninggalkan halaman ini?
            </ModalHeader>
            <ModalBody>
                <span>
                    Data produk yang anda buat tidak akan tersimpan oleh sistem, jika anda meninggalkan halaman ini.{' '}
                </span>
            </ModalBody>
            <ModalFooter>
                <Button onClick={onConfirm}>Ya</Button>
                <Button onClick={onCancel}>Tidak, lanjut lengkapi data</Button>
            </ModalFooter>
        </Modal>
    );
};

export default ModalExitConfirmation;
