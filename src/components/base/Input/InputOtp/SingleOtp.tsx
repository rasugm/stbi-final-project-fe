/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { cn } from '@/utils/className';
import useMergedRefs from '@/hooks/useMergeRefs';

type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
interface SingleOtpProps {
    className?: string;
    'data-cy'?: string;
    'data-testid'?: string;
    focus?: boolean;
    index?: number;
    isError?: boolean;
    isInputNum?: boolean;
    isInputSecure?: boolean;
}

const SingleOtp = React.forwardRef<HTMLInputElement, InputProps & SingleOtpProps>(function Component(props, ref) {
    const { focus, index, isInputNum, isInputSecure, isError, ...rest } = props;
    const inputRef = React.createRef<HTMLInputElement>();

    const mergedRef = useMergedRefs([inputRef, ref]);

    useEffect(() => {
        if (inputRef.current && focus) {
            inputRef.current.focus();
            inputRef.current.select();
        }
    }, [focus, inputRef.current]);

    const getType = () => {
        if (isInputSecure) {
            return 'password';
        }

        if (isInputNum) {
            return 'tel';
        }

        return 'text';
    };

    return (
        <input
            {...rest}
            aria-label={`${index === 0 ? 'Please enter verification code. ' : ''}${
                isInputNum ? 'Digit' : 'Character'
            } ${index ? index + 1 : ''}`}
            autoComplete="off"
            className={cn(
                'focus:border-primary-500 text-primary-500 border rounded h-12 w-12 text-center text-xl font-bold font-heading outline-none',
                rest.className,
                isError && 'focus:border-error-500 border-error-500'
            )}
            data-cy={rest['data-cy']}
            data-tesid={rest['data-testid']}
            disabled={rest.disabled}
            maxLength={1}
            ref={mergedRef}
            type={getType()}
            value={rest.value ? rest.value : ''}
        />
    );
});

SingleOtp.defaultProps = {
    'data-cy': undefined,
    'data-testid': undefined,
    className: '',
    focus: false,
    index: undefined,
    isError: false,
    isInputNum: undefined,
    isInputSecure: false,
};

export default SingleOtp;
