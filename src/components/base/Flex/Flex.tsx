import { cn } from '@/utils/className';

type Props = React.HTMLAttributes<HTMLDivElement>;
const Flex = ({ children, className, ...rest }: Props) => {
    return (
        <div className={cn('flex items-center', className)} {...rest}>
            {children}
        </div>
    );
};

export default Flex;
