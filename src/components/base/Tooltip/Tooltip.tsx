import React, { ReactNode } from 'react';

interface TooltipProps {
    text: ReactNode | string;
    children: ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
    return (
        <div className="group inline-block cursor-pointer">
            {children}
            <div className="absolute z-10 hidden w-auto rounded-md bg-black p-2 text-center text-white group-hover:block">
                {text}
            </div>
        </div>
    );
};

export default Tooltip;
