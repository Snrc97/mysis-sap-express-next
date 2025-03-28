import React, { forwardRef, memo, useCallback, useEffect, useState } from "react";
import { Table, TableHeader, TableBody, TableRow, TableCell, TableHead } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious } from "../ui/pagination";
import { ChevronLeftIcon, ChevronRightIcon, Eye, Pen, Rows, Trash, View } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import "@/helpers/extensions/all.tsx";
import { ReusableFormElement, ReusableFormProps } from "./reusable-form-element";
import Swal from 'sweetalert2'

export type DynamicKeyValue = { [key: string]: string | number | readonly string[] | Array<any> };

export type InputType = "text" | "number" | "select" | "checkbox" | "radio" | "date" | "datetime-local" | "time";

export type DataTableActionProps = {
    createable?: boolean;
    showable?: boolean;
    updateable?: boolean;
    deleteable?: boolean;
}

export type DataTableProps = {
    columns: ReusableFormProps[];
    rows?: { [key: string]: string | number | boolean }[];
    actions?: DataTableActionProps;
    url?: string;
};

type ModelMode = "create" | "update" | "show";

const getRowsByPaging = (rows: any[], currentPage: number, rowsPerPage: number) => {
    return rows.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);
}

const Datatable: React.FC<DataTableProps> = memo(
    forwardRef(({ columns, rows, actions, url }, ref: React.Ref<HTMLTableElement>) => {


        const [refreshing, setRefreshing] = useState(false);
        const [modalMode, setModalMode] = useState<ModelMode>("create");
        const [isModalOpen, setIsModalOpen] = useState(false);
        const [selectedRowIndex, setSelectedRowIndex] = useState<number>();
        const [modalInputs, setModalInputs] = useState<DynamicKeyValue>({});
        const [currentPage, setCurrentPage] = useState(1);
        const [rowsPerPage, setRowsPerPage] = useState(1);
        const [viewColumns, setViewColumns] = useState(columns);
        const [viewRows, setViewRows] = useState(rows ?
            getRowsByPaging(rows, currentPage, rowsPerPage) : []
        );

        const handleOnRefresh = async () => {
            setRefreshing(true);
            if (url) {
                await fetch(url).then(x => x.json()).then(x => {
                    setViewRows(x.data);

                    if (columns.length < 1 && x.data.length > 0) {
                        columns = Object.keys(x.data[0]).map((x: any) => { return { name: x, label: x } });
                        setViewColumns(columns);
                    }

                    console.log(x.data);
                });
            }
            setRefreshing(false);
        }



        const handlePageChange = (pageDir: number) => {
            if (currentPage + pageDir > 0 && currentPage + pageDir <= (rows?.length || 0) / rowsPerPage) {
                setCurrentPage(prev => prev + pageDir);
            }

        };

        const handleModalOpen = (isOpen: boolean, mode: ModelMode, selectedIndex?: number) => {
            if (selectedIndex !== undefined) {
                setModalInputs({ ...viewRows[selectedIndex] });
            }
            else {
                setModalInputs({});
            }
            setSelectedRowIndex(selectedIndex ?? undefined);
            setModalMode(mode ?? "show");
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
            }).then((result) => {
                if (result.isConfirmed) {
                    if (url) {
                        fetch(url + "/" + id, {
                            method: "DELETE",
                        }).then(x => x.json()).then(res => {
                            Swal.fire({
                                title: res.msg,
                                icon: "success",
                                timer: 2000,
                            });
                            handleOnRefresh();
                        });
                    }
                }
            });


        }

        const handleModalSubmit = async () => {

            if ((actions?.createable || actions?.updateable) && url) {

                let submit_url = url;

                const method = modalMode === "create" ? "POST" : "PUT";
                if (method == "POST" && modalInputs?.id != undefined) {
                    delete modalInputs.id;
                }
                else if (method == "PUT") {
                    submit_url = submit_url + "/" + modalInputs?.id;
                }


                console.log(submit_url, " ", method);

                const response = await fetch(submit_url, {
                    method,
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(modalInputs),
                });

                const res = await response.json();
                if (response.ok) {
                    Swal.fire({
                        title: res.msg,
                        icon: "success",
                        timer: 2000,
                    });
                    setIsModalOpen(false);
                    handleOnRefresh();
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

       

        useEffect(()=>{
            handleOnRefresh();
        }, [])

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
                                {viewColumns.map((column) => (
                                    <TableCell
                                        align="center"
                                        key={column.name}
                                        className="border-b border-l border-r border-gray-300"
                                    >
                                        {row[column.name]}

                                    </TableCell>
                                ))}
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

                <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>

                    <DialogContent>
                        <DialogTitle>{modalMode === "create" ? "Yeni Kayıt" : modalMode === "update" ? "Güncelle" : "Detay"}</DialogTitle>
                        <form className="grid grid-cols-1 py-5">
                            {viewColumns.map((column) => (column.name !== "id" &&
                                <div key={column.name} className="flex flex-col gap-3">
                                    <label htmlFor={column.name} className="text-sm font-medium">
                                        {column.label.toUpperCaseFirst()} :
                                    </label>
                                    {

                                        <ReusableFormElement
                                            name={column.name}
                                            label={column.label}
                                            type={column?.inputType === "select" ? "select" : column?.type ?? "input"}
                                            inputType={column?.inputType ?? "text"}
                                            options={column?.options ?? []}
                                            required={true}
                                            defaultValue={selectedRowIndex !== undefined ? (viewRows[selectedRowIndex]?.[column.name] ?? undefined) : undefined}
                                            onChange={(value) => { modalInputs[column.name] = value; }}
                                            disabled={modalMode === "show"}
                                        />


                                    }

                                </div>
                            ))}
                        </form>
                        <div className="flex flex-row justify-end items-center gap-2 p-0 m-0">
                            <Button onClick={() => setIsModalOpen(false)}>Kapat</Button>
                            {
                                modalMode !== "show" &&
                                <Button
                                    onClick={handleModalSubmit}
                                    type="submit"
                                    className="bg-blue-900 hover:bg-blue-950 cursor-pointer text-gray-300 hover:text-gray-200 border-white"
                                >
                                    Kaydet
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

