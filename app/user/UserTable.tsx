"use client";

import { ColDef } from "ag-grid-community";
import { IUser } from "@/interface/user.interface";
import { SquarePen, Trash2 } from "lucide-react";
import { ICellRendererParams } from "ag-grid-community";
import DataTable from "@/components/layouts/DataTable";
import Link from "next/link";

const columnDefs: ColDef<IUser>[] = [
    {
        headerName: "ID",
        field: "id",
        sortable: false,
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
        filter: true,
        flex: 1,
    },
    {
        headerName: "Gender",
        field: "gender",
        width: 120,
        valueFormatter: (params) => {
            switch (params.value) {
                case 0:
                    return "Male";
                case 1:
                    return "Female";
                default:
                    return "-";
            }
        },
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
        valueFormatter: (params) => {
            if (!params.value) return "-";

            const date = new Date(params.value);
            return `${date.toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
            })}, ${date.getFullYear()}`;
        },
        width: 100,
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
        cellRenderer: (params: ICellRendererParams<IUser>) => (
            <div className="flex items-center justify-center gap-2 h-full">
                <Link
                    href={`/user/${params.data?.id}`}
                >
                    <SquarePen className="h-4 w-4 hover:text-blue-600" />
                </Link>

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
        <DataTable
            rowData={data}
            columnDefs={columnDefs}
        />
    );
}