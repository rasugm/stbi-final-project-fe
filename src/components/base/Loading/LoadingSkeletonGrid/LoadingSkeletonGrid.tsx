import Skeleton from '../../Skeleton';

interface loadingSkeletonGridProps {
	count: number,
    width?: string;
    height?: string;
    rounded?: string;
}

const loadingSkeletonGrid = ({ count, width, height, rounded }: loadingSkeletonGridProps) => {
    const loadingSkeletonArray = [];

    for (let i = 0; i < count; i++) {
        loadingSkeletonArray.push(
            <Skeleton 
                key={'loading-skeleton-grid-' + i}
                width={width}
                height={height}
                rounded={rounded}
            />
        );
    }

    return loadingSkeletonArray;
};

loadingSkeletonGrid.defaultProps = {
    width: 'w-full',
    height: 'h-10',
    rounded: 'rounded-md'
};

export default loadingSkeletonGrid;
