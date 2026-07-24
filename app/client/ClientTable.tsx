"use client";

import { ColDef } from "ag-grid-community";
import { SquarePen, Trash2 } from "lucide-react";
import { ICellRendererParams } from "ag-grid-community";
import { useDeleteClientMutation } from "@/service/client.service";
import { IClient } from "@/interface/client.interface";
import DataTable from "@/components/layouts/DataTable";
import toast from "react-hot-toast";
import Link from "next/link";

interface IProps {
    data: IClient[];
}

export default function ClientTable({ data }: IProps) {
    const [deleteClient] = useDeleteClientMutation();

    const columnDefs: ColDef<IClient>[] = [
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
            cellRenderer: (params: ICellRendererParams<IClient>) => (
                <div className="flex items-center justify-center gap-2 h-full">
                    <Link
                        href={`/client/${params.data?.id}`}
                    >
                        <SquarePen className="h-4 w-4 hover:text-blue-600" />
                    </Link>

                    <button
                        onClick={() => {
                            if (params.data?.id) {
                                deleteClient(params.data.id);
                                toast.success("Client deleted successful");
                            }
                        }}                    >
                        <Trash2 className="h-4 w-4 text-red-500" />
                    </button>
                </div>
            ),
        },
    ];

    return (
        <DataTable
            rowData={data}
            columnDefs={columnDefs}
        />
    );
}