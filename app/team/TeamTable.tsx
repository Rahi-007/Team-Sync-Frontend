"use client";

import { SquarePen, Trash2 } from "lucide-react";
import { ITeam } from "@/interface/team.interface";
import { useDeleteTeamMutation } from "@/service/team.service";
import { ColDef, ICellRendererParams } from "ag-grid-community";
import DataTable from "@/components/layouts/DataTable";
import toast from "react-hot-toast";
import Link from "next/link";

interface IProps {
    data: ITeam[];
}

export default function TeamTable({ data }: IProps) {
    const [handleDelete] = useDeleteTeamMutation();

    const columnDefs: ColDef<ITeam>[] = [
        {
            headerName: "ID",
            field: "id",
            width: 50,
        },
        {
            headerName: "Team Name",
            field: "name",
            sortable: true,
            filter: true,
            flex: 1,
        },
        {
            headerName: "Team Leader Name",
            field: "teamLeader.name",
            sortable: true,
            filter: true,
            flex: 1,
        },
        {
            headerName: "Description",
            field: "narration",
            sortable: false,
            filter: false,
            flex: 2,
        },
        {
            headerName: "Total Members",
            valueGetter: (params) => params.data?.members.length ?? 0,
            sortable: false,
            filter: false,
            width: 120,
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
            cellRenderer: (params: ICellRendererParams<ITeam>) => (
                <div className="flex items-center justify-center gap-2 h-full">
                    <Link
                        href={`/team/${params.data?.id}`}
                    >
                        <SquarePen className="h-4 w-4 hover:text-blue-600" />
                    </Link>

                    <button
                        onClick={() => {
                            if (params.data?.id) {
                                handleDelete(params.data.id);
                                toast.success("Team deleted successful");
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