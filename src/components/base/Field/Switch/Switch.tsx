import React from 'react';
import { Label } from '../../FormBase';

interface Props
    extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'type'> {
    label?: string;
    textLeft?: string;
    textRight?: string;
    customTextStyles?: string;
}
function Switch({ label, textLeft, textRight, customTextStyles, ...props }: Props) {
    return (
        <div>
            <div className="mb-2">
                {label && (
                    <Label>
                        {label}
                    </Label>
                )}
            </div>
            <div className="flex items-center gap-2">

                {(textLeft && !customTextStyles) ? (
                    <label
                        className={`mr-1 font-semibold rounded-[16px] w-[120px] text-center px-2 py-1 ${props.checked ? 'text-success-700 bg-success-100' : 'text-tertiary-400 bg-tertiary-25'
                        }`}
                    >
                        {textLeft}
                    </label>
                ) : null}

                {(textLeft && customTextStyles) ? (
                    <label
                        className={customTextStyles}
                    >
                        {textLeft}
                    </label>
                ) : null}

                <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" {...props} />
                    <div className="w-11 h-6 bg-gray-400 peer-focus:outline-none rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-success-300" />
                </label>

                {textRight && <span className="ml-3 text-sm font-medium">{textRight}</span>}
            </div>
        </div>
    );
}

Switch.defaultProps = {
    label: undefined,
    textRight: '',
    textLeft: ''
};

export default Switch;
