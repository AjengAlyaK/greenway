import React, { useEffect, useState } from 'react';
import DataTable from '../common/DataTable/DataTable';

const columns = [
    { field: 'id', headerName: 'User ID', width: 100 },
    { field: 'name', headerName: 'Name', width: 180 },
    { field: 'username', headerName: 'Username', width: 150 },
    { field: 'email', headerName: 'E-mail', width: 210 },
];

const UserTableStyles = {
    height: '350px',
    width: '100%'
}

const UserTable = (onError) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((json) => setUsers(json))
            .catch({onError})
    });
    // console.log(users)
    return (
        <DataTable
            rows={users}
            columns={columns}
            loading={!users.length}
            sx={UserTableStyles}
        />
    );
};

export default UserTable;