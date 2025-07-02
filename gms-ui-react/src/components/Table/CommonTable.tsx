import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { useState } from 'react';

export interface TableColumn {
  field: string;
  header: string;
}

interface CommonTableProps<T> {
  value: T[];
  columns: TableColumn[];
  tableClassName?: string;
}

export function CommonTable<T extends object>({ value, columns, tableClassName }: CommonTableProps<T>) {
  const [globalFilter, setGlobalFilter] = useState('');
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);

  return (
    <div>
      <div className="flex justify-end mb-2">
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            value={globalFilter}
            onChange={e => setGlobalFilter(e.target.value)}
            placeholder="Search..."
            className="w-64"
          />
        </span>
      </div>
      <DataTable
        value={value}
        paginator
        rows={rows}
        first={first}
        onPage={e => {
          setFirst(e.first ?? 0);
          setRows(e.rows ?? 10);
        }}
        globalFilter={globalFilter}
        stripedRows
        showGridlines
        className={tableClassName}
        removableSort
      >
        {columns.map(col => (
          <Column
            key={col.field}
            field={col.field}
            header={col.header}
            sortable
            filter
            filterPlaceholder={`Search ${col.header}`}
          />
        ))}
      </DataTable>
    </div>
  );
}