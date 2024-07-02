import React from 'react';
import Grid from '@mui/material/Grid';
import BasicCard from '../../Components/common/BasicCard/BasicCard';
import SearchBar from '../../Components/common/SearchBar/SearchBar';
import RefreshIcon from '@mui/icons-material/Refresh';
import { IconButton, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import CommonButton from '../../Components/common/CommonButton/CommonButton';

const Authentication = () => {
    const getHeader = () => {
        const handleChange = (value) => {
            console.log(value);
        };

        const addUser = () => {
            console.log('click');
        };

        const headerStyles = {
            wrapper: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingLeft: '20px',
                paddingRight: '20px',
                height: '65px',
                backgroundColor: '#f5f5f5',
                BorderBottom: '1px solid rgba(0, 0, 0, 0.12)',
            },
            addUserButton: {
                fontSize: '1.05rem',
            },
        };

        return (
            <Box sx={headerStyles.wrapper}>
                <SearchBar
                    placeholder="Search by email address, phone number, or user UID"
                    onChange={(event) => handleChange(event.target.value)}
                />
                <Box sx={headerStyles.addUserButton}>
                    <CommonButton
                        variant="contained"
                        onClick={addUser}
                        size="large"
                        sx={headerStyles.addUserButton}
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
            sx={{margin: '40px 16px', color: 'rgba(0, 0, 0, 0.6)', fontSize: '1.3rem'}}
        >
            No users for this project yet
        </Typography>
    )
    return (
        <Grid item xs={12} sx={{ marginLeft: '320px', backgroundColor: '#eaeff1', padding: '48px 32px', minHeight: 'calc(100vh - 166px)', position: 'relative'}}>
            <BasicCard 
                header={getHeader()}
                content={getContent()}
            />
        </Grid>
    );
};

export default Authentication;