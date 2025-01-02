import { Grid, Paper, Stack, Typography } from '@mui/material';

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
];

const Explore = () => {
    return (
        <Grid
            container
            display="flex"
            justifyContent="space-between"
            spacing={{
                xs: 3,
                md: 4
            }}
            sx={{
                px: { xs: 2, sm: 5, md: 13 },
                py: { xs: 3, md: 5 }
            }}
        >
            {ExploreContents.map((content, index) => (
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    key={index}
                >
                    <Paper
                        sx={{
                            bgcolor: '#5AC9A2',
                            borderRadius: 3,
                            px: 2,
                            py: 4, 
                            height: '100%', 
                        }}
                    >
                        <Stack
                            spacing={2}
                        >
                            <Typography
                                sx={{
                                    color: '#ffffff',
                                    fontWeight: { xs: 'bold', sm: 'bold', md: 'bold' },
                                    typography: { xs: 'h6', md: 'h4' }
                                }}
                            >
                                {content.title}
                            </Typography>
                            <Typography
                                sx={{
                                    color: '#ffffff',
                                    typography: 'body'
                                }}
                            >
                                {content.subtitle}
                            </Typography>
                        </Stack>
                    </Paper>
                </Grid>
            ))}
        </Grid>
    );
};

export default Explore;