import { Button, Modal } from '@/components/base';

interface ModalConfirmProps {
    title: string;
    content: JSX.Element;
    isOpen: boolean;
    isCentered?: boolean;
    isDisabled?: boolean;
    isLoading?: boolean;
    onClose: () => void;
    onSubmit: () => void;
}

const ModalConfirm = ({ 
    title, 
    content, 
    isOpen, onClose, onSubmit, isLoading, isCentered, isDisabled }: ModalConfirmProps) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} closeOnClickOverlay={false} isCentered={isCentered} size="xs">
            <div className="p-6 flex flex-col gap-6">
                <h6 className="text-base2 text-primary-500">{title}</h6>
                <div className="text-base text-tertiary-500">{content}</div>
                <div className="flex items-center justify-center gap-4 w-full">
                    <Button variant="outlined" disabled={isLoading} className="w-[50%] h-[56px]" onClick={onClose}>
                        Tidak
                    </Button>
                    <Button disabled={isDisabled} isLoading={isLoading} className="w-[50%] h-[56px]" onClick={onSubmit}>
                        Ya
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

ModalConfirm.propType = {
    isOpen: false,
    isLoading: false,
    isDisabled: false,
    isCentered: true,
};

export default ModalConfirm;
