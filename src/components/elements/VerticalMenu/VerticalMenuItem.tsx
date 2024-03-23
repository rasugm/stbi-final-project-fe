import Icon from '@/components/base/Icon';
import { cn } from '@/utils/className';
import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface VerticalMenuItemProps {
    children: ReactNode;
    url: string;
    active: boolean;
    valid: boolean;
    mark?: boolean;
}

const VerticalMenuItem = ({ children, url, active, valid, mark }: VerticalMenuItemProps) => {
    const navigate = useNavigate();

    let defaultClass = 'p-3 font-semibold rounded-md flex items-center justify-between cursor-pointer w-full';

    const statusMenu = (active: boolean, valid: boolean) => {
        return !active && !valid ? 'text-error-500' 
            : active && !valid ? 'text-error-500 bg-primary-50' 
                : !active && valid ? 'text-tertiary-800' 
                    : active && valid ? 'text-primary-500 bg-primary-50' : 'text-tertiary-800';
    };

    if (url.includes('#')) {
        return (
            <a href={url} className={cn(statusMenu(active, valid), defaultClass)}>
                {children}
                {!valid && mark ? (
                    <Icon
                        name="exclamation"
                        className="text-error-500 bg-error-50 rounded-[10px] h-[20px] w-[28px] p-[3px]"
                    />
                ) : valid && mark ?  (
                    <Icon
                        name="check"
                        className="text-success-500 bg-success-50 rounded-[10px] h-[20px] w-[28px] p-[3px]"
                    />
                ) : null}
            </a>
        );
    }
    return (
        <div className={cn(statusMenu(active, valid), defaultClass)} onClick={() => navigate(url)}>
            {children}
            {!valid ? (
                <Icon
                    name="exclamation"
                    className="text-error-500 bg-error-50 rounded-[10px] h-[20px] w-[28px] p-[3px]"
                />
            ) : (
                <Icon
                    name="check"
                    className="text-success-500 bg-success-50 rounded-[10px] h-[20px] w-[28px] p-[3px]"
                />
            )}
        </div>
    );
};

export default VerticalMenuItem;
