'use client'
import React, { forwardRef, memo, useCallback, useEffect, useState } from "react";
import { Table, TableHeader, TableBody, TableRow, TableCell, TableHead } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious } from "../ui/pagination";
import { ChevronLeftIcon, ChevronRightIcon, Eye, Pen, Rows, Trash, View } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { ReusableFormElement, ReusableFormProps } from "./reusable-form-element";
import Swal from 'sweetalert2'
import { apiService } from "@/scripts/api-service";
import moment, { lang } from "moment-timezone";
import "@/helpers/extensions/client_helper";
import ColumnMap from '@/types/ColumnMap';


export type DynamicKeyValue = { [key: string]: string | number | readonly string[] | Array<any> };

export type InputType = "text" | "number" | "select" | "checkbox" | "radio" | "date" | "datetime-local" | "time";

export type DataTableActionProps = {
    createable?: boolean;
    showable?: boolean;
    updateable?: boolean;
    deleteable?: boolean;
}

export type CrudInfo = {
    createColumns?: ReusableFormProps[];
    updateColumns?: ReusableFormProps[];
    detailColumns?: ReusableFormProps[];
}



export type DataTableProps = {
    columnMap?: ColumnMap;
    columns: ReusableFormProps[];
    rows?: { [key: string]: string | number | boolean }[];
    crudInfo?: CrudInfo,
    actions?: DataTableActionProps;
    url?: string;
};

export type CrudMode = "create" | "update" | "show";

const getRowsByPaging = (rows: any[], currentPage: number, rowsPerPage: number) => {
    return rows.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);
}

const getRowValueForFormattedColumn = ({ rowValue, column }: { rowValue: any, column: ReusableFormProps }) => {
    if (column.type == "input") {
        if (column.format) {
            switch (column.elementType) {
                case "date":

                    rowValue = moment.utc(rowValue).format(column.format);

                    break;
                case "datetime-local":
                    rowValue = moment.utc(rowValue).format(column.format);
                    break;
                default:
                    break;
            }
        }
    }

    return rowValue;
}

