import { ValueType } from 'react-select/lib/types';

import { IOption } from './types';

declare namespace ReactSelect {
    declare interface CommonProps extends React.InputHTMLAttributes<HTMLInputElement> {
        cacheOptions?: boolean;
        className?: string;
        classNamePrefix?: string;
        clearValue?: () => void;
        controlShouldRenderValue?: boolean;
        defaultOptions?: boolean;
        defaultValue?: any | undefined;
        filterOption?: (value: any) => boolean;
        getOptionLabel?: (el: any) => void;
        getOptionValue?: (el: any) => void;
        getStyles?: (string, any) => unknown;
        getValue?: () => ValueType;
        hasValue?: boolean;
        closeMenuOnSelect?: boolean;
        hideSelectedOptions?: boolean;
        inputRef?: any;
        inputRef?: any;
        components?: any;
        DropdownIndicator?: any;
        instanceId?: string;
        isClearable?: boolean;
        isMulti?: boolean;
        isRtl?: boolean;
        isSearchable?: boolean;
        isDisabled?: boolean;
        loadOptions?: any;
        menuIsOpen?: boolean;
        noOptionsMessage?: any;
        onChange?: any;
        onInputChange?: (value: any) => void;
        onSelect?: (value: any) => void;
        options?: IOption[];
        placeholder?: string;
        ref?: any;
        searchable?: boolean;
        selectProps?: any;
        setValue?: (ValueType, ActionTypes) => void;
        styles?: any;
        value?: any;
        values?: any[];
        noBorder?: boolean;
    }
}

declare module 'react-select' {
    const Select: React.FC<ReactSelect.CommonProps>;
    export = Select;
}

declare module 'react-select/async' {
    const Select: React.FC<ReactSelect.CommonProps>;
    export = Select;
}