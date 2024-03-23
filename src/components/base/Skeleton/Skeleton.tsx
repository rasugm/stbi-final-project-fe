import clsx from 'clsx';

interface SkeletonProps {
	width?: string;
    height?: string;
    rounded?: string;
}

const Skeleton = ({
    width,
    height,
    rounded
}: SkeletonProps) => {
    return (
        <div 
            data-placeholder 
            className={clsx(
                'overflow-hidden relative bg-tertiary-200',
                width,
                height,
                rounded
            )}
        />
    );
};

Skeleton.defaultProps = {
    width: 'w-full',
    height: 'h-10',
    rounded: 'rounded-md'
};

export default Skeleton;
