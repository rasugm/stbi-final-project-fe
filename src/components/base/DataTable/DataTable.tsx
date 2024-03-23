/* eslint-disable react/no-multi-comp */
/* eslint-disable indent */

import {
    ColumnDef,
    getCoreRowModel,
    getExpandedRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    PaginationState,
    Row,
    SortingState,
    useReactTable,
} from '@tanstack/react-table';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { Select } from '../Field';
import TableHead from './TableHead';
import TableBody from './TableBody';
// import Pagination from './Pagination';
import { FaSpinner } from 'react-icons/fa6';
import clsx from 'clsx';
import IndeterminateCheckbox from '../IndeterminateCheckbox';
import { cn } from '@/utils/className';
import Pagination from '../TableCard/Pagination';

export type TMeta = {
    totalData: number; //totalElements
    totalDataOnPage: number; //numberOfElements
    page?: number;
    totalPage?: number;
};
export type TParamAction = {
    [key: string]: any;
    page: number;
};
export interface ReactTableProps<TData> {
    action?: (params: TParamAction) => void;
    columns: ColumnDef<TData, any>[];
    // Custom className when data is empty
    data: TData[];
    getRowCanExpand?: (row: Row<TData>) => boolean;
    hidePagination?: boolean;
    isLoading?: boolean;
    meta?: any;
    numbering?: boolean;
    onRowSelected?: (row: TData[]) => void;
    renderEmptyData?: () => React.ReactElement;
    renderSubComponent?: (props: { row: Row<TData> }) => React.ReactElement;
    selectable?: boolean;
    type?: '1' | '2';
    limit?: number;
    setPage?: Dispatch<SetStateAction<{ limit: number; page: number }>>;
    setParams?: Dispatch<SetStateAction<any>>;
}

const DataTable = <TData extends object>({
    data = [],
    columns,
    renderSubComponent,
    getRowCanExpand,
    isLoading,
    selectable,
    onRowSelected,
    setPage,
    setParams,
    meta,
    numbering,
    hidePagination,
    type,
    renderEmptyData,
    limit
}: ReactTableProps<TData>) => {
    const [sorting, setSorting] = useState<SortingState>([]);
    const [rowSelection, setRowSelection] = React.useState({});

    const [{ pageIndex, pageSize }, setPagination] = React.useState<PaginationState>({
        pageIndex: 0,
        pageSize: meta?.totalDataOnPage ?? 10,
    });
    const pagination = React.useMemo(() => {
        return {
            pageIndex,
            pageSize,
        };
    }, [pageIndex, pageSize]);

    const getTotalPage = () => {
        if (!meta) return undefined;
        return Math.floor(meta.totalData / meta.totalDataOnPage);
    };
    const table = useReactTable({
        data: data || [],
        pageCount: getTotalPage(),
        columns: !selectable
            ? !numbering
                ? columns
                : [
                    {
                        id: 'no',
                        header: () => <span>No</span>,
                        size: 10,
                        cell: ({ row }) => <div className="px-1">{row.index + pageIndex * pageSize + 1}</div>,
                    },
                    ...columns,
                ]
            : [
                {
                    id: 'select',
                    size: 10,
                    header: ({ table }) => (
                        <IndeterminateCheckbox
                            {...{
                                checked: table.getIsAllRowsSelected(),
                                indeterminate: table.getIsSomeRowsSelected(),
                                onChange: table.getToggleAllRowsSelectedHandler(),
                            }}
                        />
                    ),
                    cell: ({ row }) => (
                        <div className="px-1">
                            <IndeterminateCheckbox
                                {...{
                                    checked: row.getIsSelected(),
                                    disabled: !row.getCanSelect(),
                                    indeterminate: row.getIsSomeSelected(),
                                    onChange: row.getToggleSelectedHandler(),
                                }}
                            />
                        </div>
                    ),
                },
                ...columns,
            ],
        getCoreRowModel: getCoreRowModel(),
        getRowCanExpand,
        getExpandedRowModel: getExpandedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        state: {
            sorting,
            rowSelection,
            pagination,
        },
        manualPagination: meta ? true : false,
        onPaginationChange: setPagination,
        enableRowSelection: selectable,
        onRowSelectionChange: setRowSelection,
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        debugTable: false,
    });

    useEffect(() => {
        if (selectable && onRowSelected) {
            onRowSelected(table.getSelectedRowModel().flatRows.map((item) => item.original));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rowSelection, selectable]);

    const loading = (
        <div
            className="absolute top-0 h-full w-full grid place-content-center bg-gray-100/50 cursor-wait"
            data-testid="spinner-DataTable"
        >
            <FaSpinner className="text-2xl animate-spin" />
        </div>
    );

    const emptyData = (
        <>
            {renderEmptyData ? (
                renderEmptyData()
            ) : (
                <div className={cn('h-[200px] w-full grid place-content-center p-3', renderEmptyData)}>Data Empty</div>
            )}
        </>
    );

    return (
        <div className={cn(type === '2' && 'bg-gray-100 p-2 rounded-lg')}>
            <div className="overflow-x-auto">
                {selectable && (
                    <span className="text-sm text-gray-500 block mb-2">
                        {table.getSelectedRowModel().rows.length} Selected
                    </span>
                )}
                <div className="relative">
                    <table className={clsx('table-auto w-full rounded-[8px]')}>
                        <TableHead type={type} table={table} />
                        {renderSubComponent && !isLoading && data.length > 0 ? (
                            <TableBody
                                type={type}
                                table={table}
                                renderSubComponent={renderSubComponent}
                                isLoading={!!isLoading}
                            />
                        ) : (
                            <TableBody type={type} table={table} isLoading={!!isLoading} />
                        )}
                    </table>
                    {isLoading && loading}
                </div>
                <>{!isLoading && !data.length && emptyData}</>
            </div>
            {!isLoading && data.length > 0 && !hidePagination ? (
                <div className="mt-4 flex items-center gap-5 sm:justify-between justify-center sm:flex-row flex-col">
                    <div>
                        <Select
                            value={{
                                value: table.getState().pagination.pageSize,
                                label: `${table.getState().pagination.pageSize} Rows`,
                            }}
                            onChange={(e: any) => {
                                table.setPageSize(Number(e.value));
                            }}
                            options={[10, 20, 30, 40, 50].map((pageSize) => ({
                                value: pageSize,
                                label: `${pageSize} Rows`,
                            }))}
                            className="max-w-[200px]"
                        />
                    </div>
                    {/* <Pagination
                        activePage={table.getState().pagination.pageIndex + 1}
                        totalPage={table.getPageCount()}
                        changePage={(v: number) => {
                            if (action) {
                                action({ page: v });
                            }
                            table.setPageIndex(v);
                        }}
                    /> */}
                    {meta && (
                        <div className="mt-5">
                            <Pagination
                                limit={limit}
                                meta={meta}
                                setPage={setPage}
                                setPageSize={table.setPageSize}
                                setParams={setParams}
                            />
                        </div>
                    )}
                </div>
            ) : null}
        </div>
    );
};

export default DataTable;

DataTable.defaultProps = {
    isLoading: false,
    getRowCanExpand: undefined,
    renderSubComponent: undefined,
    selectable: false,
    numbering: false,
    hidePagination: false,
    meta: {
        totalData: 0,
        totalDataOnPage: 0,
        page: 0,
        totalPage: 0,
    },
    action: undefined,
    onRowSelected: undefined,
    renderEmptyData: undefined,
    type: undefined,
    limit: 10
};
