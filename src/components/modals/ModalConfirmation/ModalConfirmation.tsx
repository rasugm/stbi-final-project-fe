import Button from '@/components/base/Button/Button';
import Heading from '@/components/base/Heading/Heading';
import { Modal, ModalBody } from '@/components/base/Modal';
import Text from '@/components/base/Text';

type Props = {
    btnNoProps?: React.ComponentProps<typeof Button>;
    btnYesProps?: React.ComponentProps<typeof Button>;
    closeOnClickOverlay?: boolean;
    desc: string;
    hideClose?: boolean;
    img?: any;
    isLoading?: boolean;
    isOpen: boolean;
    labelNo?: string;
    labelYes?: string;
    onClose: () => void;
    onSubmit: (values: any) => void;
    title: string;
};

const ModalConfirmation = ({
    isOpen,
    onClose,
    onSubmit,
    title,
    desc,
    labelYes,
    img,
    labelNo,
    hideClose,
    closeOnClickOverlay,
    isLoading,
    btnYesProps,
    btnNoProps,
}: Props) => {
    return (
        <Modal isCentered closeOnClickOverlay={closeOnClickOverlay} size="sm" isOpen={isOpen} onClose={onClose}>
            <ModalBody className="px-7">
                {img && (
                    <div className="mt-3">
                        <img className="w-full h-full" src={img} alt="img" />
                    </div>
                )}
                <Heading as="h5" size="xl" className="mt-5 mb-2 text-center">
                    {title}
                </Heading>
                <Text className="text-center">{desc}</Text>
                <div className="flex items-center mt-6 gap-2">
                    {!hideClose && (
                        <Button
                            variant={'clear'}
                            disabled={isLoading}
                            onClick={onClose}
                            className="w-full"
                            {...btnNoProps}
                        >
                            {labelNo}
                        </Button>
                    )}
                    <Button isLoading={isLoading} onClick={onSubmit} className="w-full" {...btnYesProps}>
                        {labelYes}
                    </Button>
                </div>
            </ModalBody>
        </Modal>
    );
};

export default ModalConfirmation;
ModalConfirmation.defaultProps = {
    btnNoProps: undefined,
    btnYesProps: undefined,
    labelYes: 'Yes',
    labelNo: 'Close',
    hideClose: false,
    isLoading: false,
    img: undefined,
    closeOnClickOverlay: true,
};
