import { toRupiah } from '@/utils/common';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { Label } from '../../FormBase';
import Icon, { IconProps } from '../../Icon';
import { FaSpinner } from 'react-icons/fa';
import ContextMenu from '../../ContextMenu';

export interface Props extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    caption?: string;
    className?: string;
    classNameLabel?: string;
    confirmChangeTypeInput?: (param: any) => void;
    customHideEye?: () => void;
    endAdornment?: React.ReactElement | string;
    isCurrency?: boolean;
    isError?: boolean;
    label?: string;
    subLabel?: string;
    renderLabel?: () => React.ReactElement;
    showClearIcon?: boolean;
    startAdornment?: React.ReactElement | string;
    triggerHideEye?: number;
    isBorderLess?: boolean;
    iconLeft?: IconProps | undefined;
    iconRight?: IconProps | undefined;
    isOptional?: boolean;
    isDefaultRounded?: boolean;
    isLoading?: boolean;
    height?: string | number;
    tooltipText?: string;
}

const TextField = React.forwardRef<HTMLInputElement, Props>(function Component(props, ref) {
    const {
        tooltipText,
        endAdornment,
        startAdornment,
        isLoading,
        label,
        renderLabel,
        showClearIcon,
        className,
        caption,
        confirmChangeTypeInput,
        triggerHideEye,
        customHideEye,
        isError,
        isCurrency,
        isBorderLess,
        required,
        iconRight,
        iconLeft,
        isOptional,
        classNameLabel,
        isDefaultRounded,
        height,
        subLabel,
        ...rest
    } = props;
    const [focused, setFocused] = useState(false);
    const [isSecure, setSecured] = useState(rest.type === 'password');

    const isSecureInput = () => {
        if (rest.type === 'password') {
            return isSecure ? 'password' : 'text';
        } else {
            return rest.type;
        }
    };

    useEffect(() => {
        if (triggerHideEye && triggerHideEye > 0) {
            setSecured(true);
        }
    }, [triggerHideEye]);

    const handleClearField = () => {
        rest.onChange?.({ target: { value: '' } } as any);
    };

    const renderLabelInput = (
        <div>
            {renderLabel ? (
                renderLabel()
            ) : (
                <div className="flex justify-between items-center">
                    <div className="flex items-center mb-1 gap-1">
                        <Label
                            id={rest?.id || rest?.name}
                            required={required}
                            className={clsx('block !mb-0', classNameLabel)}
                        >
                            {label}
                        </Label>
                        {tooltipText && (
                            <ContextMenu
                                trigger="hover"
                                placement="top"
                                content={() => <div className="p-2 text-xs max-w-[200px]">{tooltipText}</div>}
                            >
                                <Icon name="info" className="text-gray-500" />
                            </ContextMenu>
                        )}
                    </div>
                    {isOptional && (
                        <Label id="optional" className="body-small text-tertiary-50 text-[16px]">
                            Optional
                        </Label>
                    )}
                </div>
            )}
        </div>
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (isCurrency || rest.type === 'tel') {
            const value = e.target.value;
            const numericValue = value.replace(/[^0-9]/g, '');
            const formattedValue = isCurrency ? toRupiah(Number(numericValue), '') : numericValue;
            return rest?.onChange?.({ ...e, target: { ...e.target, value: formattedValue } });
        }
        return rest?.onChange?.(e);
    };

    return (
        <div className={clsx('w-full')}>
            {(label || renderLabel) && renderLabelInput}
            {subLabel ? <div className="text-gray-500 relative bottom-1 opacity-70 text-sm">{subLabel}</div> : null}
            <div
                className={clsx(
                    className,
                    `w-full h-[${height ?? '40px'}] relative overflow-hidden flex`,
                    {
                        'border-none': isBorderLess,
                        'border border-tertiary-300': !rest.disabled,
                        '!border-[#2970FF]': focused,
                        '!border-[#F04438]': isError,
                        'bg-[#f3f3f8]': rest.disabled,
                    },
                    isDefaultRounded ? 'rounded' : ''
                )}
            >
                {startAdornment &&
                    (typeof startAdornment === 'string' ? (
                        <div className="grid place-content-center bg-[#F8FAFC] text-[#202939] text-sm border-r border-tertiary-300 p-2">
                            {startAdornment}
                        </div>
                    ) : (
                        startAdornment
                    ))}
                {iconLeft && (
                    <div className="grid place-content-center p-2">
                        <Icon className="" {...iconLeft} />
                    </div>
                )}

                <input
                    className={clsx(
                        'w-full px-2 focus:border-[#2970FF] overflow-hidden outline-none text-base text-[#202939] placeholder:text-base placeholder:text-[#9AA4B2] bg-transparent',
                        rest.disabled && 'text-[#999999]'
                    )}
                    {...rest}
                    id={rest?.id || rest.name}
                    onBlur={(e) => {
                        setFocused(false);
                        rest?.onBlur?.(e);
                    }}
                    onChange={handleChange}
                    onFocus={(e) => {
                        setFocused(true);
                        rest?.onFocus?.(e);
                    }}
                    ref={ref}
                    type={isSecureInput()}
                />

                {isLoading ? <FaSpinner className="animate-spin mt-[10px] mr-[10px] text-2xl" /> : <></>}
                {rest.type === 'password' && (
                    <div
                        className="grid mx-2 my-auto cursor-pointer place-content-center"
                        onClick={() => {
                            if (confirmChangeTypeInput && isSecure) {
                                confirmChangeTypeInput(() => setSecured(!isSecure));
                                return;
                            }
                            if (customHideEye && !isSecure) {
                                customHideEye();
                            }
                            setSecured(!isSecure);
                        }}
                    >
                        {isSecure ? <Icon name="eye" /> : <Icon name="eye-off" />}
                    </div>
                )}
                {showClearIcon && (
                    <div className="grid p-1 place-content-center">
                        <Icon
                            name="x"
                            className="cursor-pointer"
                            height="15px"
                            onClick={handleClearField}
                            width="15px"
                        />
                    </div>
                )}

                {iconRight && (
                    <div className="grid place-content-center p-2">
                        <Icon className="" {...iconRight} />
                    </div>
                )}

                {endAdornment &&
                    (typeof endAdornment === 'string' ? (
                        <div className="grid place-content-center bg-[#F8FAFC] text-[#202939] text-sm border-l border-tertiary-300 p-2">
                            {endAdornment}
                        </div>
                    ) : (
                        endAdornment
                    ))}
            </div>
            {caption && (
                <div className="flex items-start mt-1 font-sans text-xs font-normal text-gray-800 gap-x-2">
                    <span>{caption}</span>
                </div>
            )}
        </div>
    );
});

TextField.defaultProps = {
    caption: undefined,
    className: '',
    confirmChangeTypeInput: undefined,
    customHideEye: undefined,
    endAdornment: undefined,
    isError: false,
    isBorderLess: false,
    label: '',
    renderLabel: undefined,
    showClearIcon: false,
    startAdornment: undefined,
    triggerHideEye: 0,
    isOptional: false,
    isDefaultRounded: true,
};
export default TextField;
