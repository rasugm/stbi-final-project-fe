import { forwardRef } from 'react';
import { TextField } from '..';
import Text from '../../Text/Text';
import Dropzone from '../Dropzone';
import { cn } from '@/utils/className';

type TextFieldProps = Omit<React.ComponentProps<typeof TextField>, 'onChange' | 'value'>;
type DropzoneProps = Pick<
    React.ComponentProps<typeof Dropzone>,
    | 'dropTestId'
    | 'fileTypes'
    | 'forceReuploadSameFile'
    | 'inputTestId'
    | 'maxSize'
    | 'messageError'
    | 'onChange'
    | 'showToastError'
    | 'value'
>;

type TextFieldFileProps = DropzoneProps &
    TextFieldProps & {
        renderBrowse?: () => React.ReactElement;
        textButton?: string;
        suffixWidth?: string;
    };

const TextFieldFile = forwardRef<HTMLInputElement, TextFieldFileProps>(function Component(props, ref) {
    const {
        renderBrowse,
        dropTestId,
        fileTypes,
        inputTestId,
        label,
        maxSize,
        onChange,
        value,
        forceReuploadSameFile,
        messageError,
        showToastError,
        textButton,
        suffixWidth,
        ...textFieldProps
    } = props;
    const dropzoneProps = {
        dropTestId,
        fileTypes,
        inputTestId,
        label,
        maxSize,
        onChange,
        value,
        forceReuploadSameFile,
        messageError,
        showToastError,
    };

    const renderBrowseComponent = (
        <div>
            {renderBrowse ? (
                renderBrowse()
            ) : (
                <div className="flex items-center cursor-pointer h-full">
                    <div className="h-5 w-[1px] mr-3 bg-gray-200" />
                    <Text weight="bold" size="sm" className="whitespace-nowrap">
                        {textButton}
                    </Text>
                </div>
            )}
        </div>
    );

    return (
        <TextField
            value={typeof dropzoneProps.value === 'string' ? dropzoneProps.value : dropzoneProps.value?.name}
            {...textFieldProps}
            name={textFieldProps?.name}
            type="text"
            endAdornment={
                <div
                    className={cn(
                        'h-full',
                        renderBrowse ? '' : 'mr-2 grid place-content-center',
                        suffixWidth ? suffixWidth : 'w-[100px]'
                    )}
                >
                    <Dropzone {...dropzoneProps} name={textFieldProps.name} ref={ref}>
                        {renderBrowseComponent}
                    </Dropzone>
                </div>
            }
        />
    );
});

export default TextFieldFile;

TextFieldFile.defaultProps = {
    renderBrowse: undefined,
    textButton: 'Browser File',
};
