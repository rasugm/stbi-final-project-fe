import { ReactNode } from 'react';

interface ModalOptionsTableProps {
    children: ReactNode;
    open?: boolean;
}

const ModalOptionsTable = ({ children, open }: ModalOptionsTableProps) => {
    return (
        <div
            className={`absolute -bottom-8 -left-[160px] z-[1000px] min-w-[156px] 
      rounded bg-white shadow ${open ? 'block' : 'hidden'}`}
        >
            {children}
        </div>
    );
};

export default ModalOptionsTable;
