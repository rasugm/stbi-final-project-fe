interface CheckboxProps {
    labelCheck?: string;
    isChecked?: boolean;
    onChange: (isChecked: boolean) => void;
    defaultValue?: boolean;
    disabled?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({ labelCheck = '', isChecked = false, onChange, defaultValue, disabled = false }) => {
    const toggleCheckbox = () => {
        onChange(!isChecked);
    };

    // use value from defaultValue if available
    if (defaultValue !== undefined && isChecked !== defaultValue) {
        toggleCheckbox();
    }

    return (
        <label className="inline-flex items-center space-x-2">
            <input
                type="checkbox"
                className="w-5 h-5 rounded-[4px] accent-primary-500"
                checked={isChecked}
                onChange={toggleCheckbox}
                disabled={disabled}
            />
            <span>{labelCheck}</span>
        </label>
    );
};

export default Checkbox;
