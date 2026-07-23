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
import {
  AgGridReact,
  type AgGridReactProps,
} from "ag-grid-react";


ModuleRegistry.registerModules([
    ClientSideRowModelModule,
    PaginationModule,
    TextFilterModule,
    NumberFilterModule,
    RowSelectionModule,
    ValidationModule,
]);

type DataTableProps<T> = AgGridReactProps<T> & {
  height?: string;
};

export default function DataTable<T>({
  height = "72.7vh",
  ...props
}: DataTableProps<T>) {
  return (
    <div style={{ height }}>
      <AgGridReact
        animateRows
        pagination
        paginationPageSize={10}
        paginationPageSizeSelector={[10, 20, 50, 100]}
        rowSelection={{ mode: "multiRow" }}
        theme={themeBalham.withParams({
          borderRadius: "8px",
          wrapperBorder: true,
          wrapperBorderRadius: "8px",
        })}
        {...props}
      />
    </div>
  );
}