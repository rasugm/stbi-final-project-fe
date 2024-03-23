import { numberingColumn } from '@/utils/numberingColumn';
import { Table, flexRender } from '@tanstack/react-table';

export interface TableCardHeadProps {
    table: Table<any>;
    meta?: any
}

const TableCardBody = ({
    table,
    meta
}: TableCardHeadProps) => {
    return (
        <tbody>
            {
                table.getRowModel().rows.map((row) =>
                    (<tr key={row.id} className="bg-white shadow-xs">
                        <td className="p-3 text-center">
                            {meta && row ? numberingColumn(meta.page, meta.totalDataOnPage, row.index) : '-'}
                        </td>
                        {row.getVisibleCells().map((cell) =>{
                            
                            let align = (cell.column.columnDef?.meta as any)?.align;
                           
                            return (<td className={`p-3 text-${align}`} key={cell.id}>
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </td>);
                        })}
                    </tr>)
                )
            }

        </tbody>
    );
};

export default TableCardBody;
