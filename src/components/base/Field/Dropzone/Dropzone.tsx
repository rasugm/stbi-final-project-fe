import { TDataUnit } from '@/constants/types';
import useMergedRefs from '@/hooks/useMergeRefs';
import { cn } from '@/utils/className';
import { fileSize } from '@/utils/common';
import { validateFileSize, validateFileType } from '@/utils/validation';
import React, { useState } from 'react';
import { PiTrashBold } from 'react-icons/pi';
import { Label } from '../../FormBase';
import Icon from '../../Icon';
import Toast from '../../Toast/Toast';

type EventDrag = React.DragEvent<HTMLDivElement>;
type EventChange = React.ChangeEvent<HTMLInputElement>;
type ParamChildren = {
    errorValidate?: string;
    file?: File | string;
    isError?: boolean;
    onRemove: (e: any) => void;
    overingArea?: boolean;
};

interface Props extends Omit<React.ComponentProps<'input'>, 'children' | 'className' | 'onChange' | 'value'> {
    children?: React.ReactNode | ((param: ParamChildren) => React.ReactNode);
    description?: string;
    dropTestId?: string;
    fileTypes?: string[]; //Look at https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept
    forceReuploadSameFile?: boolean; //https://github.com/ngokevin/react-file-reader-input/issues/11
    inputTestId?: string;
    isError?: boolean;
    label?: string;
    maxSize?: { size: number; unit: TDataUnit };
    messageError?: { fileSize?: string; fileType?: string };
    onChange?: (file?: File) => void;
    required?: boolean;
    showToastError?: boolean;
    textButton?: string;
    title?: string;
    topHelperText?: string;
    value?: File | string;
}

