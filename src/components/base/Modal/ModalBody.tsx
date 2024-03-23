import clsx from 'clsx';
import React from 'react';

interface Props {
    children: React.ReactNode;
    className?: string;
}

const ModalBody: React.FC<Props> = ({ children, className }) => {
    return (
        <div className={clsx('h-auto overflow-auto pb-6 pt-2 px-6', className)} data-testid="g-ModalBody">
            {children}
        </div>
    );
};

ModalBody.defaultProps = {
    className: '',
};

export default ModalBody;
