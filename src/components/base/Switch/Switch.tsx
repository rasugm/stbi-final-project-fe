import { cn } from '@/utils/style';

interface SwitchProps {
    label?: string;
    labelLeft?: boolean,
    labelRight?: boolean,
    labelTrue?: string;
    labelFalse?: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
}

const Switch: React.FC<SwitchProps> = ({
    label,
    checked,
    labelLeft,
    labelRight,
    labelTrue,
    labelFalse,
    onChange,
    disabled }) => {
    const handleChange = () => {
        onChange(!checked);
    };

    const toggleClass = ' transform translate-x-6';

    return (
        <div className="flex flex-col gap-4">
            {
                label && (
                    <label htmlFor="toggle" className="mr-2 font-semibold">
                        {label}
                    </label>
                )
            }

            <div className="flex gap-2">
                {labelLeft && <>
                    {
                        checked ? (
                            <label htmlFor="toggle" className="ml-2 font-semibold rounded-[16px] w-[120px] text-success-500 bg-success-50 text-center px-2 py-1">
                                {labelTrue}
                            </label>
                        ) : (
                            <label htmlFor="toggle" className="ml-2 font-semibold rounded-[16px] w-[120px] text-tertiary-300 bg-tertiary-50 text-center px-2 py-1">
                                {labelFalse}
                            </label>
                        )
                    }
                </>}



                <div className="flex items-center gap-4">
                    <div
                        className={cn(
                            `md:w-14 md:h-7 w-12 h-6 flex items-center rounded-full p-1 cursor-pointer`,
                            checked ? 'bg-success-200' : 'bg-tertiary-200',
                            disabled ? 'opacity-50 pointer-events-none' : ''
                        )}
                        // Terapkan event handler hanya jika tidak dinonaktifkan
                        onClick={!disabled ? handleChange : undefined}
                    >
                        {/* Switch */}
                        <div
                            className={
                                'bg-white md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out' +
                                (checked ? toggleClass : '')
                            }
                        />
                    </div>

                    {labelRight && <>
                        {
                            checked ? (
                                <label htmlFor="toggle" className="mr-2 font-semibold rounded-[16px] w-[120px] text-success-500 bg-success-50 text-center px-2 py-1">
                                    {labelTrue}
                                </label>
                            ) : (
                                <label htmlFor="toggle" className="mr-2 font-semibold rounded-[16px] w-[120px] text-tertiary-300 bg-tertiary-50 text-center px-2 py-1">
                                    {labelFalse}
                                </label>
                            )
                        }
                    </>}
                </div>

            </div>
        </div>
    );
};

Switch.defaultProps = {
    label: '',
    checked: false,
    labelLeft: false,
    labelRight: false,
    labelTrue: '',
    labelFalse: '',
    onChange: () => { },
    disabled: false,
};

export default Switch;