const Dropzone = React.forwardRef<HTMLInputElement, Props>(function Component(props, ref) {
    const {
        fileTypes,
        label,
        topHelperText,
        textButton,
        dropTestId,
        inputTestId,
        maxSize,
        children,
        required,
        isError,
        onChange,
        value,
        description,
        title,
        forceReuploadSameFile,
        messageError,
        showToastError,
        ...rest
    } = props;
    const inputRef = React.createRef<HTMLInputElement>();
    const mergedRef = useMergedRefs([inputRef, ref]);
    const [errorValidate, setErrorValidate] = useState('');
    const [overingArea, setOveringArea] = useState(false);

    const handleClickArea = () => {
        inputRef.current?.click();
    };

    const handleDragOver = (e: EventDrag) => {
        e.preventDefault();
        if (!overingArea) {
            setOveringArea(true);
        }
    };

    const handleDragEnter = (e: EventDrag) => {
        e.preventDefault();
    };

    const handleDragLeave = (e: EventDrag) => {
        e.preventDefault();
        if (overingArea) {
            setOveringArea(false);
        }
    };

    const handleDrop = (e: EventDrag) => {
        e.preventDefault();
        if (overingArea) {
            setOveringArea(false);
        }
        const file = e.dataTransfer.files;
        setErrorValidate('');
        if (!validateType(file[0])) {
            onChange?.(undefined);
            resetIntrinsicValue();
            setErrorValidate(messageError?.fileType || 'Format file tidak sesuai');
            showToastError && Toast({ type: 'error', title: messageError?.fileType || 'Format file tidak sesuai' });
        } else if (!validateSize(file[0])) {
            onChange?.(undefined);
            resetIntrinsicValue();
            setErrorValidate(messageError?.fileSize || 'Ukuran file terlalu besar');
            showToastError && Toast({ type: 'error', title: messageError?.fileSize || 'Ukuran file terlalu besar' });
        } else {
            onChange?.(file[0]);
            forceReuploadSameFile && resetIntrinsicValue();
        }
    };

    const handleChangeFile = (e: EventChange) => {
        const file = e.target.files;
        setErrorValidate('');
        if (file && file.length) {
            if (!validateType(file[0])) {
                onChange?.(undefined);
                resetIntrinsicValue();
                setErrorValidate(messageError?.fileType || 'Format file tidak sesuai');
                showToastError && Toast({ type: 'error', title: messageError?.fileType || 'Format file tidak sesuai' });
            } else if (!validateSize(file[0])) {
                onChange?.(undefined);
                resetIntrinsicValue();
                setErrorValidate(messageError?.fileSize || 'Ukuran file terlalu besar');
                showToastError &&
                    Toast({ type: 'error', title: messageError?.fileSize || 'Ukuran file terlalu besar' });
            } else {
                onChange?.(file[0]);
                forceReuploadSameFile && resetIntrinsicValue();
            }
        }
    };

    const handleRemoveFile = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation();
        setErrorValidate('');
        resetIntrinsicValue();
        onChange?.(undefined);
    };

    const resetIntrinsicValue = () => {
        if (inputRef.current) {
            inputRef.current.value = '';
        }
    };

    const validateType = (file?: File | null) => {
        if (fileTypes?.length === 0) {
            return true;
        }
        if (!file) return false;
        return validateFileType(fileTypes || [], file);
    };

    const validateSize = (file?: File | null) => {
        let isValid = true;
        if (maxSize?.size && maxSize?.unit && file?.size) {
            isValid = validateFileSize(file.size, maxSize);
        }
        return isValid;
    };

    const renderLabel = () => (
        <div className="flex flex-col gap-1 mb-1">
            {label && (
                <Label id={props?.id || props?.name} required={required}>
                    {label}
                </Label>
            )}
            {topHelperText && <span className="text-xs text-[#697586]">{topHelperText}</span>}
        </div>
    );

    const content = (
        <div className="flex gap-4 items-center w-full flex-wrap">
            <div
                className={cn('p-2 rounded-full grid place-content-center bg-info-100 text-info-500', {
                    'text-tertiary-400 bg-[#E2E5E8]': rest.disabled,
                    'text-error-500 bg-error-100': isError,
                })}
            >
                <Icon name="CloudBackUpIcon" className="min-h-[24px] min-w-[24px]" />
            </div>
            <div className="mr-auto">
                <h6 className="text-sm font-bold font-nunito text-tertiary-800">
                    {value ? (typeof value === 'string' ? value : value.name) : title}
                </h6>
                <p className="text-xs font-nunito text-tertiary-400">
                    {value instanceof File ? fileSize(value.size) : description}
                </p>
            </div>
            <button
                className={cn(
                    'px-3 py-2 border border-error-500 rounded-xl text-base text-error-500 font-bold font-nunito hover:border-error-600 hover:text-error-600',
                    rest.disabled && 'cursor-not-allowed',
                    'disabled:border-tertiary-500 disabled:text-tertiary-500 disabled:hover:border-tertiary-500 disabled:hover:text-tertiary-500',
                    value && 'border-none bg-transparent p-0 text-tertiary-800'
                )}
                disabled={rest.disabled}
                onClick={value ? handleRemoveFile : undefined}
                type="button"
            >
                {value ? <PiTrashBold size={20} /> : textButton}
            </button>
        </div>
    );

    const events = {
        onClick: handleClickArea,
        onDragEnter: handleDragEnter,
        onDragLeave: handleDragLeave,
        onDragOver: handleDragOver,
        onDrop: handleDrop,
    };

    return (
        <div className="w-full">
            {(label || topHelperText) && renderLabel()}
            <div
                className={cn('cursor-pointer w-full select-none', rest.disabled && 'cursor-not-allowed')}
                data-testid={dropTestId}
                {...events}
            >
                {children ? (
                    typeof children === 'function' ? (
                        children({
                            onRemove: handleRemoveFile as any,
                            file: value as File | string,
                            overingArea,
                            isError,
                            errorValidate,
                        })
                    ) : (
                        children
                    )
                ) : (
                    <div
                        className={cn(
                            'w-full border border-dashed rounded-xl flex items-center select-none p-4',
                            'border-[#D0D5DD] bg-[#F9FAFB]',
                            {
                                'border-[#cacfd4] bg-[#FAFBFB]': rest.disabled,
                                'border-error-500 bg-error-50': isError,
                                'border-solid': value || rest.disabled || isError,
                                'border-green-500 border bg-green-50': overingArea,
                            }
                        )}
                    >
                        {content}
                    </div>
                )}
            </div>

            <input
                accept={fileTypes?.join(',')}
                className="hidden"
                {...rest}
                data-testid={inputTestId}
                id={rest?.id || rest.name}
                multiple={false}
                onChange={handleChangeFile}
                ref={mergedRef}
                type="file"
            />
        </div>
    );
});

Dropzone.defaultProps = {
    children: undefined,
    description: '',
    dropTestId: 'x',
    fileTypes: [
        'application/pdf',
        'application/vnd.ms-excel',
        'image/apng',
        'image/bmp',
        'image/gif',
        'image/jpeg',
        'image/pjpeg',
        'image/png',
        'image/svg+xml',
        'image/tiff',
        'image/webp',
        'image/x-icon',
    ],
    forceReuploadSameFile: false,
    inputTestId: undefined,
    isError: false,
    label: '',
    maxSize: undefined,
    messageError: { fileType: 'Format file tidak sesuai', fileSize: 'Ukuran file terlalu besar' },
    onChange: undefined,
    textButton: 'Pilih Dokumen',
    title: 'Pilih atau seret dokumen disini',
    topHelperText: '',
    required: false,
    showToastError: true,
    value: undefined,
};

export default Dropzone;
