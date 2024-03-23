import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { VariantProps } from 'class-variance-authority';
import { styles, renderIcon } from './constant';
import { cn } from '@/utils/className';

const paginationStyle = styles({ isActive: true });
interface Props extends VariantProps<typeof paginationStyle> {
    activePage: number;
    changePage: (page: number) => void;
    classNames?: {
        next?: string;
        number?: string;
        prev?: string;
    };
    gap?: number;
    icon?: 'arrow' | 'chevron';
    totalPage: number;
}
const CENTER_NUMBER = 3;

function Pagination(props: Props) {
    const { activePage, totalPage, changePage, color, variant, outline, gap, icon, classNames } = props;

    const renderPageNumber = () => {
        let startPage = activePage < CENTER_NUMBER ? 1 : activePage - 1;
        const endPage = startPage + (CENTER_NUMBER - 1) < totalPage ? startPage + (CENTER_NUMBER - 1) : totalPage;
        const diff = startPage - endPage + (CENTER_NUMBER - 1);
        startPage -= startPage - diff > 0 ? diff : 0;
        const pages = [];
        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }

        return pages.map((page, i) => (
            <button
                className={styles({ isActive: activePage === page })({
                    variant,
                    color,
                    outline,
                    className: classNames?.number,
                })}
                key={i}
                onClick={() => changePage(page)}
                type="button"
            >
                {page}
            </button>
        ));
    };
    const dots = (
        <div
            className={cn(
                'w-10 h-10 grid place-content-center text-[#202939] font-semibold',
                outline === 'outlined' && 'border border-tertiary-300'
            )}
        >
            <HiOutlineDotsHorizontal />
        </div>
    );
    const renderMinMaxNumber = (page: number) => (
        <button
            className={styles({ isActive: false })({ color, variant, outline, className: classNames?.number })}
            onClick={() => changePage(page)}
            type="button"
        >
            {page}
        </button>
    );

    const renderMinNumber = () => {
        if (totalPage === 4 && activePage >= 3) {
            return renderMinMaxNumber(1);
        } else if (totalPage === 5) {
            if (activePage === 3) return renderMinMaxNumber(1);
            else if (activePage > 3)
                return (
                    <>
                        {renderMinMaxNumber(1)}
                        {dots}
                    </>
                );
        } else if (totalPage > 5) {
            if (activePage === 3) {
                return renderMinMaxNumber(1);
            } else if (activePage > 3)
                return (
                    <>
                        {renderMinMaxNumber(1)}
                        {dots}
                    </>
                );
        }
    };

    const renderMaxNumber = () => {
        if (totalPage === 4 && activePage <= 2) {
            return renderMinMaxNumber(totalPage);
        } else if (totalPage === 5) {
            if (activePage <= 2) {
                return (
                    <>
                        {dots}
                        {renderMinMaxNumber(totalPage)}
                    </>
                );
            } else if (activePage === 3) {
                return renderMinMaxNumber(totalPage);
            }
        } else if (totalPage > 5) {
            if (totalPage - activePage > 2) {
                return (
                    <>
                        {dots}
                        {renderMinMaxNumber(totalPage)}
                    </>
                );
            } else if (totalPage - activePage === 2) {
                return renderMinMaxNumber(totalPage);
            }
        }
    };
    return (
        <div className="flex w-fit" style={{ gap: `${gap}px` }}>
            <button
                aria-label="Previous Page"
                className={styles({ isActive: false })({ color, variant, outline, className: classNames?.prev })}
                disabled={activePage === 1}
                onClick={() => changePage(activePage - 1)}
                type="button"
            >
                {renderIcon(icon!, 'left')}
            </button>
            {renderMinNumber()}
            {renderPageNumber()}
            {renderMaxNumber()}
            <button
                aria-label="Next Page"
                className={styles({ isActive: false })({ color, variant, outline, className: classNames?.next })}
                disabled={activePage === totalPage}
                onClick={() => changePage(activePage + 1)}
                type="button"
            >
                {renderIcon(icon!, 'right')}
            </button>
        </div>
    );
}

Pagination.defaultProps = {
    classNames: {},
    gap: 3,
    icon: 'chevron',
};
export default Pagination;
