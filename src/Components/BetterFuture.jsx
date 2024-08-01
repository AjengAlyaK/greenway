import { Grid, Stack, Typography } from '@mui/material';
import React from 'react';

const illustration = "https://firebasestorage.googleapis.com/v0/b/mostgreen.appspot.com/o/Taking%20care%20of%20the%20Earth-bro.png?alt=media&token=be3278b6-c9bb-4b77-a9d0-91dc49c20cfa";

const BetterFuture = () => {
    return (
        <Grid
            container
            spacing={{ xs: 0, md: 2 }}
            sx={{ flexGrow: 1, pt: { xs: 6, md: 5 }, pb: { xs: 3, md: 5 }, px: { xs: 2, md: 13 } }}
        >
            {/* Left Content */}
            <Grid
                item
                container
                sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}
                xs={12}
                md={6}
                justifyContent="center"
                alignItems="center"
            >
                <Stack
                    spacing={2}
                    sx={{
                        display: 'flex',
                        alignItems: 'center', // Center content within Stack
                        width: '100%', // Ensure Stack takes full width
                        pb: { xs: 4, md: 0 }
                    }}
                >
                    <img
                        src={illustration}
                        alt="Taking care of the earth illustration"
                        style={{ width: '100%', height: 'auto' }}
                    />
                </Stack>
            </Grid>
            {/* Right Content */}
            <Grid
                item
                container
                sx={{ flexGrow: 1 }}
                xs={12}
                md={6}
                justifyContent="center"
                alignItems="center"
            >
                <Stack spacing={2}>
                    <Typography sx={{ color: '#006E6F', typography: { xs: 'h4', sm: 'h3' }, textAlign: { xs: 'center', md: 'start' }, fontWeight: { xs: 'bold', md: 'bold' } }}>Eco Friendly Travel For Better Future</Typography>
                    <Typography sx={{ textAlign: { xs: 'center', md: 'justify' }, typography: { xs: 'body1' } }}>Welcome to a new era of travel where adventure meets environmental stewardship. Your Gateway to Sustainable Exploration in Indonesia! Start your journey with us and traverse Indonesia in a more responsible, eco-conscious manner.</Typography>
                </Stack>
            </Grid>
        </Grid>
    );
};

export default BetterFuture;