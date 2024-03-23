import { Select, TextField } from '@/components/base';
import { Label } from '@/components/base/FormBase';
import { IOption } from '@/configs/types';
import { cn } from '@/utils/style';

interface SearchInputProps {
    className?: string;
    options?: IOption[];
    onChangeOption: (arg: IOption | IOption[]) => void;
    onChangeInput: (data: any) => void;
    value?: IOption;
    selectPlaceholder?: string;
    textfieldPlaceholder?: string;
    isClearable?: boolean;
    isSearchable?: boolean;
    valueTextfield?: string;
    label?: boolean;
    disabledSelect?: boolean;
    disabledInput?: boolean;
}

const SearchInput = ({
    options,
    onChangeOption,
    onChangeInput,
    className,
    value,
    selectPlaceholder = 'Filter',
    textfieldPlaceholder = 'Masukan pencarian',
    isClearable,
    isSearchable,
    valueTextfield,
    label,
    disabledSelect, 
    disabledInput
}: SearchInputProps) => {
    return (
        <div className={cn(`flex flex-col w-[100%]`, className)}>
            {label && <Label className="mb-1">Pencarian</Label>}
            <div
                className={`flex items-center justify-start
                gap-1 border border-tertiary-300 rounded-[4px] h-[40px]`}
            >
                <div className="w-[50%]">
                    <Select
                        noBorder={true}
                        placeholder={selectPlaceholder}
                        options={options || []}
                        onChange={(options: any) => onChangeOption(options)}
                        value={value}
                        isClearable={isClearable}
                        isSearchable={isSearchable}
                        disabled={disabledSelect}
                    />
                </div>
                <div className="border-l border-tertiary-100 h-6" />
                <TextField
                    className="grow"
                    placeholder={textfieldPlaceholder}
                    iconRight={{ name: 'search' }}
                    isBorderLess={true}
                    onChange={(data: any) => onChangeInput(data)}
                    value={valueTextfield}
                    disabled={disabledInput}
                />
            </div>
        </div>
    );
};

SearchInput.defaultProps = {
    selectPlaceholder: 'Filter',
    textfieldPlaceholder: 'Masukan pencarian',
    isClearable: true,
    isSearchable: true,
    label: true,
    disabledSelect: false,
    disabledInput: false
};

export default SearchInput;
