import { Grid, Paper, Stack, Typography } from '@mui/material';
import React from 'react';

const RecordContents = [
    {
        id: 0,
        count: 14,
        title: "Initiatives"
    },
    {
        id: 0,
        count: 52,
        title: "Destinations"
    },
    {
        id: 0,
        count: 31,
        title: "Campaigns"
    },
    {
        id: 0,
        count: 25,
        title: "Articles"
    },
];

const Record = () => {
    return (
        <Grid container spacing={2}>
            <Grid item
                xs={12}
                container
                justifyContent="center"
                sx={{ flexGrow: 1 }}
            >
                <Stack direction={{xs: 'column', md: 'row'}} spacing={3} sx={{ p: 5, bgcolor: '#5AC9A2' }}>
                    {RecordContents.map((content, index) => (
                        <Paper
                            key={index}
                            sx={{
                                width: 237.7,
                                height: 180,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                p: 2
                            }}
                        >
                            <Typography variant="h4" py={1} sx={{ fontWeight: 'bold' }}>{content.count}</Typography>
                            <Typography variant="h6" sx={{ fontWeight: 549 }}>
                                {content.title}
                            </Typography>
                        </Paper>
                    ))}
                </Stack>
            </Grid>
        </Grid>
    );
};

export default Record;