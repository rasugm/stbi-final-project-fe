import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

interface DatePickerMonthProps {
    selectedDate: Date | null;
    onChange: (date: Date | null) => void;
}

const DatePickerMonth = ({ selectedDate, onChange }: DatePickerMonthProps) => {
    return (
        <DatePicker
            selected={selectedDate}
            onChange={onChange}
            dateFormat="dd/MM/yyyy"
            locale="en-US"
        />
    );
};

export default DatePickerMonth;
