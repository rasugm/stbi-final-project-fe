import React from 'react';
import { Label } from '../../FormBase';
import clsx from 'clsx';
import RadioButton from './RadioButton';

type Option = {
    label?: string;
    value: number | string | readonly string[];
};

interface Props {
    label?: string;
    name?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    options: Option[];
    renderLabel?: () => React.ReactElement;
    required?: boolean;
    value?: string;
    disabled?: boolean;
    className?: string
}

function RadioGroup(props: Props) {
    const { label, renderLabel, onChange, options, name, required, value, disabled, className } = props;
    const renderLabelInput = (
        <div>
            {renderLabel ? (
                renderLabel()
            ) : (
                <div className="mb-2">
                    <Label className="mb-1" required={required}>
                        {label}
                    </Label>
                </div>
            )}
        </div>
    );
    return (
        <div className={clsx('w-full flex flex-col', className)}>
            {(label || renderLabel) && renderLabelInput}
            <div className="flex items-center gap-3">
                {options.map((el, idx) => (
                    <RadioButton
                        defaultChecked={value === el.value}
                        key={idx}
                        name={name}
                        label={el.label}
                        value={el.value}
                        onChange={onChange}
                        disabled={disabled}
                    />
                ))}
            </div>
        </div>
    );
}

RadioGroup.defaultProps = {
    label: undefined,
    renderLabel: undefined,
    name: '',
    value: '',
    onChange: undefined,
    required: false,
    disabled: false
};
export default RadioGroup;
