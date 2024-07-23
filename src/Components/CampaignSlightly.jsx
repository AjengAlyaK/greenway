import { Grid, Paper, Stack, Typography } from '@mui/material';
import React from 'react';

const test = [
    {
        index: 0,
        title: "test 1"
    },
    {
        index: 1,
        title: "test 2"
    },
    {
        index: 2,
        title: "test 3"
    },
    {
        index: 3,
        title: "test 4"
    },
]

const CampaignSlightly = () => {
    return (
        <Grid
            container
            spacing={2}
            sx={{ py: 7, px: 10, justifyContent: 'center', alignItems: 'center' }}
        // sx={{flexGrow: 1}}
        >
            <Grid
                item
                xs={12}
            sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
            >
                <Stack spacing={2} sx={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography variant="h3" sx={{ textAlign: 'center' }}>Campaign</Typography>
                    <Stack direction="row" spacing={2} sx={{ width: '100%', justifyContent: 'space-between', py: 5 }}>
                        {test.map((content, index) => (
                            <Paper
                                key={index}
                                sx={{
                                    width: 255,
                                    height: 190,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    p: 2
                                }}
                            >
                                {content.title}
                            </Paper>
                        ))}
                    </Stack>
                </Stack>
            </Grid>
        </Grid>
    );
};

export default CampaignSlightly;