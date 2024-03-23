interface ProgressBarProps {
    percentage: number;
}

const ProgressBar = ({ percentage }: ProgressBarProps) => {
    return (
        <div className="flex items-center gap-3">
            <div className="w-full h-full bg-tertiary-100 rounded-md">
                <div
                    className="bg-primary-500 rounded-md text-xs leading-none py-1 text-center text-white"
                    style={{ width: `${percentage}%` }}
                />
            </div>
            {percentage}%
        </div>
    );
};

export default ProgressBar;