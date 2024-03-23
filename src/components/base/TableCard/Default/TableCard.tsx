import { IMeta } from '@/configs/types';
import TableCardBody from './TableCardBody';
import TableCardHeader from './TableCardHeader';

import {
    ColumnDef,
    OnChangeFn,
    Row,
    SortingState,
    getCoreRowModel,
    getExpandedRowModel,
    getPaginationRowModel,
    useReactTable,
} from '@tanstack/react-table';
import Pagination from '../Pagination';
import { Dispatch, SetStateAction } from 'react';
import { cn } from '@/utils/className';

// import { IMeta } from '@/configs/types';

export interface TableCardProps<TData> {
    // action?: boolean;
    columns: ColumnDef<TData, any>[];
    data: TData[];
    getRowCanExpand?: (row: Row<TData>) => boolean;
    // handleDetail?: (args: Row<TData>) => void;
    // handleStatus?: (args: Row<TData>) => void;
    // handleEdit?: (args: Row<TData>) => void;
    // handleDelete?: (args: Row<TData>) => void;
    isLoading?: boolean;
    isPaginate?: boolean;
    limit?: number | undefined;
    meta?: IMeta;
    // renderSubComponent?: (props: { row: Row<TData> }) => React.ReactElement;
    setPage?: Dispatch<SetStateAction<{ limit: number; page: number }>>;
    setSorting?: OnChangeFn<SortingState>;
    setParams?: Dispatch<SetStateAction<any>>;
    sorting?: SortingState;
    // isNumbering?: boolean;
    // isScroll?: boolean;
}

const TableCard = <TData extends object>({
    data,
    columns,
    // renderSubComponent,
    getRowCanExpand,
    // action,
    // handleDetail,
    // handleStatus,
    // handleEdit,
    // handleDelete,
    meta,
    setPage,
    isLoading,
    setSorting,
    setParams,
    sorting,
    limit,
    isPaginate,
}: // isPaginate,
    // isNumbering,
    // isScroll
    TableCardProps<TData>) => {
    const table = useReactTable({
        defaultColumn: {
            minSize: 0,
            size: 0,
        },
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getRowCanExpand,
        getExpandedRowModel: getExpandedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        state: {
            sorting,
        },
        onSortingChange: setSorting,
        manualSorting: true,
        debugTable: true,
    });

    return (
        <>
            <table
                className={cn(
                    'table-card p-3 bg-tertiary-50 rounded-lg text-gray-400 border-separate space-y-6 text-sm w-full',
                    isLoading && 'opacity-40'
                )}
            >
                <TableCardHeader table={table} />
                <TableCardBody table={table} meta={meta} />
            </table>

            {meta && (
                <div className="mt-5">
                    {isPaginate ? (
                        <Pagination
                            limit={limit}
                            meta={meta}
                            setPage={setPage}
                            setPageSize={table.setPageSize}
                            setParams={setParams}
                        />
                    ) : <></>}
                </div>
            )}
        </>
    );
};

TableCard.defaultProps = {
    isPaginate: true,
};

export default TableCard;
