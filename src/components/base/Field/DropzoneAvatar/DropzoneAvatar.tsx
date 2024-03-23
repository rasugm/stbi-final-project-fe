import Dropzone from '../Dropzone';
import React from 'react';
import { cn } from '@/utils/className';
import { Label } from '../../FormBase';
import Icon from '../../Icon';
import { FaSpinner } from 'react-icons/fa';

type DropzoneProps = Pick<
    React.ComponentProps<typeof Dropzone>,
    | 'disabled'
    | 'dropTestId'
    | 'fileTypes'
    | 'forceReuploadSameFile'
    | 'id'
    | 'inputTestId'
    | 'isError'
    | 'label'
    | 'maxSize'
    | 'messageError'
    | 'name'
    | 'onChange'
    | 'required'
    | 'showToastError'
    | 'value'
>;

interface Props extends DropzoneProps {
    defaultPreview?: string; //url image | asset of image
    description?: string;
    textButton?: string;
    isLoading?: boolean;
}
const DropzoneAvatar = React.forwardRef<HTMLInputElement, Props>(function Component(props, ref) {
    const { textButton, description, label, defaultPreview, isLoading, ...rest } = props;

    const labelDrozone = (
        <Label className={cn('mb-1 block')} id={rest?.id || rest?.name} required={rest.required}>
            {label}
        </Label>
    );
    return (
        <div>
            {label && labelDrozone}
            <div className="flex flex-col items-center justify-center relative">
                <div className="w-[130px] h-[130px] rounded-full bg-tertiary-300 overflow-hidden">
                    {(rest?.value || defaultPreview) && (
                        <img
                            alt="avatar"
                            className="w-full h-full object-cover"
                            src={
                                rest.value instanceof Blob
                                    ? URL.createObjectURL(rest.value)
                                    : rest.value || defaultPreview
                            }
                        />
                    )}
                </div>
                <div>
                    <Dropzone
                        {...rest}
                        onChange={(file) => {
                            rest?.onChange?.(file);
                        }}
                        ref={ref}
                    >
                        <button
                            type="button"
                            disabled={rest.disabled}
                            className={`rounded-full absolute bottom-0 right-14 bg-primary-500 p-1 ${isLoading && 'cursor-not-allowed'}`}
                        >
                            {!isLoading
                                ? (<Icon className={cn(`text-white`, textButton ? ' mr-1' : '')} name="camera" size={14} />)
                                : <FaSpinner className={cn(`text-white animate-spin`, textButton ? ' mr-1' : '')} size={14}/>}

                            {textButton}
                        </button>
                    </Dropzone>
                    <div className="text-tertiary-600 text-xs mt-2 font-normal leading-[18px]">{description}</div>
                </div>
            </div>
        </div>
    );
});

DropzoneAvatar.defaultProps = {
    defaultPreview: undefined,
    description: 'The acceptable format are jpg, jpeg or png with maximum upload size 5MB.',
    textButton: 'Upload Logo',
    isLoading: false
};
export default DropzoneAvatar;
