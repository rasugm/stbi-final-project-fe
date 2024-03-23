import { forwardRef, LegacyRef } from 'react';
import { FaSpinner } from 'react-icons/fa';

import { cn } from '@/utils/style';

import Icon, { IconProps } from '../Icon';
// import { TAccessAction } from '@/constants/types';

const solid = {
    primary: 'bg-primary-500 text-white hover:bg-primary-100',
    tertiary: 'bg-tertiary-500 text-white',
    error: 'bg-error-500 text-white hover:bg-error-700',
    warning: 'bg-warning-500 text-white hover:bg-warning-700',
    success: 'bg-success-500 text-white hover:bg-success-700',
    info: 'bg-info-500 text-white hover:bg-info-100',
};

const outlined = {
    primary: 'text-primary-500 border-2 border-solid border-primary-500 hover:bg-primary-100',
    tertiary: 'text-tertiary-500 border-2 border-solid border-tertiary-500 hover:bg-tertiary-200',
    error: 'text-error-500 border-2 border-solid border-error-500 hover:bg-error-100 bg-white',
    warning: 'text-warning-500 border-2 border-solid border-warning-500 hover:bg-warning-100 bg-white',
    success: 'text-success-500 border-2 border-solid border-success-500 hover:bg-success-100 bg-white',
    info: 'text-info-500 border-2 border-solid border-info-500 hover:bg-info-100',
};

const clear = {
    primary: 'bg-primary-10 text-primary-500 hover:bg-primary-100',
    tertiary: 'bg-tertiary-50 text-tertiary-500 hover:bg-tertiary-200',
    error: 'text-error-500 hover:bg-error-100',
    warning: 'bg-warning-50 text-warning-500 hover:bg-warning-100',
    success: 'bg-success-50 text-success-500 hover:bg-success-100',
    info: 'bg-info-10 text-info-500 hover:bg-info-100',
};

const soft = {
    primary: 'bg-primary-50 text-primary-500 hover:bg-primary-100',
    tertiary: 'bg-tertiary-50 text-tertiary-500',
    error: 'bg-error-50 text-error-500 hover:bg-error-100',
    warning: 'bg-warning-50 text-warning-500 hover:bg-warning-100',
    success: 'bg-success-50 text-success-500 hover:bg-success-100',
    info: 'bg-info-50 text-info-500 hover:bg-info-100',
};

const Sizes = {
    xs: 'min-w-[80px]',
    sm: 'min-w-[100px]',
    lg: 'min-w-[120px]',
};

export interface ButtonProps extends React.HTMLAttributes<HTMLAnchorElement | HTMLButtonElement> {
    block?: boolean;
    color?: keyof typeof solid;
    disabled?: boolean;
    href?: string | undefined;
    icon?: IconProps | undefined;
    isLoading?: boolean;
    size?: keyof typeof Sizes;
    target?: string;
    type?: 'button' | 'reset' | 'submit' | undefined;
    variant?: 'outlined' | 'soft' | 'solid' | 'clear';
    rounded?: string;
    // action?: TAccessAction | TAccessAction[];
}

const Button = forwardRef(
    (
        {
            children,
            size,
            color = 'primary',
            variant,
            type,
            target,
            disabled,
            block,
            isLoading,
            icon,
            href,
            className,
            // action,
            // rounded,
            ...props
        }: ButtonProps,
        ref: LegacyRef<HTMLButtonElement> | undefined
    ) => {
        // const { canRead, canCreate, canDelete, canUpdate, canApprove } = useCanAccess();
        // const calculate = () => {
        //     if (!action) return undefined;
        //     const listAction = [
        //         canRead && 'read',
        //         canCreate && 'create',
        //         canDelete && 'delete',
        //         canUpdate && 'update',
        //         canApprove && 'approve',
        //     ];
        //     if (typeof action === 'string') {
        //         return listAction.includes(action);
        //     }
        //     return action.every((act) => listAction.includes(act));
        // };
        // if (calculate() === false) return null;

        const ButtonType = () => {
            if (disabled) {
                return soft['tertiary'];
            }

            if (variant === 'outlined') {
                return outlined[color];
            }

            if (variant === 'soft') {
                return soft[color];
            }

            if (variant === 'clear') {
                return clear[color];
            }
            return solid[color];
        };

        const classes = [
            `py-2.5 px-3 rounded-md body-small font-secondary text-base`,
            ButtonType(),
            size && Sizes[size],
            block && 'w-full',
            isLoading && 'cursor-not-allowed',
            className,
        ]
            .join(' ')
            .replace(/\s+/g, ' ');

        if (href) {
            return (
                <a className={cn('text-center', classes)} href={href} target={target} {...props}>
                    {children}
                </a>
            );
        }

        return (
            <button className={classes} disabled={disabled} ref={ref} type={type} {...props}>
                <div className="flex w-full items-center justify-center text-center">
                    {icon && <Icon className="mr-2 font-bold" size={16} {...icon} />}
                    {children}
                    {isLoading && <FaSpinner className="animate-spin ml-2 text-2xl" />}
                </div>
            </button>
        );
    }
);

Button.defaultProps = {
    rounded: '5px',
};

export default Button;
