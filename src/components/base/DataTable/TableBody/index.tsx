/* eslint-disable indent */

import { cn } from '@/utils/className';
import { flexRender, Row, Table } from '@tanstack/react-table';
import React, { Fragment } from 'react';

interface TableBodyProps<TData> {
    isLoading: boolean;
    renderSubComponent?: (props: { row: Row<TData> }) => React.ReactElement;
    table: Table<any>;
    type?: '1' | '2';
}

const TableBody = <TData extends object>({ table, renderSubComponent, type }: TableBodyProps<TData>) => {
    return (
        <tbody className={cn('w-full px-10', type === '2' && 'bg-gray-100 px-2 rounded-lg')}>
            {table.getRowModel().rows.map((row) => {
                return (
                    <Fragment key={row.id}>
                        <tr
                            className={cn(
                                'bg-white border-b border-gray-200 text-gray-700 hover:bg-gray-50 rounded-md',
                                type === '2' && 'border-b-[10px] border-gray-100'
                            )}
                        >
                            {row.getVisibleCells().map((cell) => {
                                return (
                                    <td
                                        key={cell.id}
                                        className={cn(
                                            'px-4 py-4 text-sm',
                                            cell.id.split('_')[1] === 'select' && 'px-3',
                                            cell.id.includes('expander') && 'bg-gray-100 text-center h-full w-5',
                                        )}
                                    >
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                );
                            })}
                        </tr>
                        {renderSubComponent
                            ? row.getIsExpanded() && (
                                  <tr>
                                      <td colSpan={row.getVisibleCells().length}>{renderSubComponent({ row })}</td>
                                  </tr>
                              )
                            : null}
                    </Fragment>
                );
            })}
        </tbody>
    );
};

export default TableBody;
TableBody.defaultProps = {
    renderSubComponent: undefined,
    type: '1',
};
