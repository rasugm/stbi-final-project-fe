import { Toast } from '@/components/base';
import Icon from '@/components/base/Icon';
import { TableCard } from '@/components/base/TableCard';
import { toRupiah } from '@/utils/common';
import { createColumnHelper } from '@tanstack/react-table';
import { format } from 'date-fns';
import { useRef, useState } from 'react';
import * as XLSX from 'xlsx';

type Props = {
    onChange: (e: any, file: any) => void;
    headers: any[];
};

const ExcelPreview = ({
    onChange,
    headers,
}: Props) => {

    const inputRef = useRef<HTMLInputElement>(null);
    const triggerInput = () => inputRef?.current?.click();

    const [excelData, setExcelData] = useState<any>([]);

    const checkTypeFile = (file: any) => {
        const allowedTypes = ['xlsx', 'xls'];
        const fileType = file.name.split('.').pop();
        if (allowedTypes.indexOf(fileType) === -1) {
            return Toast({ type: 'error', title: 'File excel tidak sesuai format' });
        } else {
            return true;
        }
    };

    const checkSizeFile = (file: any) => {
        const size = file.size / 1024 / 1024;
        if (size > 10) {
            return Toast({ type: 'error', title: 'Ukuran file excel maksimal 10MB' });
        } else {
            return true;
        }
    };

    const handleChange = (e: any) => {
        const file = e.target.files[0];
        if (!checkTypeFile(file)) return;
        if (!checkSizeFile(file)) return;
        if (file) {
            const reader = new FileReader();

            reader.onload = (event) => {
                if (event?.target?.result !== null) {
                    const data = event?.target?.result;
                    const workbook = XLSX.read(data, { type: 'binary' });

                    // Assuming there's only one sheet in the Excel file
                    const sheetName = workbook.SheetNames[0];
                    const sheet = workbook.Sheets[sheetName];

                    // Convert sheet data to JSON
                    const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

                    // Remove empty rows
                    const filteredData = jsonData.filter((row: any) => row.length > 0);

                    // Assuming the first row contains headers
                    const rawHeaders = filteredData[0] as string[];
                    let listHeaders = rawHeaders.map((h) => h.toLowerCase().replace(/\s/g, '_'));
                    // Get index of listHeaders from const headers
                    const arrayIndex:number[] = [];

                    headers.forEach((header) => {
                        const index = listHeaders.findIndex((item) => item === header.key);
                        if (index !== -1) {
                            arrayIndex.push(index);
                        }
                    });

                    // CHECK IF ALL HEADERS ARE AVAILABLE
                    if (arrayIndex.length !== headers.length) {
                        return Toast({ type: 'error', title: 'File excel tidak sesuai format' });
                    } else {
                        // Get data from excel
                        const dataExcel = filteredData.slice(1).map((row: any) => {
                            const dataRow = {} as any;
                            arrayIndex.forEach((data) => {
                                dataRow[listHeaders[data]] = row[data];
                            });
                            return dataRow;
                        });

                        setExcelData(dataExcel);
                        onChange(dataExcel, file);
                    }

                }
            };

            reader.readAsBinaryString(file);
        }
    };

    const columnHelper = createColumnHelper<any>();
    const columnTableBillings = () => {
        return headers.map((header) => {
            return (
                columnHelper.accessor(header.key, {
                    enableSorting: false,
                    header: () => {
                        if(header.customHeader){
                            return header.customHeader;
                        } else {
                            return header.name;
                        }
                    },
                    size: 200,
                    meta: {
                        align: header.type === 'currency' ? 'right' : 'left'
                    },
                    cell: (props) => {
                        let data = props.getValue();
                        
                        if(header.type === 'currency'){
                            return toRupiah(data);
                        }

                        if(header.type === 'date'){
                            return format(new Date(data), 'dd/MM/yyyy HH:mm:ss');
                        }

                        return data;
                        
                    }
                })
            );
        });
    };


    return (
        <div>
            {excelData.length > 0 ?
                <div className="mt-3">
                    <TableCard
                        columns={columnTableBillings()}
                        data={excelData ?? []}
                        getRowCanExpand={() => false}
                        limit={15}
                        isPaginate={false}
                        meta={{
                            page: 1,
                            totalData: excelData.length,
                            totalDataOnPage: excelData.length,
                            totalPage: 1,
                        }}
                    />
                </div>
                : <div
                    onClick={triggerInput}
                    className="w-full cursor-pointer rounded-md flex items-center justify-center mt-2 border-dashed border-2 border-tertiary-300 h-[300px]"
                >
                    <div className="flex flex-col items-center justify-center gap-2">
                        <Icon name="file" size="50" className="text-tertiary-300" />
                        <div className="flex flex-col items-center justify-center">
                            <p className="text-primary-500">
                                Upload File
                            </p>
                            <small className="text-tertiary-400">Excel up to 10MB</small>
                        </div>
                    </div>
                    <input
                        accept=".xlsx, .xls"
                        onChange={handleChange}
                        ref={inputRef}
                        style={{ display: 'none' }}
                        type="file"
                    />
                </div>}

        </div>
    );
};

export default ExcelPreview;
