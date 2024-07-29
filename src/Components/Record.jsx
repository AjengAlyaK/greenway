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
        <Grid
            container
            spacing={{ xs: 0, md: 2 }}
            sx={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center', px: { xs: 2, md: 10 } }}
        >
            <Grid item
                xs={12}
                container
                sx={{ flexGrow: 1, bgcolor: '#5AC9A2', p: 5, width: '100%' }}
            >
                <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    spacing={3}
                    justifyContent="center" // Center items in the Stack horizontally
                    alignItems="center" // Center items in the Stack vertically
                    sx={{ width: '100%' }}
                >
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