import React from 'react';
import Grid from '@mui/material/Grid';
import CommonButton from '../../Components/common/CommonButton/CommonButton';

const Authentication = () => {
    const buttonStyles = {
    
    }
    return (
        <Grid item xs={8}>
            This is authentication page
            <CommonButton
                variant="contained"
                sx={buttonStyles}
            >
                Add User
            </CommonButton>
            <CommonButton
                variant="outlined"
                sx={buttonStyles}
            >
                Add User
            </CommonButton>
        </Grid>
    );
};

export default Authentication;