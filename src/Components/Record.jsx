import { Box, Grid, Paper, Stack, Typography } from '@mui/material';
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
        <Box
            sx={{
                px: { xs: 2, sm: 5, md: 13 },
            }}
        >
            <Grid
                container
                sx={{
                    bgcolor: '#5AC9A2',
                    p: 3,
                }}
            >
                {RecordContents.map((content, index) => (
                    <Grid
                        item
                        key={index}
                        xs={12}
                        sm={6}
                        md={3}
                        sx={{
                            p: 2
                        }}
                    >
                        <Paper
                            sx={{
                                borderRadius: 1
                            }}
                        >
                            <Box
                                sx={{
                                    p: 5
                                }}
                            >
                                <Stack
                                    spacing={{ xs: 1, md: 2 }}
                                >
                                    <Typography
                                        sx={{
                                            typography: "h4",
                                            fontWeight: "bold",
                                            color: "#006E6F",
                                            textAlign: "center"
                                        }}
                                    >
                                        {content.count}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            typography: "body",
                                            fontWeight: "bold",
                                            textAlign: "center",
                                        }}
                                    >
                                        {content.title}
                                    </Typography>
                                </Stack>
                            </Box>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box >
    );
};

export default Record;