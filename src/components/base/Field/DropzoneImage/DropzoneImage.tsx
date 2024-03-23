import Button from '../../Button';
import Dropzone from '../Dropzone';
import React from 'react';
import { cn } from '@/utils/className';
import { Label } from '../../FormBase';
import Icon from '../../Icon';

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
}
const DropzoneImage = React.forwardRef<HTMLInputElement, Props>(function Component(props, ref) {
    const { textButton, description, label, defaultPreview, ...rest } = props;

    const labelDrozone = (
        <Label className={cn('mb-1 block')} id={rest?.id || rest?.name} required={rest.required}>
            {label}
        </Label>
    );
    return (
        <div>
            {label && labelDrozone}
            <div className="flex gap-[30px]">
                <div className="w-16 h-64 min-w-[64px] min-h-[64px] max-w-[64px] max-h-[64px] rounded-full bg-tertiary-300 overflow-hidden">
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
                        <Button
                            variant="soft"
                            type="button"
                            disabled={rest.disabled}
                        >
                            <Icon className="text-primary-500 mr-1" name="upload" size={20} />
                            {textButton}
                        </Button>
                    </Dropzone>
                    <div className="text-tertiary-600 text-xs mt-2 font-normal leading-[18px]">{description}</div>
                </div>
            </div>
        </div>
    );
});

DropzoneImage.defaultProps = {
    defaultPreview: undefined,
    description: 'The acceptable format are jpg, jpeg or png with maximum upload size 5MB.',
    textButton: 'Upload Logo',
};
export default DropzoneImage;
