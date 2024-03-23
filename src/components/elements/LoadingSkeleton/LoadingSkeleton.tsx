import clsx from 'clsx';

interface LoadingSkeletonProps {
	width?: string;
    height?: string;
}

const LoadingSkeleton = ({
    width,
    height
}: LoadingSkeletonProps) => {
    return (
        <div 
            data-placeholder 
            className={clsx(
                'rounded-md w-full overflow-hidden relative bg-tertiary-200',
                width,
                height
            )}
        />
    );
};

LoadingSkeleton.defaultProps = {
    width: 'w-full',
    height: 'h-10'
};

export default LoadingSkeleton;
