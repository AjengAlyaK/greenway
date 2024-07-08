import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const DataTable = ({ rows, columns, loading }) => {
    return (
        <div style={{ height: 350, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} loading={loading} />
        </div>
    );
};

export default DataTable;