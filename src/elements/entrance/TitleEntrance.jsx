import { Grid, Typography } from '@mui/material';
import React from 'react';

const TitleEntrance = () => {
    return (
        <Grid item container justifyContent="center">
            <Typography sx={{ typography: { xs: 'h3', md: 'h2' }, fontWeight: { xs: 'bold', md: 'bold' } }}><span style={{ color: '#006E6F' }}>Green</span>Way</Typography>
        </Grid>
    );
};

export default TitleEntrance;