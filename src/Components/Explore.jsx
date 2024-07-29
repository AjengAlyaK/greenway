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
            sx={{ py: { xs: 4, sm: 6, md: 7 }, px: { xs: 2, sm: 5, md: 10 }, justifyContent: 'center', alignItems: 'center', }}
        >
            <Grid
                item
                container
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                xs={12}
            >
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 2, md: 4 }} justifyContent='center' alignItems='center' >
                    {ExploreContents.map((content, index) => (
                        <Paper
                            key={index}
                            sx={{
                                width: { xs: '100%', md: 345 },
                                height: { xs: 200, md: 250 },
                                p: { xs: 2, md: 3 },
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                bgcolor: '#5AC9A2',
                                color: '#ffffff',
                                borderRadius: 4
                            }}
                        >
                            <Typography py={1} sx={{ typography: { xs: 'h5', sm: 'h4' }, fontWeight: { xs: 'bold' } }}>{content.title}</Typography>
                            <Typography py={{ xs: 1, md: 2 }} sx={{ typography: { xs: 'body1' } }}>{content.subtitle}</Typography>
                        </Paper>
                    ))}
                </Stack>
            </Grid>
        </Grid >
    );
};

export default Explore;