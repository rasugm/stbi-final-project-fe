import { cn } from '@/utils/style';
import { Table, flexRender } from '@tanstack/react-table';
import Icon from '../../Icon';

export interface TableHeadProps {
    action?: boolean;
    table: Table<any>;
    isNumbering?: boolean;
}

const TableHead = ({ table, action, isNumbering }: TableHeadProps) => {
    return (
        <thead className="text-center text-base">
            {
                table.getHeaderGroups().map((headerGroup) => {
                    return (
                        <tr className="border-b border-t bg-primary-50 text-left font-semibold" key={headerGroup.id}>
                            {
                                isNumbering && (
                                    <th className="text-center w-[50px] text-tertiary-900 font-bold">
                                        No
                                    </th>
                                )
                            }

                            {headerGroup.headers.map((header) => {
                                
                                let align = (header.column.columnDef?.meta as any)?.align;

                                return (
                                    <th
                                        key={header.id}
                                        style={{
                                            width: header.getSize() !== 0 ? header.getSize() : undefined,
                                        }}
                                    >
                                        {header.isPlaceholder ? null : (
                                            <div
                                                {...{
                                                    className: cn(
                                                        'font-bold p-4 text-tertiary-900',
                                                        header.column.getCanSort() ? 'cursor-pointer select-none' : '',
                                                        header.getSize() ? `w-${header.getSize()}` : '',
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

TableHead.defaultProps = {
    isNumbering: true
};

export default TableHead;
