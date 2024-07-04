import React, { useState } from 'react';
import BasicCard from '../../Components/common/BasicCard/BasicCard';
import SearchBar from '../../Components/common/SearchBar/SearchBar';
import RefreshIcon from '@mui/icons-material/Refresh';
import { IconButton, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import CommonButton from '../../Components/common/CommonButton/CommonButton';
import GridWrapper from '../../Components/common/GridWrapper/GridWrapper';
import { cardHeaderStyles } from './styles';
import NewUserModal from '../../Components/Modals/NewUserModal/NewUserModal';

const Authentication = () => {
    const [open, setOpen] = useState(false);
    console.log(open);
    const getHeader = () => {
        const handleChange = (value) => {
            console.log(value);
        };

        const addUser = () => {
            setOpen(true);
        };

        return (
            <Box sx={cardHeaderStyles.wrapper}>
                <SearchBar
                    placeholder="Search by email address, phone number, or user UID"
                    onChange={(event) => handleChange(event.target.value)}
                    searchBarWidth={'600px'}
                />
                <Box>
                    <CommonButton
                        variant="contained"
                        onClick={addUser}
                        size="large"
                        sx={cardHeaderStyles.addUserButton}
                    >
                        Add User
                    </CommonButton>
                    <IconButton>
                        <RefreshIcon />
                    </IconButton>
                </Box>
            </Box>
        )
    };

    const getContent = () => (
        <Typography
            align="center"
            sx={{ margin: '40px 16px', color: 'rgba(0, 0, 0, 0.6)', fontSize: '1.3rem' }}
        >
            No users for this project yet
        </Typography>
    )
    return (
        <GridWrapper>
            <BasicCard
                header={getHeader()}
                content={getContent()}
            />
            <NewUserModal open={open} onClose={() => setOpen(false)} />
        </GridWrapper>
    );
};

export default Authentication;