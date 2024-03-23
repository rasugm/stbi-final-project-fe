import { Link } from 'react-router-dom';
import { WEB } from '@/constants';
import Icon from '../Icon';
import { cn } from '@/utils/className';

interface BreadcrumbProps {
    items: { title: string; path?: string }[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
    // TODO: CREATE DYNAMIC BREADCRUMB

    // const location = useLocation();
    // console.log(location.pathname.split("/")[1]);
    const checking = () => {
        const x = items?.length === 1 && items[0].title === 'home';
        return items?.length > 0 && !x;
    };
    return (
        <nav className="flex gap-1 text-sm items-center" aria-label="Breadcrumb">
            <Link to={WEB.DASHBOARD} className="text-primary-500 font-semibold">
                Home
            </Link>

            {checking() ? (
                <>
                    <p className="text-tertiary-300">
                        <Icon name="chevron-right" size={12} />
                    </p>
                    <ol className="list-none p-0 inline-flex whitespace-nowrap overflow-auto">
                        {items.map((item, index) => (
                            <li key={index} className={`flex text-sm items-center px-1`}>
                                {item.path ? (
                                    <Link
                                        to={item.path}
                                        className={cn(
                                            'capitalize',
                                            `${
                                                index === items.length - 1
                                                    ? 'text-tertiary-400 font-semibold'
                                                    : ' text-primary-500 font-semibold'
                                            }`
                                        )}
                                    >
                                        {item.title}
                                    </Link>
                                ) : (
                                    <span
                                        className={cn(
                                            'capitalize',
                                            `${index === items.length - 1 ? 'text-tertiary-300 font-semibold ' : ''}`
                                        )}
                                    >
                                        {item.title}
                                    </span>
                                )}
                                {index < items.length - 1 && (
                                    <div className="text-tertiary-300 pl-2">
                                        <Icon name="chevron-right" size={12} />
                                    </div>
                                )}
                            </li>
                        ))}
                    </ol>
                </>
            ) : (
                <></>
            )}
        </nav>
    );
};

export default Breadcrumb;
