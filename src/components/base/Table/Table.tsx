import { IMeta } from '@/configs/types';
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
import { Dispatch, SetStateAction } from 'react';
import Pagination from './Pagination';
import TableBody from './TableBody';
import EmptyBody from './TableBody/EmptyBody';
import TableHead from './TableHead';
import TableBodyScroll from './TableBodyScroll';
import TableHeadScroll from './TableHeadScroll';

export interface TableProps<TData> {
    action?: boolean;
    columns: ColumnDef<TData, any>[];
    data: TData[];
    getRowCanExpand?: (row: Row<TData>) => boolean;
    handleDetail?: (args: Row<TData>) => void;
    handleStatus?: (args: Row<TData>) => void;
    handleEdit?: (args: Row<TData>) => void;
    handleDelete?: (args: Row<TData>) => void;
    isLoading: boolean;
    isPaginate?: boolean;
    limit?: number | undefined;
    meta?: IMeta;
    renderSubComponent?: (props: { row: Row<TData> }) => React.ReactElement;
    setPage?: Dispatch<SetStateAction<{ limit: number; page: number }>>;
    setSorting?: OnChangeFn<SortingState>;
    setParams?: Dispatch<SetStateAction<any>>;
    sorting?: SortingState;
    isNumbering?: boolean;
    isScroll?: boolean;
}

const Table = <TData extends object>({
    data,
    columns,
    renderSubComponent,
    getRowCanExpand,
    action,
    handleDetail,
    handleStatus,
    handleEdit,
    handleDelete,
    meta,
    setPage,
    isLoading,
    setSorting,
    setParams,
    sorting,
    limit,
    isPaginate,
    isNumbering,
    isScroll
}: TableProps<TData>) => {
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

    if (isLoading || !data.length) {
        return (
            <>
                <table className="w-full">
                    <TableHead table={table} />
                </table>
                <div className="mt-8" />
                <EmptyBody />
            </>
        );
    }

    return (
        <>
            <table className="w-full min-w-[768px] rounded-sm">
                {!isScroll ?
                    <TableHead action={action} table={table} isNumbering={isNumbering} />
                    : <TableHeadScroll action={action} table={table} isNumbering={isNumbering} />
                }
                {renderSubComponent && !isLoading ? (
                    <TableBody
                        action={action}
                        handleDelete={handleDelete}
                        handleDetail={handleDetail}
                        handleEdit={handleEdit}
                        handleStatus={handleStatus}
                        meta={meta}
                        renderSubComponent={renderSubComponent}
                        table={table}
                    />
                ) : (
                    <>
                        {!isScroll ?
                            <TableBody
                                action={action}
                                handleDelete={handleDelete}
                                handleDetail={handleDetail}
                                handleEdit={handleEdit}
                                handleStatus={handleStatus}
                                meta={meta}
                                table={table}
                                isNumbering={isNumbering}
                            />
                            :
                            <TableBodyScroll
                                action={action}
                                handleDelete={handleDelete}
                                handleDetail={handleDetail}
                                handleEdit={handleEdit}
                                handleStatus={handleStatus}
                                meta={meta}
                                table={table}
                                isNumbering={isNumbering}
                            />
                        }
                    </>
                )}
            </table>
            <div className="mt-[30px]" />
            {isPaginate && meta && setPage && (
                <Pagination
                    limit={limit}
                    meta={meta}
                    setPage={setPage}
                    setPageSize={table.setPageSize}
                    setParams={setParams}
                />
            )}
        </>
    );
};

Table.defaultProps = {
    isNumbering: true,
    isScroll: false,
    limit: 10
};

export default Table;
