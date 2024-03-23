import { cn } from '@/utils/className';
import { cva, VariantProps } from 'class-variance-authority';
import { ReactNode } from 'react';

const textStyles = cva('text-gray-800', {
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
        weight: {
            light: 'font-light',
            normal: 'font-normal',
            medium: 'font-medium',
            semibold: 'font-semibold',
            bold: 'font-bold',
        },
    },
    defaultVariants: {
        size: 'base',
        weight: 'normal',
    },
});

type TextStylesProps = VariantProps<typeof textStyles>;

export interface TextProps extends Omit<TextStylesProps, 'size' | 'weight'> {
    as?:
        'abbr' | 'b' | 'cite' | 'del' | 'div' | 'em' | 'i' | 'ins' | 'kbd' | 'mark' | 'p' | 's' | 'samp' | 'span' | 'sub' | 'sup' | 'u';
    children: ReactNode;
    className?: string;
    onClick?: () => void;
    size?: NonNullable<TextStylesProps['size']>;
    weight?: NonNullable<TextStylesProps['weight']>;
}

const Text = ({ size, weight, children, className, as = 'p', ...rest }: TextProps) => {
    const Component = as;
    return (
        <Component className={cn(textStyles({ size, weight }), className)} {...rest}>
            {children}
        </Component>
    );
};

export default Text;
Text.defaultProps = {
    className: '',
    onClick: undefined,
    size: 'base',
    weight: 'normal',
    as: 'p',
};
