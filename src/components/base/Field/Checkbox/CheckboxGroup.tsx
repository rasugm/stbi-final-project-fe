import React, { useState } from 'react';
import { Label } from '../../FormBase';
import clsx from 'clsx';
import Checkbox from './Checkbox';

type Option = {
    label?: string;
    value: string;
};

interface Props {
    label?: string;
    onChange?: (values: (number | string)[]) => void;
    options: Option[];
    renderLabel?: () => React.ReactElement;
    required?: boolean;
    value?: (number | string)[];
    variant?: 'checkmark' | 'minmark';
}

function CheckboxGroup(props: Props) {
    const { label, renderLabel, onChange, options, required, variant, value } = props;

    const [checkedList, setCheckedList] = useState(value);
    const renderLabelInput = (
        <div>
            {renderLabel ? (
                renderLabel()
            ) : (
                <Label className="block mb-1" required={required}>
                    {label}
                </Label>
            )}
        </div>
    );
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const checked = e.target.checked;
        const value = e.target.value;
        const newCheckedList = checked
            ? [...(checkedList ? checkedList : []), value]
            : checkedList?.filter?.((el) => el !== value);

        setCheckedList([...new Set(newCheckedList)]);
        onChange?.([...new Set(newCheckedList)]);
    };
    return (
        <div className={clsx('w-full flex flex-col')}>
            {(label || renderLabel) && renderLabelInput}
            <div className="flex items-center gap-3">
                {options.map((el, idx) => (
                    <Checkbox
                        checked={checkedList?.includes?.(el.value)}
                        key={idx}
                        name={el.value}
                        label={el.label}
                        value={el.value}
                        onChange={handleChange}
                        variant={variant}
                    />
                ))}
            </div>
        </div>
    );
}

CheckboxGroup.defaultProps = {
    label: undefined,
    renderLabel: undefined,
    onChange: undefined,
    required: false,
    value: [],
    variant: 'checkmark',
};
export default CheckboxGroup;
