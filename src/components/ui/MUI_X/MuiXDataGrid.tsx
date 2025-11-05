import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import type { GridColDef, GridValueFormatterParams } from '@mui/x-data-grid';

interface EmployeeRow {
  id: number;
  lastName: string;
  firstName: string;
  age: number | null;
  email: string;
  department: string;
  status: string;
  salary: number;
  hireDate: Date;
}

const generateRows = (): EmployeeRow[] => {
  const rows: EmployeeRow[] = [];
  for (let index = 0; index < 500; index++) {
    rows.push({
      id: index + 1,
      lastName: [
        'Snow', 'Lannister', 'Stark', 'Targaryen', 'Baratheon', 'Greyjoy',
        'Martell', 'Tully', 'Arryn', 'Tyrell'
      ][index % 10],
      firstName: [
        'Jon', 'Cersei', 'Arya', 'Daenerys', 'Robert', 'Theon',
        'Oberyn', 'Catelyn', 'Robin', 'Margaery'
      ][index % 10],
      age: 15 + (index % 50),
      email: `user${index + 1}@example.com`,
      department: [
        'Engineering', 'Marketing', 'Sales', 'Support', 'HR',
        'Finance', 'Product', 'Design', 'Operations', 'Legal'
      ][index % 10],
      status: [
        'Active', 'Inactive', 'On Leave', 'Probation', 'Suspended'
      ][index % 5],
      salary: 30000 + (index * 1000),
      hireDate: new Date(2020, 0, index + 1),
    });
  }
  return rows;
};

const salaryFormatter: GridValueFormatter = (params: GridValueFormatterParams) => {
  return params.value ? `$${(params.value as number).toLocaleString()}` : '';
};

const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
    width: 90,
    type: 'number',
  },
  {
    field: 'firstName',
    headerName: 'First Name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last Name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 250,
    editable: true,
  },
  {
    field: 'department',
    headerName: 'Department',
    width: 150,
    editable: true,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 120,
    editable: true,
  },
  {
    field: 'salary',
    headerName: 'Salary',
    type: 'number',
    width: 130,
    editable: true,
    valueFormatter: salaryFormatter,
  },
  {
    field: 'hireDate',
    headerName: 'Hire Date',
    type: 'date',
    width: 150,
    editable: true,
    valueGetter: (params: { row?: EmployeeRow }) => {
      if (!params.row || !params.row.hireDate) return null;
      return params.row.hireDate instanceof Date ? params.row.hireDate : new Date(params.row.hireDate);
    },
  }
];

const MuiXDataGrid = () => {
  const rows = generateRows();

  return (
    <div className="w-full h-[1000x] p-4 bg-white rounded-lg shadow-md">
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 15,
              page: 0
            },
          },
        }}
        pageSizeOptions={[15]}
        checkboxSelection
        disableRowSelectionOnClick
        className="bg-gray-50"
        sx={{
          '& .MuiDataGrid-root': {
            border: '1px solid rgba(0, 0, 0, 0.12)',
          },
          '& .MuiDataGrid-cell': {
            borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
          },
          '& .MuiDataGrid-columnHeader': {
            backgroundColor: 'rgba(0, 0, 0, 0.04)',
            fontWeight: 'bold',
          },
        }}
      />
    </div>
  );
};

export { MuiXDataGrid };
export default MuiXDataGrid;
