import { cn } from '@/utils/style';

interface VerticalLineProps {
    className?: string;
}

const VerticalLine = ({ className }: VerticalLineProps) => {
    return (
        <div className={cn('border-right-hr', className)} />
    );
};

export default VerticalLine;
