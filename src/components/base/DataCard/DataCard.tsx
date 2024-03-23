/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Pagination from '../Pagination/Pagination';
import { TMeta } from './constant';
import { BsGrid } from 'react-icons/bs';
import { IL_DATA_NOT_FOUND } from '@/configs/images';
import { CgSpinner } from 'react-icons/cg';
import { cn } from '@/utils/className';

type TParamsPagination = {
    page: number;
    size: number;
};

type TParams = {
    [key: string]: any;
};
interface Props<TDataItem> {
    action?: (param: TParams & TParamsPagination) => void;
    children: React.ReactNode | (({ data }: { data: TDataItem[] }) => React.ReactNode);
    className?: string;
    data: TDataItem[];
    header?: React.ReactNode | (() => React.ReactNode);
    hideEmptyData?: boolean;
    isLoading?: boolean;
    meta?: TMeta;
    params?: TParams;
    sizeOptions?: number[];
    textEmptyData?: string;
}

function DataCard<TDataItem extends object>(props: Props<TDataItem>) {
    const {
        action,
        meta,
        data,
        children,
        sizeOptions,
        header,
        textEmptyData,
        isLoading,
        className,
        hideEmptyData,
        params,
    } = props;
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(sizeOptions?.[0] || 15);

    useEffect(() => {
        setPage(1);
        action?.({ size, page: 1 });
    }, [size]);

    useEffect(() => {
        setPage(1);
        action?.({ size, page: 1, ...params });
    }, [...Object.values(params || {})]);

    const handleChangePage = (selectedPage: number) => {
        setPage(selectedPage);
        action?.({ page: selectedPage, size, ...params });
    };

    const firstIndex = data.length ? (page - 1) * size + 1 : 0;
    const lastIndex = (meta?.totalDataOnPage || 0) + size * (page - 1);

    const entry = (
        <div className="flex items-center justify-end gap-2">
            <BsGrid color="red" />
            <select
                className="p-2 outline-none bg-transparent cursor-pointer"
                onChange={(e) => setSize(Number(e.target.value))}
                value={size}
            >
                {sizeOptions?.map((el, idx) => (
                    <option key={idx} value={el}>
                        {el} Entry
                    </option>
                ))}
            </select>
        </div>
    );

    const emptyData = !hideEmptyData ? (
        <div className="flex flex-col items-center justify-center w-full py-16">
            <img alt="no-data" className="" src={IL_DATA_NOT_FOUND} />
            <h5 className="my-5 text-lg font-medium text-center text-gray-800">{textEmptyData}</h5>
        </div>
    ) : (
        <></>
    );

    const loading = (
        <div className="flex flex-col items-center justify-center w-full py-5 h-60">
            <CgSpinner size={70} strokeWidth={1} className="text-primary-500 animate-spin" />
        </div>
    );

    return (
        <div className={cn('rounded-[10px] p-4 bg-white border border-[#EAECF0]', className)}>
            <div className="grid items-center grid-cols-12 gap-4 mb-10">
                <div className="col-span-12 sm:col-span-9">{typeof header === 'function' ? header?.() : header}</div>
                <div className="sm:col-span-3 col-span-12">{entry}</div>
            </div>
            {isLoading ? loading : !data?.length && emptyData}
            {typeof children === 'function' ? children({ data }) : children}
            <div className="flex justify-between mt-10 items-center">
                <span className="font-bold text-xs text-[#828282] italic">
                    Showing {firstIndex} to {lastIndex} of {meta?.totalData || 0} entries
                </span>

                <Pagination
                    activePage={page}
                    changePage={handleChangePage}
                    totalPage={meta?.totalPage || 1}
                    icon="arrow"
                    outline={'outlined'}
                    variant="rounded"
                    color="soft-primary"
                />
            </div>
        </div>
    );
}

DataCard.defaultProps = {
    action: () => {},
    className: '',
    header: undefined,
    isLoading: false,
    meta: undefined,
    params: {},
    sizeOptions: [15, 30],
    textEmptyData: 'Data tidak tersedia',
    hideEmptyData: false,
};
export default DataCard;
