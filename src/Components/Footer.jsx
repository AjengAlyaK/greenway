import { Grid, Stack, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <Grid
            container
            spacing={2}
            sx={{ flexGrow: 1, py: 3, px: 10, bgcolor: "#004847" }}
        >
            <Grid
                item
                container
                spacing={2}
                xs={12}
            >
                <Grid
                    item
                    spacing={2}
                    xs={5}
                >
                    <Stack spacing={2}>
                        <Typography sx={{ color: 'white' }}>Lorem</Typography>
                        <Typography sx={{ color: 'white' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, quos!</Typography>
                    </Stack>
                </Grid>
                <Grid
                    item
                    container
                    xs={7}
                >
                    <Grid
                        item
                        spacing={2}
                        xs={4}
                    >
                        <Stack spacing={2}>
                            <Stack>
                                <Typography sx={{ color: 'white' }}>lorem</Typography>
                            </Stack>
                            <Stack>
                                <Typography sx={{ color: 'white' }}>Lorem</Typography>
                                <Typography sx={{ color: 'white' }}>lorem</Typography>
                                <Typography sx={{ color: 'white' }}>Lorem</Typography>
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid
                        item
                        spacing={2}
                        xs={4}
                    >
                        <Stack spacing={2}>
                            <Typography sx={{ color: 'white' }}>Contact Us</Typography>
                            <Typography sx={{ color: 'white' }}>Contact us with our account if there are problems using the GreenWay website.</Typography>
                        </Stack>
                    </Grid>
                    <Grid
                        item
                        spacing={2}
                        xs={4}
                    >
                        <Stack spacing={2}>
                            <Typography sx={{ color: 'white' }}>The Creator</Typography>
                            <Typography sx={{ color: 'white' }}>Ajeng Alya Kartika Sari</Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Footer;