import { Grid, Stack, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <Grid
            container
            spacing={5}
            sx={{ flexGrow: 1, 
                pb: 5, 
                px: { xs: 2, md: 13 }, 
            bgcolor: "#004847" }}
        >
            <Grid
                item
                container
                spacing={3}
                xs={12}
                // sx={{flexGrow: 1}}
            >
                <Grid
                    item
                    spacing={3}
                    md={5}
                    xs={12}
                >
                    <Stack spacing={2}>
                        <Typography sx={{ color: 'white', fontWeight: 'bold' }} variant="h6">GreenWay</Typography>
                        <Typography sx={{ color: 'white' }} textAlign="justify">GreenWay is an application that supports sustainable tourism with the vision of tourism while preserving the ecosystem environment.</Typography>
                    </Stack>
                </Grid>
                <Grid
                    item
                    container
                    spacing={3}
                    xs={7}
                >
                    <Grid
                        item
                        spacing={2}
                        md={3}
                        xs={12}
                    >
                        <Stack spacing={2}>
                            <Stack>
                                <Typography sx={{ color: 'white', fontWeight: 'bold' }} variant="h6">Navigation</Typography>
                            </Stack>
                            <Stack>
                                <Typography sx={{ color: 'white' }}>Destination</Typography>
                                <Typography sx={{ color: 'white' }}>Campaign</Typography>
                                <Typography sx={{ color: 'white' }}>Community</Typography>
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid
                        item
                        spacing={2}
                        xs={12}
                        md={5}
                    >
                        <Stack spacing={2}>
                            <Typography sx={{ color: 'white', fontWeight: 'bold' }} variant="h6">Contact Us</Typography>
                            <Typography sx={{ color: 'white' }}>Contact us with our account if there are problems using the GreenWay website.</Typography>
                        </Stack>
                    </Grid>
                    <Grid
                        item
                        spacing={2}
                        md={4}
                        xs={12}
                    >
                        <Stack spacing={2}>
                            <Typography sx={{ color: 'white', fontWeight: 'bold' }} variant="h6">The Creator</Typography>
                            <Typography sx={{ color: 'white' }}>Ajeng Alya Kartika Sari</Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                item
                xs={12}
                spacing={2}
                display="flex"
                justifyContent="center"
                alignItems="center"
                // sx={{px: 5}}
            >
                <Typography sx={{color: 'white'}}>© 2024 GreenWay. All rights reserved.</Typography>
            </Grid>
        </Grid>
    );
};

export default Footer;