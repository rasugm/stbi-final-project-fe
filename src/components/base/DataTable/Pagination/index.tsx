import Button from '../../Button/Button';
import getPagePagination, { showLastNumber, showFirstNumber, showLastDot, showFirstDot } from '@/utils/getPagination';
import { cn } from '@/utils/className';

interface Props {
    activePage: number;
    changePage: (page: number) => void;
    totalPage: number;
}
const classBtn = 'px-3 py-2 text-gray-900 border bg-white hover:bg-transparent';

function Pagination(props: Props) {
    const { activePage, totalPage, changePage } = props;
    return (
        <div className="flex items-center">
            {showFirstNumber(totalPage, activePage) ? (
                <Button
                    // rounded={'none'}
                    className={cn(classBtn)}
                    data-testid="pagination-first"
                    onClick={() => changePage(0)}
                >
                    1
                </Button>
            ) : null}
            {showFirstDot(totalPage, activePage) ? (
                <Button
                    // rounded={'none'}
                    className={cn(classBtn)}>
                    ...
                </Button>
            ) : null}
            {getPagePagination(totalPage, activePage).map((v, i) => (
                <Button
                    // rounded={'none'}
                    className={cn(classBtn, v === activePage && 'bg-black text-white hover:bg-black')}
                    onClick={() => (v !== activePage ? changePage(v - 1) : null)}
                    key={i}
                >
                    {v}
                </Button>
            ))}
            {showLastDot(totalPage, activePage) ? (
                <Button 
                    // rounded={'none'} 
                    className={cn(classBtn)}>
                    ...
                </Button>
            ) : (
                <div data-testid="pagination-null" />
            )}
            {showLastNumber(totalPage, activePage) ? (
                <Button 
                    // rounded={'none'} 
                    className={cn(classBtn)} 
                    onClick={() => changePage(totalPage - 1)}>
                    {totalPage}
                </Button>
            ) : null}
        </div>
    );
}

export default Pagination;
