import clsx from 'clsx';
import React from 'react';

interface Props
    extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'type'> {
    label?: string;
}
const RadioButton = React.forwardRef<HTMLInputElement, Props>(function Component(props, ref) {
    const { label, ...rest } = props;
    return (
        <div className="flex items-center gap-2">
            <input className="cursor-pointer radio-button" type="radio" {...rest} id={label} ref={ref} />
            {label && (
                <label
                    className={clsx('text-base', rest.disabled ? 'text-[#9AA4B2]' : 'text-[#2E3032]')}
                    htmlFor={label}
                >
                    {label}
                </label>
            )}
        </div>
    );
});

RadioButton.defaultProps = {
    label: undefined,
};

export default RadioButton;
