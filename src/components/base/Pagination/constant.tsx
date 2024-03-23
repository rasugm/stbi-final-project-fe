import { cn } from '@/utils/className';
import { cva } from 'class-variance-authority';
import {
    FaChevronLeft as ChevronLeftIcon,
    FaChevronRight as ChevronRightIcon,
    FaArrowRight as ArrowRightIcon,
    FaArrowLeft as ArrowLeftIcon,
} from 'react-icons/fa';

export const styles = ({ isActive }: { isActive: boolean }) =>
    cva('min-w-[40px] h-10 text-sm grid place-content-center font-semibold transition-all', {
        variants: {
            variant: {
                circle: 'rounded-full',
                rounded: 'rounded-lg',
                square: 'rounded-none',
            },
            color: {
                primary: cn(
                    'bg-white text-tertiary-900 hover:bg-primary-500 hover:text-white disabled:bg-tertiary-300 disabled:text-tertiary-400 disabled:cursor-not-allowed hover:border-none duration-300',
                    isActive && 'bg-primary-500 text-white !border-none'
                ),
                'soft-primary': cn(
                    'bg-white text-tertiary-900 hover:bg-primary-100 hover:text-primary-500 hover:border hover:border-primary-500 disabled:bg-tertiary-300 disabled:text-tertiary-400 disabled:border-none disabled:cursor-not-allowed duration-300',
                    isActive && 'bg-primary-100 text-primary-500 border !border-primary-500'
                ),
            },
            outline: {
                none: '',
                outlined: 'border border-tertiary-300',
            },
        },
        defaultVariants: {
            variant: 'circle',
            color: 'primary',
            outline: 'none',
        },
    });

export const renderIcon = (type: 'arrow' | 'chevron', direction: 'left' | 'right') => {
    const icons = {
        arrow: {
            left: <ArrowLeftIcon />,
            right: <ArrowRightIcon />,
        },
        chevron: {
            left: <ChevronLeftIcon />,
            right: <ChevronRightIcon />,
        },
    };

    return icons[type][direction];
};
