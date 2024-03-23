import Text from '@/components/base/Text/Text';
import { IL_DATA_NOT_FOUND } from '@/configs/images';
import { cn } from '@/utils/className';

type Props = {
    className?: string;
    title: string;
};

const EmptyProduct = ({ title, className }: Props) => {
    return (
        <div className={cn('flex items-center justify-center flex-col gap-5', className)}>
            <img src={IL_DATA_NOT_FOUND} alt="sleep" />
            <Text className="text-center opacity-60">{title}</Text>
        </div>
    );
};

export default EmptyProduct;

EmptyProduct.defaultProps = {
    className: undefined,
};
