import { cn } from '@/utils/style';
import { Table, flexRender } from '@tanstack/react-table';
import Icon from '../../Icon';

export interface TableHeadScrollProps {
    action?: boolean;
    table: Table<any>;
    isNumbering?: boolean;
}

const TableHeadScroll = ({ table, action, isNumbering }: TableHeadScrollProps) => {
    return (
        <thead className="text-center flex text-base w-full">
            {
                table.getHeaderGroups().map((headerGroup) => {
                    return (
                        <tr className="flex w-full border-b border-t bg-primary-50 text-left font-semibold" key={headerGroup.id}>
                            {
                                isNumbering && (
                                    <th className="text-center w-[100px]">
                                        No
                                    </th>
                                )
                            }

                            {headerGroup.headers.map((header) => {
                                let align = (header.column.columnDef?.meta as any)?.align;

                                return (
                                    <th
                                        className="w-full"
                                        key={header.id}
                                        
                                    >
                                        {header.isPlaceholder ? null : (
                                            <div
                                                {...{
                                                    className: cn(
                                                        'font-bold p-4 text-teritary-80',
                                                        header.column.getCanSort() ? 'cursor-pointer select-none' : '',
                                                        header.getSize() ? `w-full` : '',
                                                        align ? `text-${align}` : '',
                                                    ),
                                                    onClick: header.column.getToggleSortingHandler(),
                                                }}
                                            >
                                                {flexRender(header.column.columnDef.header, header.getContext())}
                                                {{
                                                    asc: <Icon name="chevron-down" size={16} />,
                                                    desc: <Icon name="chevron-up" size={16} />,
                                                }[header.column.getIsSorted() as string] ?? null}
                                            </div>
                                        )}
                                    </th>
                                );
                            })}
                            {action ? <th>Action</th> : null}
                        </tr>
                    );
                })
            }
        </thead>
    );
};

TableHeadScroll.defaultProps = {
    isNumbering: true
};

export default TableHeadScroll;
