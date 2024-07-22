import { Grid, Paper, Stack, Typography } from '@mui/material';
import React from 'react';

const Explore = () => {
    return (
        <Grid
            container
            spacing={2}
            sx={{flexGrow: 1, py: 5, px: 10}}
        >
            <Grid
                item
                container
                sx={{flexGrow: 1}}
                xs={12}
                md={6}
                justifyContent='center'
                alignItems='center'
            >
                <Stack direction='row'>
                    <Paper
                        sx={{
                            width: 250,
                            height: 160,
                            p: 2
                        }}
                    >
                        <Typography>Lorem ipsum dolor sit amet consectetur adipisicing.</Typography>
                        <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis!</Typography>
                    </Paper>
                </Stack>
            </Grid>
        </Grid>
    );
};

export default Explore;