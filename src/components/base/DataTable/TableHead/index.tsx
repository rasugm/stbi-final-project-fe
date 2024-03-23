import { cn } from '@/utils/className';
import { flexRender, Table } from '@tanstack/react-table';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

interface TableHeadProps {
    table: Table<any>;
    type?: '1' | '2';
}

const TableHead = ({ table, type }: TableHeadProps) => {
    return (
        <thead>
            {table.getHeaderGroups().map((headerGroup) => {
                return (
                    <tr
                        key={headerGroup.id}
                        className={cn(
                            'bg-gray-200 border-t border-b border-grayModern-300 text-left font-semibold',
                            type === '2' && 'bg-gray-100 border-none'
                        )}
                    >
                        {headerGroup.headers.map((header) => {
                            return (
                                <th key={header.id} className={cn(header.id === 'expander' && 'bg-gray-100 w-5')}>
                                    {header.isPlaceholder ? null : (
                                        <div
                                            className={cn(
                                                'px-4 h-12 text-sm text-gray-700 flex items-center',
                                                header.column.getCanSort() && 'cursor-pointer select-none',
                                                header.id === 'no' && 'text-right min-w-[10px]',
                                                header.id === 'expander' && 'w-10 bg-gray-100',
                                                header.id === 'select' && 'min-w-[10px] !w-1'
                                            )}
                                            style={{ width: header.getSize() ?? '' }}
                                            onClick={() => header.column.getToggleSortingHandler()}
                                        >
                                            {flexRender(header.column.columnDef.header, header.getContext())}
                                            &nbsp;
                                            {{
                                                asc: <FiChevronUp />,
                                                desc: <FiChevronDown />,
                                            }[header.column.getIsSorted() as string] ?? null}
                                        </div>
                                    )}
                                </th>
                            );
                        })}
                    </tr>
                );
            })}
        </thead>
    );
};

export default TableHead;

TableHead.defaultProps = {
    type: undefined,
};
