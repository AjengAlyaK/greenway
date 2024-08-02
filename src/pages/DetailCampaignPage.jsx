import React from 'react';
import { Grid } from '@mui/material';

const temporary = "https://firebasestorage.googleapis.com/v0/b/mostgreen.appspot.com/o/hutan-lestari.jpg?alt=media&token=efb83375-f29a-46c7-925e-46a223f39bb0"
const DetailCampaignPage = () => {
    return (
        <Grid container spacing={2} sx={{ py: 13, px: { xs: 2, md: 13 } }}>
            <Grid item xs={12} >
                <img src={temporary} alt="img campaign" />
            </Grid>
        </Grid>
    );
};

export default DetailCampaignPage;