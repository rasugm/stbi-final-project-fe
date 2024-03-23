import { Button, Modal } from '@/components/base';
import HorizontalLine from '@/components/base/Line/Horizontal/Horizontal';
import { IMAGES } from '@/configs';

interface Props {
    title: string,
    content: JSX.Element,
    isOpen: boolean,
    onClose: () => void;
    onSubmit: () => void;
}

const ModalConfirmWithIllustration = ({ title, content, isOpen, onClose, onSubmit }: Props) => {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            closeOnClickOverlay={false}
            isCentered={true}
            size="xs"
        >
            <div className="p-6 flex flex-col justify-center items-center gap-4">
                <img src={IMAGES.IL_CONFIRM_SUBMIT} alt="IL_CONFIRM" className="w-64 h-64"/>
                <h6 className="text-base2 text-tertiary-800">{title}</h6>
                <div className="text-[16px] text-tertiary-800">
                    {content}
                </div>

                <HorizontalLine className="my-2 w-full" />

                <div className="flex items-center justify-center gap-4 w-full">
                    <Button variant="clear" className="w-[100px] h-[56px]" onClick={onClose}>Tidak</Button>
                    <Button className="w-[100px] h-[56px]" onClick={onSubmit}>Ya</Button>
                </div>
            </div>
        </Modal>
    );
};

ModalConfirmWithIllustration.propType = {
    isOpen: false,
};

export default ModalConfirmWithIllustration;
