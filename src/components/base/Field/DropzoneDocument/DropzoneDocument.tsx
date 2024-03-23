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
    status?: boolean;
}
const DropzoneDocument = React.forwardRef<HTMLInputElement, Props>(function Component(props, ref) {
    const { textButton, description, label, status, ...rest } = props;

    const labelDrozone = (
        <Label className={cn('mb-1 block')} id={rest?.id || rest?.name} required={rest.required}>
            {label}
        </Label>
    );
    return (
        <div>
            {label && labelDrozone}
            <div className="flex gap-[30px]">
                <div>
                    <Dropzone
                        {...rest}
                        onChange={(file) => {
                            rest?.onChange?.(file);
                        }}
                        ref={ref}
                    >
                        <Button
                            variant="clear"
                            color={status ? 'primary' : 'error'}
                            type="button"
                            disabled={rest.disabled}
                            className="font-normal"
                            rounded="12px"
                        >
                            {textButton}
                            <Icon className={`${status ? 'text-primary-500' : 'text-error-500'} ml-2`} name="uploadFile" size={20} />
                        </Button>
                    </Dropzone>
                    <div className="text-tertiary-600 text-xs mt-2 font-normal leading-[18px]">{description}</div>
                </div>
            </div>
        </div>
    );
});

DropzoneDocument.defaultProps = {
    defaultPreview: undefined,
    description: 'The acceptable format are jpg, jpeg or png with maximum upload size 5MB.',
    textButton: 'Upload File',
    status: false,
};
export default DropzoneDocument;
