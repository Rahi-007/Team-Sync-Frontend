"use client";

import {
    ModuleRegistry,
    ClientSideRowModelModule,
    PaginationModule,
    TextFilterModule,
    NumberFilterModule,
    ValidationModule,
    RowSelectionModule,
    themeBalham
} from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";
import { IUser } from "@/interface/user.interface";
import { SquarePen, Trash2 } from "lucide-react";

ModuleRegistry.registerModules([
    ClientSideRowModelModule,
    PaginationModule,
    TextFilterModule,
    NumberFilterModule,
    RowSelectionModule,
    ValidationModule,
]);

export const columnDefs: ColDef<IUser>[] = [
    {
        headerName: "ID",
        field: "id",
        width: 108,
    },
    {
        headerName: "First Name",
        field: "firstName",
        sortable: true,
        filter: true,
        flex: 1,
    },
    {
        headerName: "Last Name",
        field: "lastName",
        sortable: true,
        filter: true,
        flex: 1,
    },
    {
        headerName: "Phone",
        field: "phone",
        sortable: true,
        filter: true,
        flex: 1,
    },
    {
        headerName: "Address",
        field: "address",
        flex: 1,
    },
    {
        headerName: "Gender",
        field: "gender",
        width: 120,
    },
    {
        headerName: "Team",
        valueGetter: (params) => params.data?.team?.name ?? "-",
        sortable: true,
        filter: true,
        flex: 1,
    },
    {
        headerName: "RF ID",
        field: "rfId",
        flex: 1,
    },
    {
        headerName: "Created At",
        field: "createdAt",
        valueFormatter: (params) =>
            params.value
                ? new Date(params.value).toLocaleDateString()
                : "-",
        width: 80,
    },
    {
        headerName: "Action",
        field: "id",
        width: 140,
        sortable: false,
        filter: false,
        headerComponent: () => (
            <div className="w-full text-center font-semibold">
                Action
            </div>
        ),
        cellRenderer: () => (
            <div className="flex items-center justify-center gap-2 h-full">
                <button
                // onClick={() => handleEdit(params.data)}
                >
                    <SquarePen className="h-4 w-4" />
                </button>

                <button
                // onClick={() => handleDelete(params.data.id)}
                >
                    <Trash2 className="h-4 w-4 text-red-500" />
                </button>
            </div>
        ),
    },
];

interface IProps {
    data: IUser[];
}

export default function UserTable({ data }: IProps) {
    return (
        <div className="h-135">
            <AgGridReact
                pagination
                animateRows
                rowData={data}
                theme={themeBalham.withParams({
                    borderRadius: "8px",
                    wrapperBorder: true,
                    wrapperBorderRadius: "8px",
                })}
                // theme={themeBalham}
                columnDefs={columnDefs}
                paginationPageSize={10}
                paginationPageSizeSelector={[10, 20, 50, 100]}
                rowSelection={{ mode: "multiRow" }}
            />
        </div>
    );
}