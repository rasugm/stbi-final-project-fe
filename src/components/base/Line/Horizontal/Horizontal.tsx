import { cn } from '@/utils/style';

interface HorizontalLineProps {
    className?: string;
}

const HorizontalLine = ({ className }: HorizontalLineProps) => {
    return (
        <hr className={cn('border-top-hr', className)} />
    );
};

export default HorizontalLine;
