import { cn } from '@/utils/className';
import React from 'react';
import Icon from '../Icon';
import { IconType } from '@/configs/Icons';

type Props = {
    children: React.ReactNode;
    color: 'primary' | 'info' | 'warning' | 'error' | 'success';
    className?: string;
    classNameChildren?: string;
    withIcon?: boolean;
    icon?: IconType;
};

const Alert = ({ children, color, className, classNameChildren, withIcon = true, icon }: Props) => {
    const getIcon = (): IconType => {
        switch (color) {
        case 'info':
            return 'info';
        case 'error':
            return 'warning';
        case 'warning':
            return 'warning';
        case 'success':
            return 'check';
        default:
            return icon ?? 'box';
        }
    };
    return (
        <div
            className={cn(
                'w-full rounded-lg p-5 text-gray-500',
                color === 'info' && 'bg-info-100/60 text-info-500',
                color === 'success' && 'bg-green-100/60 text-success-500',
                color === 'error' && 'bg-red-100/60 text-red-500',
                color === 'warning' && 'bg-orange-100/60 text-warning-500',
                className
            )}
        >
            <div className="flex items-center gap-2">
                {withIcon && <Icon size={20} name={getIcon()} />}
                <div className={cn('text-sm font-medium', classNameChildren)}>{children}</div>
            </div>
        </div>
    );
};

export default Alert;
