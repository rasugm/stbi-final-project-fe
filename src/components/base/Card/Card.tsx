import { ReactNode } from 'react';
import { cn } from '@/utils/style';

const Radius = {
    default: 'rounded-[8px]',
    secondary: 'rounded-[8px]',
};

const BgColors = {
    default: 'bg-white',
    secondary: 'bg-tertiary-100 ',
    warning: 'bg-warning-100 border-warning-200',
};

const heightVariants = {
    default: 'h-fit',
    full: 'h-full',
};

interface CardProps {
    bgColor?: keyof typeof BgColors;
    children: ReactNode;
    className?: string;
    height?: keyof typeof heightVariants;
    rounded?: keyof typeof Radius;
    [key: string]: any;
}

const Card = ({
    rounded = 'default',
    children,
    className = '',
    bgColor = 'default',
    height = 'default',
    ...rest
}: CardProps) => {
    return (
        <div
            className={cn('rounded-lg text-sm', BgColors[bgColor], heightVariants[height], className, Radius[rounded])}
            {...rest}
        >
            {children}
        </div>
    );
};

export default Card;
