import { Grid, Stack, Typography } from '@mui/material';
import React from 'react';

const illustration = "https://firebasestorage.googleapis.com/v0/b/mostgreen.appspot.com/o/Taking%20care%20of%20the%20Earth-bro.png?alt=media&token=be3278b6-c9bb-4b77-a9d0-91dc49c20cfa";

const BetterFuture = () => {
    return (
        <Grid
            container
            spacing={2}
            sx={{ flexGrow: 1, py: 5, px: 10 }}
        >
            {/* Left Content */}
            <Grid
                item
                container
                sx={{ flexGrow: 1 }}
                xs={12}
                md={6}
                justifyContent="center"
                alignItems="center"
            >
                <Stack
                    spacing={2}
                >
                    <img
                        src={illustration}
                        alt="Taking care of the earth illustration"
                        style={{ width: '90%', height: 'auto' }}
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
                    <Typography variant="h3" sx={{color: '#006E6F', fontWeight: 'bold'}}>Eco Friendly Travel For</Typography>
                    <Typography variant="h3" sx={{color: '#006E6F', fontWeight: 'bold'}}>Better Future</Typography>
                    <Typography sx={{textAlign: "justify"}}>Welcome to a new era of travel where adventure meets environmental stewardship. Your Gateway to Sustainable Exploration in Indonesia! Start your journey with us and traverse Indonesia in a more responsible, eco-conscious manner.</Typography>
                </Stack>
            </Grid>
        </Grid>
    );
};

export default BetterFuture;