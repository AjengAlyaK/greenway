import React from 'react';
import { Box, Button, Grid, Stack, Typography } from "@mui/material";

const HeroArea = () => {
    return (
        <Grid
            container
            spacing={{ xs: 5, md: 2 }}
            sx={{ flexGrow: 1, py: 0, px: {xs: 2, md: 10} }}
        >
            {/* Left Content */}
            <Grid
                sx={{ flexGrow: 1 }}
                item
                container
                md={6}
                xs={12}
                justifyContent="center"
                alignItems="center"
            >
                <Stack spacing={6}>
                    <Stack spacing={2}>
                        <Typography sx={{ color: '#006E6F', typography: { xs: 'h4', md: 'h2' }, fontWeight: {xs: 'bold'}, pt:{xs: 8, sm: 0}, textAlign: {xs: 'center', md:'justify'} }}>TRAVEL AND SAVE NATURE</Typography>
                        <Stack alignItems="flex-start" spacing={4}>
                            <Typography variant="body1" sx={{ fontSize: 16, textAlign: {xs: 'center', md:'justify'} }}>
                                Welcome to a new era of travel where adventure meets environmental stewardship. Your Gateway to Sustainable Exploration in Indonesia! Start your journey with us and traverse Indonesia in a more responsible, eco-conscious manner.
                            </Typography>
                            <Box>
                                <Button sx={{bgcolor: "#006E6F", textAlign: {xs: 'center', md:'justify'}}} variant="contained">Go Travel</Button>
                            </Box>
                        </Stack>
                    </Stack>
                </Stack>
            </Grid>
            {/* Right Content */}
            <Grid
                sx={{ flexGrow: 1 }}
                item
                container
                md={6}
                xs={12}
                justifyContent="center"
                alignItems="flex-start"
            >
                <Stack spacing={2}>
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/mostgreen.appspot.com/o/landing-1.png?alt=media&token=2ade045c-366c-4d8e-b44e-5951667d3fc1"
                            alt="https://firebasestorage.googleapis.com/v0/b/mostgreen.appspot.com/o/landing-1.png?alt=media&token=2ade045c-366c-4d8e-b44e-5951667d3fc1"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </Box>
                </Stack>
            </Grid>
        </Grid>
    );
}

export default HeroArea;