//NOTE: Refactor later
import Button from '@/components/base/Button/Button';
import Heading from '@/components/base/Heading/Heading';
import { Modal, ModalBody, ModalFooter, ModalHeader } from '@/components/base/Modal';
import { type ModalProps } from '@/components/base/Modal/Modal';
import Text from '@/components/base/Text/Text';
import { useState } from 'react';

export type TModalAlert = {
    centered?: boolean;
    closeOnClickOverlay?: boolean;
    desc?: JSX.Element | string;
    hideBtnClose?: boolean;
    images?: string;
    isOpen: boolean;
    labelClose?: string;
    labelYes?: string;
    onClose: () => void;
    onSubmit: () => Promise<void> | void;
    size?: ModalProps['size'];
    title: string;
    type?: 'success' | 'withImage';
};

const ModalAlert = ({
    isOpen,
    onClose,
    centered,
    labelYes,
    labelClose,
    hideBtnClose,
    onSubmit,
    title,
    desc,
    size,
    images,
    type,
    closeOnClickOverlay = false,
}: TModalAlert) => {
    const [loadingAlert, setLoadingAlert] = useState(false);

    const customSubmit = async () => {
        try {
            if (onSubmit) {
                setLoadingAlert(true);
                await onSubmit();
                setLoadingAlert(false);
            }
        } catch (_) {
            setLoadingAlert(false);
        }
    };

    if (type === 'withImage') {
        return (
            <Modal
                size={size}
                isOpen={isOpen}
                onClose={onClose}
                isCentered={centered}
                closeOnClickOverlay={closeOnClickOverlay}
            >
                <ModalBody className="text-gray-600 flex items-center justify-center flex-col gap-4 pt-5">
                    <img src={images} alt={title} />
                    <div className="mt-2">
                        <Heading className="text-center" as="h5">
                            {title}
                        </Heading>
                        <Text className="text-center mt-3">{desc}</Text>
                    </div>
                </ModalBody>

                <ModalFooter className="gap-4">
                    {!hideBtnClose && (
                        <Button variant={'clear'} className="w-full" onClick={onClose} type="button">
                            {labelClose ?? 'Tutup'}
                        </Button>
                    )}
                    <Button isLoading={loadingAlert} className="w-full" onClick={customSubmit} type="button">
                        {labelYes ?? 'Submit'}
                    </Button>
                </ModalFooter>
            </Modal>
        );
    }

    if (type === 'success') {
        return (
            <Modal size={size} isOpen={isOpen} onClose={onClose} isCentered={centered} closeOnClickOverlay={false}>
                <ModalBody className="text-gray-600 flex items-center justify-center flex-col gap-4 pt-5">
                    <img src={images} alt={title} />
                    <div className="mt-2">
                        <Heading className="text-center" as="h5">
                            {title}
                        </Heading>
                        {desc && <Text className="text-center mt-3">{desc}</Text>}
                    </div>
                </ModalBody>
                <ModalFooter className="gap-4">
                    <Button className="w-full" isLoading={loadingAlert} onClick={customSubmit} type="button">
                        {labelYes ?? 'Submit'}
                    </Button>
                </ModalFooter>
            </Modal>
        );
    }

    return (
        <Modal size={size} isOpen={isOpen} onClose={onClose} isCentered={centered} closeOnClickOverlay={false}>
            <ModalHeader>{title ?? 'Confirmation'}</ModalHeader>
            {desc ? <ModalBody className="text-gray-600">{desc}</ModalBody> : null}
            <ModalFooter className="gap-4">
                {!hideBtnClose && (
                    <Button variant={'clear'} onClick={onClose} type="button">
                        {labelClose ?? 'Tutup'}
                    </Button>
                )}
                <Button isLoading={loadingAlert} onClick={customSubmit} type="button">
                    {labelYes ?? 'Submit'}
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default ModalAlert;
ModalAlert.defaultProps = {
    labelClose: undefined,
    labelYes: undefined,
    images: undefined,
    type: undefined,
    hideBtnClose: false,
    centered: false,
    size: 'md',
};
