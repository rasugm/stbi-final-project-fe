import { useStepper } from 'headless-stepper';
import Icon from '../Icon';

interface IStepper {
    currentStep: number;
    steps: {
        label: string;
        disabled: boolean;
        code: string;
        status: string;
    }[];
}

const VerticalStepper = ({
    currentStep,
    steps
}: IStepper) => {

    const DEFAULT_CLASS = 'flex items-center justify-center text-black w-10 h-10 border border-full rounded-full  ring-primary-500 group-focus:ring-offset-2';

    const { state, stepperProps } = useStepper({
        currentStep: currentStep,
        steps: steps.map((step) => ({
            label: step.label,
            disabled: step.disabled,
            status: step.status
        }))
    });

    const getIcon = (status: string) => {
        if (status === 'waiting') {
            return 'time';
        }

        if (status === 'success') {
            return 'checked';
        }

        if (status === 'reject') {
            return 'close';
        }

        return 'circle';
    };

    return (
        <div className="flex justify-center h-[100px]">
            <nav className="my-4 w-[70%] h-full grid grid-cols-6 relative" {...stepperProps}>
                <ol className="col-span-full flex z-[99]">
                    {steps?.map((step, index) => (
                        <>
                            <li className="text-center flex-[1_0_auto]" key={index}>
                                <a
                                    className="group flex flex-col gap-2 items-center focus:outline-0"
                                    {...step}
                                >
                                    <span
                                        className={`${DEFAULT_CLASS} transition-colors ease-in-out
												${state?.currentStep >= index
                            ? step.status === 'waiting' ? 'bg-warning-400 ring-2 ring-warning-400 ring-offset-2' : 'bg-success-500 text-white ring-2 ring-success-500 ring-offset-2'
                            : ''
                        }`}
                                    >
                                        {state?.currentStep >= index ?
                                            <><Icon name={getIcon(step?.status ?? 'waiting')} size="20" color="white" className="text-success-500 font-bold" /></>
                                            : <>{index + 1}</>}
                                    </span>
                                    <span
                                        className={`${state?.currentStep === index ? 'font-bold' : ''} absolute top-10 mt-3 text-xs text-center w-[200px]`}
                                    >
                                        {steps[index].label}
                                    </span>
                                </a>
                            </li>
                            {index !== steps.length - 1 && (
                                <>
                                    <div
                                        className=
                                            {
                                                `lg:h-[2px] mt-[19px] z-[-1] h-[10px] lg:w-full w-full lg:ml-0 ml-5
												${state?.currentStep > index && step.status === 'success' 
                                    ? 'bg-success-500' : 'bg-tertiary-200'}
											`
                                            }
                                    />
                                </>
                            )}
                        </>
                    ))}
                </ol>
            </nav>
        </div>
    );
};

export default VerticalStepper;
