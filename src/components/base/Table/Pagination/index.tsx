import { IMeta } from '@/configs/types';
import { DOTS, usePagination } from '@/hooks/usePagination';
import { Dispatch, SetStateAction } from 'react';
import Icon from '../../Icon';
import { cn } from '@/utils/style';

export interface PaginationProps {
    limit: number | undefined;
    meta: IMeta;
    setPage?: Dispatch<SetStateAction<{ limit: number; page: number }>>;
    setPageSize: (arg: number) => void;
    setParams?: Dispatch<SetStateAction<any>>;
}

const Pagination = ({ meta, limit, setPage, setParams }: PaginationProps) => {
    const { page, totalData, totalPage } = meta;

    const paginationRange: (number | string)[] | undefined = usePagination({ meta });

    const handleOnChangePrev = () => {
        if (setPage) {
            setPage((prev) => ({ ...prev, page: prev.page - 1 }));
        }
        if (setParams) {
            setParams((prev: any) => ({ ...prev, page: prev.page - 1 }));
        }
    };

    const handleOnChangeNext = () => {
        if (setPage) {
            setPage((prev) => ({ ...prev, page: prev.page + 1 }));
        }
        if (setParams) {
            setParams((prev: any) => ({ ...prev, page: prev.page + 1 }));
        }
    };

    const onChangePageByIndex = (pageRangeNumber: number) => {
        if (setPage) {
            setPage((prev) => ({ ...prev, page: pageRangeNumber }));
        }
        if (setParams) {
            setParams((prev: any) => ({ ...prev, page: pageRangeNumber }));
        }
    };

    return (
        <div className="flex justify-between" data-testid="pagination">
            <div>
                <p className="bodySmall italic text-tertiary-400 font-bold">Menampilkan {page} - {limit} dari {totalData}</p>
            </div>
            <div className="flex items-center gap-1">
                <button
                    onClick={() => handleOnChangePrev()}
                    data-testid="prev-button"
                    disabled={page <= 1}
                    className={cn('border-2 rounded-[4px] p-2 ml-2 bg-white', page >= totalPage ? 'border-tertiary-300' : 'border-tertiary-100')}
                >
                    <Icon
                        className={cn('text-base', page <= 1 ? 'text-tertiary-100' : 'text-tertiary-300')}
                        name="arrow-left"
                        size={24}
                    />
                </button>
                {paginationRange !== undefined && paginationRange.length > 0
                    ? paginationRange.map((pageNumber, index) => {
                        const pageRangeNumber: number = typeof pageNumber === 'number' ? pageNumber : 0;
                        if (pageNumber === DOTS) {
                            return (
                                <li className="pagination-item dots list-none px-2" key={index}>
                                    &#8230;
                                </li>
                            );
                        }

                        return (
                            <li
                                className={cn(
                                    'captionLarge cursor-pointer list-none px-4 py-2.5',
                                    pageNumber === page
                                        ? 'rounded-[4px] bg-primary-25 border-2 border-primary-500 text-primary-500'
                                        : 'text-primary-500'
                                )}
                                key={index}
                                onClick={() => onChangePageByIndex(pageRangeNumber)}
                            >
                                {pageNumber}
                            </li>
                        );
                    })
                    : null}
                <button
                    disabled={page >= totalPage}
                    onClick={() => handleOnChangeNext()}
                    data-testid="next-button"
                    className={cn('border-2 rounded-[4px] p-2 ml-2 bg-white', page >= totalPage ? 'border-tertiary-100' : 'border-tertiary-300')}
                >
                    <Icon
                        className={cn(
                            'cursor-pointer text-base',
                            page >= totalPage ? 'text-tertiary-100' : 'text-tertiary-300'
                        )}
                        name="arrow-right"
                        size={24}
                    />
                </button>
            </div>
        </div>
    );
};

export default Pagination;
