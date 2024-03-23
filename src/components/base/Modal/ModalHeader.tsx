import React, { useContext } from 'react';
import ModalContext from './ModalContext';
import clsx from 'clsx';
import { BiX } from 'react-icons/bi';

interface Props {
    children: React.ReactNode;
    className?: string;
    classNameText?: string;
    hideIconClose?: boolean;
    withBorderBottom?: boolean;
}

const ModalHeader: React.FC<Props> = ({ withBorderBottom, children, hideIconClose, classNameText, className }) => {
    const {
        setIsOpen,
    }: {
        setIsOpen: any;
    } = useContext(ModalContext);

    return (
        <div
            className={clsx(
                'py-6 pb-4 px-6 flex items-center justify-between',
                className,
                withBorderBottom && 'border-b mb-4'
            )}
            data-testid="g-ModalHeader"
        >
            <div className={clsx('font-semibold text-lg', classNameText)}>{children}</div>
            {!hideIconClose && (
                <span className="cursor-pointer text-3xl" data-testid="ic-close" onClick={() => setIsOpen(false)}>
                    <BiX />
                </span>
            )}
        </div>
    );
};

export default ModalHeader;
ModalHeader.defaultProps = {
    className: '',
    classNameText: '',
    hideIconClose: false,
    withBorderBottom: false,
};
