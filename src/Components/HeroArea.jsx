import React from 'react';
import { Box, Button, Grid, Stack, Typography } from "@mui/material";

const HeroArea = () => {
    return (
        <Grid
            container
            spacing={{ xs: 15, md: 2 }}
            sx={{ flexGrow: 1, py: 0, px: 10 }}
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
                        <Typography variant="h2" sx={{fontWeight: 500}}>TRAVEL AND</Typography>
                        <Typography variant="h2">SAVE NATURE</Typography>
                        <Stack alignItems="flex-start" spacing={4}>
                            <Typography sx={{ fontSize: 16, textAlign: "justify" }}>
                                Welcome to a new era of travel where adventure meets environmental stewardship. Your Gateway to Sustainable Exploration in Indonesia! Start your journey with us and traverse Indonesia in a more responsible, eco-conscious manner.
                            </Typography>
                            <Box>
                                <Button variant="contained">Go Travel</Button>
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
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end'}}>
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/mostgreen.appspot.com/o/landing-1.png?alt=media&token=2ade045c-366c-4d8e-b44e-5951667d3fc1"
                            alt="https://firebasestorage.googleapis.com/v0/b/mostgreen.appspot.com/o/landing-1.png?alt=media&token=2ade045c-366c-4d8e-b44e-5951667d3fc1"
                            style={{ width: '90%', height: 'auto' }}
                        />
                    </Box>
                </Stack>
            </Grid>
        </Grid>
    );
}

export default HeroArea;