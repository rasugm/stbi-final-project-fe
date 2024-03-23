import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Label } from '../../FormBase';
import Icon from '../../Icon';

interface DatePickerRangeProps {
    startDate: Date | null;
    endDate: Date | null;
    onStartDateChange: (date: Date | null) => void;
    onEndDateChange: (date: Date | null) => void;
    label?: string;
}

const DatePickerRange = ({
    startDate,
    endDate,
    onStartDateChange,
    onEndDateChange,
    label
}: DatePickerRangeProps) => {
    const [isInputFocused, setInputFocused] = useState(false);

    const handleInputFocus = () => {
        setInputFocused(true);
    };

    const handleInputBlur = () => {
        setInputFocused(false);
    };

    return (
        <div className="flex flex-col">
            {label && (
                <Label className="mb-1">
                    {label}
                </Label>
            )}
            <div className={`w-full h-[40px] flex justify-center items-center gap-3 border ${isInputFocused ? 'border-primary-500' : 'border-tertiary-300'} rounded py-[6px] px-[10px]`}>
                <Icon name="calendar-bs" className="w-[30px] h-[30px] text-tertiary-500" />
                <DatePicker
                    selected={startDate}
                    onChange={onStartDateChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    dateFormat="dd/MM/yyyy"
                    locale="en-US"
                    className="w-28 text-base focus-visible:outline-none"
                    placeholderText="Tanggal Mulai"
                    isClearable
                />
                <p className="text-tertiary-400 font-semibold">s/d</p>
                <DatePicker
                    selected={endDate}
                    onChange={onEndDateChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    dateFormat="dd/MM/yyyy"
                    locale="en-US"
                    className="w-28 text-base focus-visible:outline-none"
                    placeholderText="Tanggal Selesai"
                    isClearable
                />
            </div>
        </div>
    );
};

export default DatePickerRange;
