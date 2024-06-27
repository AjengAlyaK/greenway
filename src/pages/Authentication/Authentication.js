import React from 'react';
import Grid from '@mui/material/Grid';
import CommonButton from '../../Components/common/CommonButton/CommonButton';

const Authentication = () => {
    return (
        <Grid item xs={8} styles={{backgroundColor: '#009be5'}}>
            This is authentication page
            <CommonButton
                variant="contained"
            >
                Add User
            </CommonButton>
            <CommonButton
                variant="contained"
            >
                Web setup
            </CommonButton>
        </Grid>
    );
};

export default Authentication;