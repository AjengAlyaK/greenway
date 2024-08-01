import { Grid, Paper, Typography } from '@mui/material';
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
            sx={{ px: { xs: 2, md: 13 } }}
        >
            {RecordContents.map((content, index) => (
                <Grid
                    item
                    key={index}
                    xs={12}
                    sm={6}
                    md={3}
                    sx={{ bgcolor: '#5AC9A2', py: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                    <Paper
                        sx={{
                            width: 250,
                            height: 160,
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
                </Grid>
            ))}
        </Grid>
    );
};

export default Record;