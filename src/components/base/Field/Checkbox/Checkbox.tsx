import { cn } from '@/utils/className';
import { VariantProps, cva } from 'class-variance-authority';
import clsx from 'clsx';
import React, { useId } from 'react';

const checkboxStyle = cva('', {
    variants: {
        sizeBox: {
            sm: '!min-w-[10px] !min-h-[10px] !w-[15px] !h-[15px]',
            base: '!min-w-[24px] !max-h-[24px]',
        },
    },
    defaultVariants: {
        sizeBox: 'base',
    },
});

type CheckboxStyleProps = VariantProps<typeof checkboxStyle>;

interface Props
    extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'type'>,
        CheckboxStyleProps {
    label?: string;
    variant?: 'checkmark' | 'minmark';
}

const Checkbox = React.forwardRef<HTMLInputElement, Props>(function Component(props, ref) {
    const { label, variant, sizeBox, ...rest } = props;
    const id = useId();
    return (
        <div className="flex items-center gap-2 checkbox">
            <input
                {...rest}
                className={clsx('checkbox__input', {
                    'checkbox__input--min': variant === 'minmark',
                })}
                id={id || label}
                ref={ref}
                type="checkbox"
            />
            <label className={cn('checkmark', checkboxStyle({ sizeBox }))} htmlFor={id || label} />
            {label && (
                <label
                    className={clsx('text-sm mt-[2px]', rest.disabled ? 'text-[#9AA4B2]' : 'text-[#202939]')}
                    htmlFor={label}
                >
                    {label}
                </label>
            )}
        </div>
    );
});

Checkbox.defaultProps = {
    label: undefined,
    variant: 'checkmark',
};

export default Checkbox;
