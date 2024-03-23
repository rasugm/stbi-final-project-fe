import { cn } from '@/utils/className';
import { cva, VariantProps } from 'class-variance-authority';
import { ReactNode } from 'react';

const headingStyles = cva('text-gray-800', {
    variants: {
        size: {
            xs: 'text-xs',
            sm: 'text-sm',
            base: 'text-base',
            md: 'text-md',
            lg: 'text-lg',
            xl: 'text-xl',
            '2xl': 'text-2xl',
            '3xl': 'text-3xl',
            '4xl': 'text-4xl',
        },
        as: {
            h1: 'text-4xl',
            h2: 'text-3xl',
            h3: 'text-2xl',
            h4: 'text-xl',
            h5: 'text-lg',
            h6: 'text-md',
        },
        weight: {
            light: 'font-light',
            normal: 'font-normal',
            medium: 'font-medium',
            semibold: 'font-semibold',
            bold: 'font-bold',
        },
    },
    defaultVariants: {
        weight: 'bold',
    },
});

type HeadingStylesProps = VariantProps<typeof headingStyles>;

export interface TextProps extends Omit<HeadingStylesProps, 'size' | 'weight'> {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    children: ReactNode;
    className?: string;
    onClick?: () => void;
    size?: NonNullable<HeadingStylesProps['size']>;
    weight?: NonNullable<HeadingStylesProps['weight']>;
}

const Heading = ({ size, weight, children, className, as = 'h2', ...rest }: TextProps) => {
    const Component = as;
    return (
        <Component className={cn(headingStyles({ weight, as }), headingStyles({ size }), className)} {...rest}>
            {children}
        </Component>
    );
};

export default Heading;
Heading.defaultProps = {
    className: '',
    onClick: undefined,
    size: undefined,
    weight: 'bold',
    as: 'h2',
};
