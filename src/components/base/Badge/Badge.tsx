import { cn } from '@/utils/className';
import { cva, VariantProps } from 'class-variance-authority';
import { ReactNode } from 'react';

const headingStyles = cva('text-center w-auto inline font-medium', {
    variants: {
        color: {
            primary: 'text-primary-500 bg-primary-50',
            success: 'text-success-500 bg-success-50',
            secondary: 'text-gray-500 bg-gray-100',
            info: 'bg-info-50 text-info-500',
            error: 'bg-error-50 text-error-500',
            warning: 'bg-warning-50 text-warning-500',
            tertiary: 'bg-tertiary-50 text-tertiary-600',
            black: 'bg-black text-white',
        },
        size: {
            xs: 'text-xs px-2 py-1 font-semibold',
            sm: 'text-sm px-3 py-1 font-semibold',
            base: 'text-base px-3 py-1 font-semibold',
            md: 'text-md px-2 py-1 font-semibold',
            lg: 'text-lg px-3 py-1 font-semibold',
            xl: 'text-xl px-4 py-1 font-semibold',
        },
        rounded: {
            full: 'rounded-full',
            none: 'rounded-none',
        },
    },
    defaultVariants: {
        color: 'black',
        size: 'base',
        rounded: 'full',
    },
});

type HeadingStylesProps = VariantProps<typeof headingStyles>;

export interface TextProps extends Omit<HeadingStylesProps, 'size' | 'weight'> {
    children: ReactNode;
    className?: string;
    wrapperClassName?: string;
    color?: NonNullable<HeadingStylesProps['color']>;
    onClick?: () => void;
    rounded?: NonNullable<HeadingStylesProps['rounded']>;
    size?: NonNullable<HeadingStylesProps['size']>;
}

const Badge = ({ size, color, children, wrapperClassName, className, rounded, ...rest }: TextProps) => {
    return (
        <div className={wrapperClassName}>
            <div className={cn(headingStyles({ size, color, rounded }), className)} {...rest}>
                {children}
            </div>
        </div>
    );
};

export default Badge;
Badge.defaultProps = {
    className: '',
    onClick: undefined,
    size: 'base',
    color: 'black',
    rounded: 'full',
};
