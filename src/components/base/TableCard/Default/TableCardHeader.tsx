import { Table, flexRender } from '@tanstack/react-table';
export interface TableCardHeadProps {
    table: Table<any>;
}

const TableCardHeader = ({ table }: TableCardHeadProps) => {

    return (
        <thead className=" text-gray-500">

            {
                table.getHeaderGroups().map((headerGroup) =>
                    (<tr key={headerGroup.id}>
                        <th>
                        No
                        </th>
                        {headerGroup.headers.map((header) => {
                            let align = (header.column.columnDef?.meta as any)?.align;
                            return (<>
                                <th key={header.id} className={`px-2 py-3 text-${align}`}>
                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                </th>
                            </>);
                        })}
                    </tr>)
                )}

        </thead>
    );
};

export default TableCardHeader;
