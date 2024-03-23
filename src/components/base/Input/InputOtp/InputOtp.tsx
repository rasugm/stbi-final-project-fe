import { useState } from 'react';
import SingleOtp from './SingleOtp';
import { cn } from '@/utils/className';

const BACKSPACE = 8;
const LEFT_ARROW = 37;
const RIGHT_ARROW = 39;
const DELETE = 46;
const SPACEBAR = 32;

interface OtpInputsProps {
    className?: string;
    'data-cy'?: string;
    'data-testid'?: string;
    disabled?: boolean;
    inputClassName?: string;
    isError?: boolean;
    isInputNum?: boolean;
    isInputSecure?: boolean;
    numInputs?: number;
    onSubmit: (otp: string) => void;
    onChange: (otp: string) => void;
    placeholder?: string;
    shouldAutoFocus?: boolean;
    value?: string;
}

const InputOtp = (props: OtpInputsProps) => {
    const {
        disabled,
        isInputNum,
        isInputSecure,
        numInputs,
        onSubmit,
        onChange,
        placeholder,
        shouldAutoFocus,
        value: valueProps,
        className,
        inputClassName,
        isError,
    } = props;
    const [activeInput, setActiveInput] = useState(shouldAutoFocus ? 0 : -1);

    const getOtpValue = () => (valueProps ? valueProps.toString().split('') : []);

    const handleOtpChange = (otp: string[]) => {
        const otpValue = otp.join('');
        
        if(otpValue.length === 6){
            onSubmit(otpValue);
        }
        onChange(otpValue);
    };

    const isInputValueValid = (value: string) => {
        const isTypeValid = isInputNum ? !isNaN(parseInt(value, 10)) : typeof value === 'string';

        return isTypeValid && value.trim().length === 1;
    };

    const focusInput = (input: number) => {
        const active = numInputs ? Math.max(Math.min(numInputs - 1, input), 0) : 0;

        setActiveInput(active);
    };

    // Focus on next input
    const focusNextInput = () => {
        focusInput(activeInput + 1);
    };

    const focusPrevInput = () => {
        focusInput(activeInput - 1);
    };

    // Change OTP value at focused input
    const changeCodeAtFocus = (value: string) => {
        const otp = getOtpValue();
        otp[activeInput] = value[0];
        handleOtpChange(otp);
    };

    const handleOnPaste = (e: any) => {
        e.preventDefault();

        if (disabled) {
            return;
        }

        const otp = getOtpValue();
        let nextActiveInput = activeInput;

        // Get pastedData in an array of max size (num of inputs - current position)
        const pastedData = e.clipboardData
            .getData('text/plain')
            .slice(0, numInputs! - activeInput)
            .split('');

        // Paste data from focused input onwards
        for (let pos = 0; pos < numInputs!; ++pos) {
            if (pos >= activeInput && pastedData.length > 0) {
                otp[pos] = pastedData.shift();
                nextActiveInput++;
            }
        }
        if (otp.some((char) => !isInputValueValid(char))) return;

        setActiveInput(nextActiveInput);
        focusInput(nextActiveInput);
        handleOtpChange(otp);
    };

    const handleOnChange = (e: any) => {
        const { value } = e.target;

        if (isInputValueValid(value)) {
            changeCodeAtFocus(value);
        }
    };

    // Handle cases of backspace, delete, left arrow, right arrow, space
    const handleOnKeyDown = (e: any) => {
        if (e.keyCode === BACKSPACE || e.key === 'Backspace') {
            e.preventDefault();
            changeCodeAtFocus('');
            focusPrevInput();
        } else if (e.keyCode === DELETE || e.key === 'Delete') {
            e.preventDefault();
            changeCodeAtFocus('');
        } else if (e.keyCode === LEFT_ARROW || e.key === 'ArrowLeft') {
            e.preventDefault();
            focusPrevInput();
        } else if (e.keyCode === RIGHT_ARROW || e.key === 'ArrowRight') {
            e.preventDefault();
            focusNextInput();
        } else if (e.keyCode === SPACEBAR || e.key === ' ' || e.key === 'Spacebar' || e.key === 'Space') {
            e.preventDefault();
        }
    };

    // The content may not have changed, but some input took place hence change the focus
    const handleOnInput = (e: any) => {
        if (isInputValueValid(e.target.value)) {
            focusNextInput();
        } else {
            // This is a workaround for dealing with keyCode "229 Unidentified" on Android.

            if (!isInputNum) {
                const { nativeEvent } = e;

                if (nativeEvent.data === null && nativeEvent.inputType === 'deleteContentBackward') {
                    e.preventDefault();
                    changeCodeAtFocus('');
                    focusPrevInput();
                }
            }
        }
    };
    const renderInput = () => {
        return Array(numInputs || 0)
            .fill(null)
            .map((_, i) => {
                return (
                    <SingleOtp
                        className={inputClassName}
                        data-cy={props?.['data-cy'] && `${props['data-cy']}-${i}`}
                        data-testid={props['data-testid'] && `${props['data-testid']}-${i}`}
                        disabled={disabled}
                        focus={activeInput === i}
                        index={i}
                        isError={isError}
                        isInputNum={isInputNum}
                        isInputSecure={isInputSecure}
                        key={i}
                        onBlur={() => setActiveInput(-1)}
                        onChange={handleOnChange}
                        onFocus={(e) => {
                            setActiveInput(i);
                            e.target.select();
                        }}
                        onInput={handleOnInput}
                        onKeyDown={handleOnKeyDown}
                        onPaste={handleOnPaste}
                        placeholder={placeholder && placeholder?.[i]}
                        value={getOtpValue() && getOtpValue()[i]}
                    />
                );
            });
    };
    return <div className={cn('w-full gap-2 flex justify-center', className)}>{renderInput()}</div>;
};

InputOtp.defaultProps = {
    'data-cy': undefined,
    'data-testid': undefined,
    className: '',
    disabled: false,
    inputClassName: '',
    isError: false,
    isInputNum: false,
    isInputSecure: false,
    numInputs: 4,
    placeholder: undefined,
    shouldAutoFocus: false,
    value: '',
};

export default InputOtp;
