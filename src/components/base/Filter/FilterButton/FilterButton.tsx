import { IOption } from '@/constants/types';
import { Button } from '../..';
import { cn } from '@/utils/style';

interface FilterButtonProps {
    options: IOption[];
    changeBy: string;
    paramColor: string;
    label?: string;
    handleChange: (option: any, key: string) => void;
}

const FilterButton = ({ options, changeBy, paramColor, label, handleChange }: FilterButtonProps) => {
    return (
        <div className="w-full flex items-center">
            <p className="w-[150px] text-tertiary-800 body-small font-bold">{label}</p>
            <div className="gap-2 grid grid-cols-[repeat(auto-fit,minmax(0,1fr))] w-full">
                {options.map((item, index) => (
                    <Button 
                        key={index}
                        onClick={() => handleChange(item, changeBy)}
                        color={item.value === paramColor ? 'primary' : 'tertiary'}
                        variant="soft"
                        className={cn(
                            'w-full',
                            item.value !== paramColor && 'text-tertiary-500'
                        )}
                    >
                        {item.label}
                    </Button>
                ))}
            </div>
        </div>
    );
};

FilterButton.defaultProps = {
    label: 'Status Akhir:',
};

export default FilterButton;