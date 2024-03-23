import { Row } from '@tanstack/react-table';
import { TextField } from '../../Field';

const EmployeeSubRow = ({ row }: { row: Row<any> }) => {
    const data = row?.original;
    return (
        <div className="bg-gray-200">
            <TextField label="Employee Salary" value={`${data?.employee_salary}`} readOnly={true} disabled={true} />
        </div>
    );
};

export default EmployeeSubRow;
