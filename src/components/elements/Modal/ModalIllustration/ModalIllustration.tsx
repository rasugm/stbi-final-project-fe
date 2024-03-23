import { Button, Modal } from '@/components/base';
import HorizontalLine from '@/components/base/Line/Horizontal/Horizontal';

interface Props {
    imgSrc: string,
    textCaption: string,
    buttonCaption: string,
    classNameButton?: string,
    isOpen: boolean,
    onClose: () => void,
    onAction: () => void;
}

const ModalIllustration = ({
    imgSrc,
    textCaption,
    buttonCaption,
    classNameButton,
    isOpen,
    onAction,
    onClose
}: Props) => {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            closeOnClickOverlay={false}
            isCentered={true}
            size="sm"
        >
            <div className="m-4">
                <div className="flex flex-col justify-center items-center">
                    <img src={imgSrc} alt="ILLUSTRATION" className="w-64 h-64" />
                    <h6 className="text-xl text-tertiary-800 font-bold">{textCaption}</h6>
                </div>

                <HorizontalLine className="my-4 w-full" />

                <div className="flex items-center justify-center gap-4 w-full py-4">
                    <Button className={classNameButton ? classNameButton : 'w-[100px] h-[56px]'} onClick={onAction}>{buttonCaption}</Button>
                </div>
            </div>
        </Modal>
    );
};

ModalIllustration.propType = {
    isOpen: false,
};

export default ModalIllustration;