const Datatable: React.FC<DataTableProps> = memo(
    forwardRef(({ columns, rows, actions, url, columnMap }, ref: React.Ref<HTMLTableElement>) => {



        const [refreshing, setRefreshing] = useState(false);
        const [crudMode, setCrudMode] = useState<CrudMode>("create");
        const [isModalOpen, setIsModalOpen] = useState(false);
        const [selectedRowIndex, setSelectedRowIndex] = useState<number>();
        const [modalInputs, setModalInputs] = useState<DynamicKeyValue>({});
        const [currentPage, setCurrentPage] = useState(1);
        const [rowsPerPage, setRowsPerPage] = useState(1);
        const [dataColumnMap, setDataColumnMap] = useState(columnMap);
        const [viewColumns, setViewColumns] = useState(dataColumnMap?.table || columns);
        const [viewRows, setViewRows] = useState(rows ?
            getRowsByPaging(rows, currentPage, rowsPerPage) : []
        );

        const handleRefresh = async (onDataLoaded?: (data:any) => void) => {
            setRefreshing(true);
            if (url) {
                await apiService.get(url).then(x => {
                    console.log("data", x.data);
                    setViewRows(x.data);

                    // if (columns.length < 1 && x.data.length > 0) {
                    //     columns = Object.keys(x.data[0]).map((x: any) => { return { name: x, label: x } });
                    //     setViewColumns(columns);
                    // }

                    if (onDataLoaded) {
                        onDataLoaded(x.data);
                    }

                });
            }
            
            setRefreshing(false);
        }



        const handlePageChange = (pageDir: number) => {
            if (currentPage + pageDir > 0 && currentPage + pageDir <= (rows?.length || 0) / rowsPerPage) {
                setCurrentPage(prev => prev + pageDir);
            }

        };

        const handleModalOpen = (isOpen: boolean, mode: CrudMode, selectedIndex?: number) => {
            if (selectedIndex !== undefined) {
                setModalInputs({ ...viewRows[selectedIndex] });
            }
            else {
                setModalInputs({});
            }
            setSelectedRowIndex(selectedIndex ?? undefined);
            setCrudMode(mode ?? "show");
            setIsModalOpen(isOpen);


        }

        const handleRowDelete = (id: number | string) => {
            Swal.fire({
                title: 'Silmek istediğinize emin misiniz?',
                text: "Bu işlem geri alınamaz!!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: "Evet",
                cancelButtonText: "İptal",
                background: "#1a202c",
            }).then(async (result) => {
                if (result.isConfirmed) {
                    if (url) {
                        await apiService.delete(url + "/" + id).then(res => {
                            Swal.fire({
                                title: res.msg,
                                icon: "success",
                                timer: 2000,
                            });
                            handleRefresh();
                        });

                    }
                }
            });


        }


        const handleRowUpdate = (index: number) => {

            if (actions?.updateable && url) {

                const row = viewRows[index];
                apiService.put(`${url}/${row.id}`, row).then(res => {
                    if (res.success) {
                        setViewRows([...viewRows])
                        Swal.fire({
                            title: res.msg,
                            icon: "success",
                            timer: 2000,
                        });
                    }
                    else {
                        Swal.fire({
                            title: res.msg,
                            icon: "error",
                            timer: 2000,
                        });
                    }
                })
            }
        }

        const handleModalSubmit = async () => {


            if ((actions?.createable || actions?.updateable) && url) {

                let submit_url = url;

                const method = crudMode === "create" ? "POST" : "PUT";
                if (method == "POST" && modalInputs?.id != undefined) {
                    delete modalInputs.id;
                }
                else if (method == "PUT") {
                    submit_url = submit_url + "/" + modalInputs.id;
                }




                const res = await apiService.request(submit_url,
                    method,
                    undefined,
                    modalInputs
                );


                if (res.success) {
                    Swal.fire({
                        title: res.msg,
                        icon: "success",
                        timer: 2000,
                    });
                    setIsModalOpen(false);
                    handleRefresh();
                }
                else {
                    Swal.fire({
                        title: res.msg,
                        icon: "error",
                        timer: 2000,
                    });
                }
            }

        }

        useEffect(() => {
            setViewRows(getRowsByPaging(rows || [], currentPage, rowsPerPage));
        }, [currentPage, rowsPerPage, rows]);

        const commonButtonClassName = "bg-gray-600 hover:bg-gray-700 cursor-pointer text-gray-300 hover:text-gray-200 border-white";



        useEffect(() => {
            handleRefresh();
        }, []);

        return (
            <div className="flex flex-col gap-2">
                <div className="flex justify-end">
                    {actions?.createable &&
                        <Button className={commonButtonClassName}
                            onClick={() => handleModalOpen(true, "create")}>Yeni Kayıt</Button>
                    }
                </div>
                <Table ref={ref} border={1}>
                    <TableHeader>

                        <TableRow>
                            {viewColumns.map((column) => (
                                <TableCell

                                    align="center"
                                    key={column.name}
                                    className="border border-gray-300 text-lg p-3"
                                >
                                    {column.label.toUpperCaseFirst()}
                                </TableCell>
                            ))}
                            {
                                (actions?.showable || actions?.updateable || actions?.deleteable) &&
                                <TableCell

                                    align="center"
                                    className="border border-gray-300 text-lg p-3"

                                >
                                    İşlemler
                                </TableCell>
                            }

                        </TableRow>
                    </TableHeader>
                    <TableBody key={refreshing ? 1 : 0} >
                        {viewRows.length > 0 && viewRows.map((row, index) => (
                            <TableRow key={index}>
                                {viewColumns.map((column) => {

                                    let rowValue = row[column.name];
                                    rowValue = getRowValueForFormattedColumn({ rowValue, column });

                                    return (
                                        <TableCell
                                            align="center"
                                            key={column.name}
                                            className="border-b border-l border-r border-gray-300 w-120"
                                            onClick={(e) => {

                                                if (!actions?.updateable) {
                                                    return;
                                                }

                                                const elementType = column.type;
                                                const editInput = document.createElement(elementType == "input" ? "input" : "select");
                                                editInput.setAttribute("class", "w-full h-full bg-gray-200 text-gray-900 border border-gray-300 rounded-md p-2");
                                               
                                                const input = e.currentTarget as HTMLTableCellElement
                                                const oldInnerText = `${input.innerText}`;
                                                let rowValue = viewRows[index][column.name];


                                                const type: InputType | undefined = column.elementType;



                                                if (elementType != "select") {
                                                    editInput.setAttribute("type", type ?? "text");
                                                }

                                                if (elementType == "input") {
                                                    let formatSt = "";
                                                    if (type == "datetime-local") {
                                                        formatSt = "YYYY-MM-DDTHH:mm";
                                                    }
                                                    else if (type == "date") {
                                                        formatSt = "YYYY-MM-DD";
                                                    }
                                                    rowValue = moment(rowValue).utcOffset(0).format(formatSt);
                                                    editInput.setAttribute("value", rowValue);
                                                    
                                                    editInput.onblur = (e) => {
                                                        let newValue = moment(editInput.value).format(formatSt);
                                                        if (newValue !== rowValue) {
                                                            viewRows[index][column.name] = moment(editInput.value).utcOffset(6).format(formatSt);
                                                            handleRowUpdate(index);
                                                            viewRows[index][column.name] = moment(editInput.value).utcOffset(3).format(formatSt);

                                                        }
                                                    }
                                                }
                                                else if (elementType == "select") {
                                                    column.options?.forEach((option: any) => {
                                                        const opt = document.createElement("option");
                                                        opt.value = option.value;
                                                        opt.innerText = option.label;
                                                        editInput.appendChild(opt);
                                                    });
                                                    editInput.value = rowValue;
                                                    editInput.onchange = (e) => {
                                                        const newValue = editInput.value;
                                                        if (newValue !== rowValue) {
                                                            viewRows[index][column.name] = newValue;
                                                            handleRowUpdate(index)
                                                        }
                                                    }
                                                }


                                                
                                                if(!input.children.length){
                                                    

                                                    input.innerText = '';
                                                    input.appendChild(editInput);
                                                }
                                                editInput.focus();



                                                editInput.addEventListener('blur', () => {
                                                    input.removeChild(editInput);
                                                    if(input.innerText == '')
                                                    {
                                                        input.innerText = oldInnerText;
                                                        // handleRefresh();
                                                    }
                                                   

                                                });



                                            }}
                                        >
                                            {rowValue}
                                        </TableCell>
                                    )
                                }

                                )}
                                {
                                    (actions?.showable || actions?.updateable || actions?.deleteable) &&
                                    <TableCell align="center" className="flex justify-center gap-2 border-b border-l border-r border-gray-300">
                                        {actions?.showable && <Button className={commonButtonClassName} onClick={() => handleModalOpen(true, "show", index)}><Eye /> Detay</Button>}
                                        {actions?.updateable && <Button className={commonButtonClassName} onClick={() => handleModalOpen(true, "update", index)}><Pen /> Düzenle</Button>}
                                        {actions?.deleteable && <Button onClick={() => handleRowDelete(row.id)} className={commonButtonClassName}><Trash /> Sil</Button>}
                                    </TableCell>
                                }

                            </TableRow>
                        ))
                        }
                    </TableBody>

                </Table>
                {
                    viewRows.length < 1 &&
                    <div
                        className="inset-0 border-b border-l border-r border-gray-300 text-center p-3"
                    >
                        Tabloda Veri Yok
                    </div>
                }

                <Pagination className="justify-end"

                >
                    <PaginationContent className={"flex items-center gap-5 my-5"}>
                        <PaginationItem className="flex items-center gap-1 cursor-pointer" onClick={() => handlePageChange(-1)}>
                            <ChevronLeftIcon className="size-4" aria-hidden="true" />
                            <span className="sr">Önceki</span>
                        </PaginationItem>
                        <PaginationItem className="cursor-pointer" onClick={() => setCurrentPage(1)}>1</PaginationItem>
                        <PaginationItem className="flex items-center gap-1 cursor-pointer" onClick={() => handlePageChange(1)}>
                            <span className="sr">Sonraki</span>
                            <ChevronRightIcon className="size-4" aria-hidden="true" />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>

                <Dialog open={isModalOpen} onOpenChange={setIsModalOpen} >

                    <DialogContent className="overflow-y-scroll max-h-[calc(100vh-200px)]">
                        <DialogTitle>{crudMode === "create" ? "Yeni Kayıt" : crudMode === "update" ? "Güncelle" : "Detay"}</DialogTitle>
                        <form className="grid grid-cols-1 py-5">
                            {columnMap?.getByCrudMode(crudMode).map((column) => (column.name !== "id" &&
                                <div key={column.name} className="flex flex-col gap-3">
                                    <label htmlFor={column.name} className="text-sm font-medium">
                                        {column.label.toUpperCaseFirst()} :
                                    </label>
                                    {

                                        <ReusableFormElement
                                            name={column.name}
                                            label={column.label}
                                            type={column?.elementType === "select" ? "select" : column?.type ?? "input"}
                                            elementType={column?.elementType ?? "text"}
                                            options={column?.options ?? []}
                                            required={true}
                                            defaultValue={selectedRowIndex !== undefined ? (viewRows[selectedRowIndex]?.[column.name] ?? undefined) : undefined}
                                            onChange={(value) => { modalInputs[column.name] = value; }}
                                            disabled={crudMode === "show"}
                                        />


                                    }

                                </div>
                            ))}
                        </form>
                        <div className="flex flex-row justify-end items-center gap-2 p-0 m-0">
                            <Button className="bg-gray-600 hover:bg-gray-700 cursor-pointer text-gray-300 hover:text-gray-200 border-white" 
                            onClick={() => setIsModalOpen(false)}>Kapat</Button>
                            {
                                crudMode !== "show" &&
                                <Button
                                    onClick={handleModalSubmit}
                                    type="submit"
                                    className="bg-blue-900 hover:bg-blue-950 cursor-pointer text-gray-300 hover:text-gray-200 border-white"
                                >
                                    {trans("common.save")}
                                </Button>
                            }
                        </div>

                    </DialogContent>
                </Dialog>


            </div>

        );
    })
);

export default Datatable;

