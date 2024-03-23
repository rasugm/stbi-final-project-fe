import clsx from 'clsx';
import React from 'react';

interface Props {
    children: React.ReactNode
    className?: string;
}

const ModalFooter: React.FC<Props> = ({ children, className }) => {
    return (
        <div
            className={clsx('py-4 px-5 flex items-center justify-end gap-2', className)}
            data-testid="g-ModalFooter"
        >
            {children}
        </div>
    );
};

ModalFooter.defaultProps = {
    className: '',
};

export default ModalFooter;
