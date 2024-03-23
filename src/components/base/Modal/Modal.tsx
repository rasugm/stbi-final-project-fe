import clsx from 'clsx';
import React, { useRef } from 'react';
import ModalContext from './ModalContext';
import { CSSTransition } from 'react-transition-group';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import { createPortal } from 'react-dom';

export type ModalProps = {
    children: React.ReactNode;
    closeOnClickOverlay?: boolean;
    isCentered?: boolean;
    isOpen: boolean;
    modalTestiId?: string;
    onClose: () => void;
    size?: 'fit' | 'full' | 'lg' | 'md' | 'sm' | 'sm2' | 'xl' | 'xs';
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    children,
    isCentered,
    closeOnClickOverlay,
    size,
    modalTestiId,
}) => {
    const refModal = useRef<HTMLDivElement>(null);

    useOnClickOutside(refModal, () => closeOnClickOverlay && onClose());

    const popup = () => (
        <CSSTransition classNames="fade" in={isOpen} timeout={500} unmountOnExit>
            <ModalContext.Provider
                value={{
                    isOpen: isOpen,
                    setIsOpen: onClose,
                    closeOnClickOverlay: closeOnClickOverlay
                }}
            >
                <div
                    className={clsx(
                        'shadow-xl flex justify-center fixed top-0 left-0 right-0 bottom-0 w-screen h-screen bg-[#141414]/90 overflow-auto z-[1000] backdrop-blur-sm',
                        !isCentered ? 'items-start py-16' : 'items-center'
                    )}
                    data-testid={modalTestiId || 'g-Modal'}
                >
                    <div
                        className={clsx(
                            `bg-white rounded-lg`,
                            size === 'sm2' && 'w-[95%] sm:w-[400px]',
                            size === 'sm' && 'w-[95%] sm:w-[520px]',
                            size === 'md' && 'w-[95%] sm:w-[600px]',
                            size === 'lg' && 'w-[95%] md:w-[768px]',
                            size === 'xl' && 'w-[95%] lg:w-[80%]',
                            size === 'full' && 'w-full',
                            size === 'fit' && 'w-fit'
                        )}
                        data-testid="modal-inside"
                        ref={refModal}
                    >
                        {children}
                    </div>
                </div>
            </ModalContext.Provider>
        </CSSTransition>
    );
    return createPortal(popup(), document.body);
};

export default Modal;
Modal.defaultProps = {
    closeOnClickOverlay: true,
    isCentered: false,
    modalTestiId: '',
    size: 'md',
};
