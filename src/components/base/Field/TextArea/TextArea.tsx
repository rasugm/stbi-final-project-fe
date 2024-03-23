import React, { DetailedHTMLProps, TextareaHTMLAttributes, useState } from 'react';
import clsx from 'clsx';
import { Label } from '../../FormBase';
import Icon from '../../Icon';

export interface Props extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
    className?: string;
    isError?: boolean;
    label?: string;
    renderLabel?: () => React.ReactElement;
    showClearIcon?: boolean;
    isOptional?: boolean;
    isRequired?: boolean;
}

const TextArea = React.forwardRef<HTMLTextAreaElement, Props>(function Component(props, ref) {
    const { className, label, renderLabel, showClearIcon, isError, required, isOptional, isRequired, ...rest } = props;
    const [focused, setFocused] = useState(false);

    const handleClearField = () => {
        rest.onChange?.({ target: { value: '' } } as any);
    };

    const renderLabelInput = (
        <div>
            {renderLabel ? (
                renderLabel()
            ) : (
                <Label className="mb-1" id={rest?.id || rest?.name} required={required}>
                    {label} {isRequired && <span className="text-error-500">*</span>}
                </Label>
            )}
        </div>
    );

    return (
        <div className={clsx('w-full flex flex-col gap-2')}>
            <div className="flex justify-between items-center">
                {(label || renderLabel) && renderLabelInput}
                {
                    isOptional && <Label id="optional" className="body-small text-tertiary-50 text-[16px]">Optional</Label>
                }
            </div>
            <div
                className={clsx(
                    'w-full h-full rounded overflow-hidden flex',
                    {
                        'border border-[#9AA4B2]': !rest.disabled,
                        '!border-[#2970FF]': focused,
                        '!border-[#F04438]': isError,

                        'bg-[#FCFCFD]': rest.value,
                        'bg-[#f3f3f8]': rest.disabled,
                    },
                    className
                )}
            >
                <textarea
                    className={clsx(
                        'w-full px-2 py-2 focus:border-primary-500 overflow-hidden outline-none text-sm text-[#202939] placeholder:text-base placeholder:text-[#9AA4B2] bg-transparent',
                        rest.disabled && 'text-[#999999]'
                    )}
                    id={rest?.id || rest.name}
                    rows={3}
                    {...rest}
                    onBlur={(e) => {
                        setFocused(false);
                        rest?.onBlur?.(e);
                    }}
                    onFocus={(e) => {
                        setFocused(true);
                        rest?.onFocus?.(e);
                    }}
                    ref={ref}
                />
                {showClearIcon && (
                    <div className="grid p-2 place-content-center">
                        <Icon
                            name="x"
                            className="cursor-pointer"
                            height="15px"
                            onClick={handleClearField}
                            width="15px"
                        />
                    </div>
                )}
            </div>
        </div>
    );
});

TextArea.defaultProps = {
    className: '',
    isError: false,
    label: '',
    renderLabel: undefined,
    showClearIcon: false,
};

export default TextArea;
