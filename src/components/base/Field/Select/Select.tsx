import React from 'react';
import ReactSelect, { ActionMeta, GetOptionLabel, GetOptionValue, GroupBase, StylesConfig } from 'react-select';
import Creatable from 'react-select/creatable';
import clsx from 'clsx';
import { Label } from '../../FormBase';
import AsyncSelect from 'react-select/async';

interface Option {
    label: string;
    value: any;
}

interface Props
    extends Omit<React.ComponentProps<typeof AsyncSelect>, 'getOptionLabel' | 'getOptionValue' | 'onChange'> {
    defaultValue?: Option;
    disabled?: boolean;
    isCreatable?: boolean;
    isAsync?: boolean;
    label?: string;
    onChange?: (option: Option, actionMeta: ActionMeta<Option>) => void;
    options?: Option[];
    isLoading?: boolean;
    renderLabel?: () => React.ReactElement;
    value?: Option | Option[];
    noBorder?: boolean;
    menuPlacement?: 'top' | 'bottom' | 'auto';
}

const Select = React.forwardRef<any, Props>(function Component(props, ref) {
    const {
        label,
        options,
        defaultValue,
        renderLabel,
        onChange,
        value,
        required,
        isCreatable,
        noBorder,
        isAsync,
        ...selectProps
    } = props;

    const handleChange = async (option: any, action: any) => {
        onChange?.(option, action);
    };

    const customStyles: StylesConfig<Option> = {
        control: (provided: any, state: any) => ({
            ...provided,
            height: '40px',
            border: noBorder ? 'none' : '1px solid #D0D5DD',
            fontSize: '0.85rem',
            lineHeight: '24px',
            color: state.isDisabled ? '#4D4D63' : '#fff',
            boxShadow: '#A0A0AE',
            borderColor: '#A0A0AE',
            backgroundColor: state.isDisabled ? '#F3F3F8' : noBorder ? 'none' : '#fff',
            '&:hover': {
                borderColor: '#894097',
            },
        }),
        placeholder: (provided: any) => ({
            ...provided,
            color: '#98A2B3',
            fontSize: '0.85rem',
        }),
        option: (provided: any, state: any) => ({
            ...provided,
            color: state.isFocused || state.isSelected ? '#894097' : '#1D2939',
            backgroundColor: state.isFocused || state.isSelected ? '#F4EAF6' : '#fff',
        }),
        multiValue: (provided: any) => ({
            ...provided,
            color: 'white !important',
            backgroundColor: '#894097',
            borderRadius: '50px',
            padding: '0px 6px',
            '&:hover, &:focus': {
                backgroundColor: 'none !important',
            },
        }),
        multiValueLabel: (provided: any) => ({
            ...provided,
            color: 'white',
        }),
        multiValueRemove: (provided: any) => ({
            ...provided,
            cursor: 'pointer',
            color: 'white',
            ':hover': {
                backgroundColor: 'none',
                color: 'white',
            },
        }),
        menuPortal: (provided: any) => ({
            ...provided,
            zIndex: 999999,
        }),
    };

    const renderLabelInput = (
        <div>
            {renderLabel ? (
                renderLabel()
            ) : (
                <div className="mb-1">
                    <Label id={selectProps?.id || selectProps.name} required={required}>
                        {label}
                    </Label>
                </div>
            )}
        </div>
    );

    const SelectComponent = isCreatable ? Creatable : isAsync ? AsyncSelect : ReactSelect;

    return (
        <div className={clsx('w-full')}>
            {(label || renderLabel) && renderLabelInput}
            <div className="w-full h-[40px]">
                <SelectComponent
                    defaultValue={defaultValue}
                    getOptionLabel={((option: Option) => option.label) as GetOptionLabel<unknown> | undefined}
                    getOptionValue={((option: Option) => option.value) as GetOptionValue<unknown>}
                    inputId={selectProps.id || selectProps.name || ''}
                    isDisabled={selectProps.disabled}
                    onChange={handleChange}
                    options={options}
                    ref={ref}
                    menuPortalTarget={document.body}
                    styles={customStyles as StylesConfig<unknown, boolean, GroupBase<unknown>>}
                    value={value}
                    components={{
                        IndicatorSeparator: () => null,
                    }}
                    {...selectProps}
                />
            </div>
        </div>
    );
});

Select.defaultProps = {
    defaultValue: undefined,
    disabled: false,
    isCreatable: false,
    label: '',
    onChange: undefined,
    renderLabel: undefined,
    value: undefined,
};

export default Select;
