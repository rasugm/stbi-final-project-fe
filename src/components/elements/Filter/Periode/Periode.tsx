import { Select } from '@/components/base';
import { Label } from '@/components/base/FormBase';
import { IOption } from '@/configs/types';
import { MONTHS } from '@/constants/months';
import { cn } from '@/utils/style';
import { useMemo, useState } from 'react';

interface PeriodeProps {
    className?: string;
    onChangeOption: (arg: any | any[]) => void;
    isDisabled?: boolean;
    isMinOne?: boolean;
    isDefault?: boolean;
    isLabel?: boolean;
}

const PeriodeInput = ({ onChangeOption, className, isDisabled, isMinOne, isDefault, isLabel }: PeriodeProps) => {
    const [periode, setPeriode] = useState(
        isDefault ? {
            bulan: isMinOne ? new Date().getMonth() + 1 : new Date().getMonth(),
            tahun: new Date().getFullYear(),
        } : {
            bulan: 0,
            tahun: new Date().getFullYear(),
        }
    );

    // GENERATE YEAR FROM CURRENT YEAR TO 2015
    const YEAR = Array.from(new Array(7), (_, index) => {
        const year = new Date().getFullYear() - index;
        return {
            // LABEL TO STRING
            label: year.toString(),
            value: year,
        };
    });

    const handleChange = (option: IOption, name: string) => {
        setPeriode({
            ...periode,
            [name]: option.value,
        });
    };

    // @ts-ignore
    useMemo(() => {
        if(periode.bulan !== 0) {
            onChangeOption(periode);
        } else {
            onChangeOption(null);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [periode]);

    return (
        <div className={cn(`flex flex-col w-[100%]`, className)}>
            {isLabel ? <Label className="mb-1">Periode</Label> : <></>}
            <div
                className={`flex items-center justify-start
                gap-1 border border-tertiary-300 rounded-[4px] h-[40px]`}
            >
                <div className="w-[50%]">
                    <Select
                        noBorder={true}
                        placeholder="Bulan"
                        options={MONTHS}
                        onChange={(options: any) => handleChange(options, 'bulan')}
                        value={isDefault ? {
                            label: MONTHS[periode?.bulan - 1].label,
                            value: periode.bulan,
                        } : undefined}
                        isDisabled={isDisabled}
                    />
                </div>
                <div className="border-l border-tertiary-100 h-6" />
                <div className="w-[50%]">
                    <Select
                        noBorder={true}
                        placeholder="Tahun"
                        options={YEAR}
                        onChange={(options: any) => handleChange(options, 'tahun')}
                        value={{
                            label: periode.tahun.toString(),
                            value: periode.tahun,
                        }}
                        isDisabled={isDisabled}
                    />
                </div>
            </div>
        </div>
    );
};

PeriodeInput.defaultProps = {
    isDisabled: false,
    isMinOne: true,
    isDefault: true,
    isLabel: true,
};

export default PeriodeInput;
