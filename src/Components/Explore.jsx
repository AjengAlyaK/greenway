import { Grid, Paper, Stack, Typography } from '@mui/material';
import React from 'react';

const ExploreContents = [
    {
        id: 0,
        title: "Explore Destinations",
        subtitle: "Explore travel destination and share experience with exploler."
    },
    {
        id: 1,
        title: "Sustainable Journeys",
        subtitle: "Discover our curated selection of campaign destinations."
    },
    {
        id: 2,
        title: "Green Travel Actions",
        subtitle: "Learn about our initiatives for sustainable travel awareness."
    },
]

const Explore = () => {
    return (
        <Grid
            container
            spacing={2}
            // sx={{py: 5}}
            sx={{ py: 7, px: 10, justifyContent: 'center', alignItems: 'center' }}
        >
            <Grid
                item
                container
                sx={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                xs={12}
                md={6}
            >
                <Stack direction='row' spacing={4} justifyContent='center' alignItems='center'  sx={{ px: 10 }}>
                    {ExploreContents.map((content, index) => (
                        <Paper
                            key={index}
                            sx={{
                                width: 345,
                                height: 250,
                                p: 3,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                bgcolor: '#5AC9A2',
                                color: '#ffffff',
                                borderRadius: 4
                            }}
                        >
                            <Typography variant="h4" py={1} sx={{ fontWeight: 'bold' }}>{content.title}</Typography>
                            <Typography py={2}>{content.subtitle}</Typography>
                        </Paper>
                    ))}
                </Stack>
            </Grid>
        </Grid>
    );
};

export default Explore;