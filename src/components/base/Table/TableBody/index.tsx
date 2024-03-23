/* eslint-disable max-len */
import ModalOptionsTable from '@/components/elements/Modal/ModalOptionsTable';
import { cn } from '@/utils/style';
import { flexRender, Row, Table } from '@tanstack/react-table';
import { Fragment, useState } from 'react';
import Icon from '../../Icon';
import { numberingColumn } from '@/utils/numberingColumn';

export interface TableBodyProps<TData> {
    table: Table<any>;
    action?: boolean;
    meta?: any,
    isNumbering?: boolean;
    handleDelete?: (args: Row<TData>) => void;
    handleDetail?: (args: Row<TData>) => void;
    handleEdit?: (args: Row<TData>) => void;
    handleStatus?: (args: Row<TData>) => void;
    renderSubComponent?: (props: { row: Row<TData> }) => React.ReactElement;
}

const TableBody = <TData extends object>({
    table,
    meta,
    renderSubComponent,
    action,
    handleDetail,
    handleStatus,
    handleEdit,
    handleDelete,
    isNumbering
}: TableBodyProps<TData>) => {
    const [showOptions, setShowOptions] = useState({ status: false, id: ' ' });

    const closeModal = () => {
        setShowOptions({ status: false, id: '' });
    };

    const onStatus = (row: Row<TData>) => {
        if (handleStatus) {
            handleStatus(row);
        }

        closeModal();
    };

    const onDetail = (row: Row<TData>) => {
        if (handleDetail) {
            handleDetail(row);
        }

        closeModal();
    };

    const onEdit = (row: Row<TData>) => {
        if (handleEdit) {
            handleEdit(row);
        }
        closeModal();
    };

    const onDelete = (row: Row<TData>) => {
        if (handleDelete) {
            handleDelete(row);
        }
        closeModal();
    };

    return (
        <tbody className="w-full">
            {
                table.getRowModel().rows.map((row) => {
                    return (
                        <Fragment key={row.id}>
                            <tr
                                className={cn('text-sm font-secondary caption-large border-b border-tertiary-50 text-tertiary-800 hover:bg-tertiary-25',
                                    row.index % 2 === 1 ? 'bg-[#F5F3FF]' : 'bg-white')}
                            >
                                {
                                    isNumbering && (
                                        <td className="text-center">
                                            <p className="caption-large font-semibold font-secondary">{meta && row ? numberingColumn(meta.page, meta.totalDataOnPage, row.index) : '-'}</p>
                                        </td>
                                    )
                                }

                                {row.getVisibleCells().map((cell) => {
                                    
                                    let align = (cell.column.columnDef?.meta as any)?.align;

                                    return (
                                        <>

                                            <td
                                                className={cn(
                                                    'p-4',
                                                    align ? `text-${align}` : '',
                                                )}
                                                key={cell.id}
                                                style={{
                                                    width: cell.column.getSize() !== 0 ? cell.column.getSize() : undefined,
                                                }}
                                            >
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                            </td>
                                        </>
                                    );
                                })}
                                {action ? (
                                    <td>
                                        <div className="relative">
                                            <Icon
                                                className="cursor-pointer"
                                                name="options-vertical"
                                                onClick={() =>
                                                    setShowOptions({
                                                        status: !showOptions.status,
                                                        id: row.id,
                                                    })
                                                }
                                            />
                                            <ModalOptionsTable
                                                open={showOptions.id === row.id ? showOptions.status : false}
                                            >
                                                {handleDetail ? (
                                                    <p className="modalOptionTableText" onClick={() => onDetail(row)}>
                                                        Lihat Detail
                                                    </p>
                                                ) : null}
                                                {handleEdit ? (
                                                    <p className="modalOptionTableText" onClick={() => onEdit(row)}>
                                                        Ubah Data
                                                    </p>
                                                ) : null}
                                                {handleStatus ? (
                                                    <p className="modalOptionTableText" onClick={() => onStatus(row)}>
                                                        Ubah Status
                                                    </p>
                                                ) : null}
                                                {handleDelete ? (
                                                    <p className="modalOptionTableText" onClick={() => onDelete(row)}>
                                                        Hapus Data
                                                    </p>
                                                ) : null}
                                            </ModalOptionsTable>
                                        </div>
                                    </td>
                                ) : null}
                            </tr>
                            {renderSubComponent
                                ? row.getIsExpanded() && (
                                    <tr>
                                        <td colSpan={row.getVisibleCells().length + 1}>
                                            {renderSubComponent({ row })}
                                        </td>
                                    </tr>
                                )
                                : null}
                        </Fragment>
                    );
                })}
        </tbody>
    );
};

TableBody.defaultProps = {
    isNumbering: true
};

export default TableBody;
