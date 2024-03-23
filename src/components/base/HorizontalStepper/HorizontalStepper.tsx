import { cn } from '@/utils/className';
import { ReactNode } from 'react';
import Icon from '../Icon';

interface IOption {
    description: ReactNode;
    title: string;
}

interface IStepper {
    currentStep: number;
    options: IOption[];
}

const HorizontalStepper = ({ currentStep, options }: IStepper) => {
    return (
        <div className="flex flex-col space-y-4">
            {options.map((item, index) => (
                <div className="relative flex justify-start items-start space-x-4" key={index}>
                    <div
                        className={cn(
                            'p-1 rounded-full w-fit h-fit',
                            'after:transform after:scale-x-100 after:scale-y-200 after:transform-origin-50--100',
                            // Background circle
                            currentStep < index + 2
                                ? 'after:bg-tertiary-300 border bg-tertiary-500'
                                : 'bg-success-500 after:bg-success-500',
                            // Line Conector
                            currentStep < index + 1 ? 'after:bg-tertiary-300' : 'bg-success-500',
                            // Hide line connector on the last index
                            index !== options.length - 1 &&
                                'after:content-[""] after:absolute after:block after:top-5 after:left-2 after:w-[2px] after:h-full'
                        )}
                    >
                        <Icon name={currentStep < index + 1 ? 'clock' : 'check'} className="text-white" size={12} />
                    </div>
                    <div className={currentStep < index + 1 ? 'text-primary-500' : 'text-success-500'}>
                        <p
                            className={cn(
                                'body-small font-bold',
                                currentStep < index + 1 ? 'text-primary-500' : 'text-success-500'
                            )}
                        >
                            {item.title}
                        </p>
                        <div className={currentStep < index + 1 ? 'text-primary-500' : 'text-success-500'}>
                            {item.description}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default HorizontalStepper;
