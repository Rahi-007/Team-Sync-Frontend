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
import { useGetAllUsersQuery } from "@/service/user.service";
import { IUser } from "@/interface/user.interface";
import { Button } from "@/components/ui/button";
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
        width: 100,
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
        width: 120,
    },
    {
        headerName: "Created By",
        valueGetter: (params) => params.data?.createdBy?.name ?? "-",
        sortable: true,
        filter: true,
        flex: 1,
    },
    {
        headerName: "Updated By",
        valueGetter: (params) => params.data?.updatedBy?.name ?? "-",
        sortable: true,
        filter: true,
        flex: 1,
    },
    {
        headerName: "Created At",
        field: "createdAt",
        valueFormatter: (params) =>
            params.value
                ? new Date(params.value).toLocaleDateString()
                : "-",
        flex: 1,
    },
    {
        headerName: "Updated At",
        field: "updatedAt",
        valueFormatter: (params) =>
            params.value
                ? new Date(params.value).toLocaleDateString()
                : "-",
        flex: 1,
    },
    {
        headerName: "Action",
        field: "id",
        width: 140,
        sortable: false,
        filter: false,
        cellRenderer: () => (
            <div className="flex items-center gap-2 h-full">
                <Button
                    size="icon"
                    variant="outline"
                // onClick={() => handleEdit(params.data)}
                >
                    <SquarePen className="h-4 w-4" />
                </Button>

                <Button
                    size="icon"
                    variant="destructive"
                // onClick={() => handleDelete(params.data.id)}
                >
                    <Trash2 className="h-4 w-4" />
                </Button>
            </div>
        ),
    },
];

export default function UserTable() {
    const { data, isLoading } = useGetAllUsersQuery();
    return (
        <div className="h-135">
            <AgGridReact
                pagination
                animateRows
                rowData={data}
                theme={themeBalham}
                columnDefs={columnDefs}
                paginationPageSize={10}
                rowSelection="multiple"
            />
        </div>
    );
}