import React, { useEffect, useState } from 'react';
import DataTable from '../common/DataTable/DataTable';

const columns = [
    { field: 'id', headerName: 'User ID', width: 130 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'username', headerName: 'Username', width: 130 },
    { field: 'email', headerName: 'E-mail', width: 130 },
];

const UserTable = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((json) => setUsers(json))
    }, []);
    // console.log(users)
    return (
        <DataTable
            rows={users}
            columns={columns}
            loading={!users.length}
        />
    );
};

export default UserTable;