import { numberingColumn } from '@/utils/numberingColumn';
import { cn } from '@/utils/style';
import { Table, flexRender } from '@tanstack/react-table';
import { useState } from 'react';
import Icon from '../../Icon';

export interface TableCardHeadProps {
    table: Table<any>;
    meta?: any,
    subComponent?: any,
}

const TableCardBody = ({
    table,
    meta,
    subComponent
}: TableCardHeadProps) => {

    const [collapsedRows, setCollapsedRows] = useState<Set<number>>(new Set());

    const toggleCollapse = (rowIndex: number) => {
        setCollapsedRows((prevCollapsedRows) => {
            const newCollapsedRows = new Set(prevCollapsedRows);
            if (newCollapsedRows.has(rowIndex)) {
                newCollapsedRows.delete(rowIndex);
            } else {
                newCollapsedRows.add(rowIndex);
            }
            return newCollapsedRows;
        });
    };

    return (
        <tbody>
            {
                table.getRowModel().rows.map((row) => (
                    <>
                        <tr key={row.id} className="tr-heading-data bg-white shadow-xs">
                            <td className="p-3 text-center">
                                <div
                                    className="focus:outline-none cursor-pointer"
                                    onClick={() => toggleCollapse(row.index)}
                                >
                                    {
                                        !collapsedRows.has(row.index) ?
                                            <Icon
                                                size="16"
                                                name={'chevron-right'}
                                                className={cn('text-gray-500', 'transform rotate-0', 'transition duration-500 ease-in-out')}
                                            />
                                            : <Icon
                                                size="16"
                                                name={'chevron-right'}
                                                className={cn('text-gray-500', 'transform rotate-90', 'transition duration-500 ease-in-out')}
                                            />
                                    }
                                </div>
                            </td>
                            <td className="p-3 text-center">
                                {meta && row ? numberingColumn(meta.page, meta.totalDataOnPage, row.index) : '-'}
                            </td>
                            {row.getVisibleCells().map((cell) => (
                                <td className="p-3" key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>)
                            )}
                        </tr>

                        {collapsedRows.has(row.index) ?
                            <tr 
                                className="bg-tertiary-100 tr-body-data shadow-xs"
                            >
                                <td className="rounded-none p-3" colSpan={table.getRowModel().rows[0].getVisibleCells().length + 2}>
                                    {subComponent(row)}
                                </td>
                            </tr>
                            : <> </>}

                    </>
                ))
            }

        </tbody>
    );
};

export default TableCardBody;
