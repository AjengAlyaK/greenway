import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import React from 'react';

const illustration = "https://firebasestorage.googleapis.com/v0/b/mostgreen.appspot.com/o/Connected%20world-bro.png?alt=media&token=4ef3b596-261a-456d-85a0-7501b941c12c";

const CommunityIsCalling = () => {
    return (
        <Grid
            container
            spacing={2}
            sx={{ flexGrow: 1, py: 5, px: 10 }}
        >
            {/* left content */}
            <Grid
                sx={{ flexGrow: 1 }}
                item
                container
                xs={12}
                md={6}
                justifyContent="center"
                alignItems="center"
            >
                <Stack spacing={6}>
                    <Stack spacing={2}>
                        <Typography variant="h3" sx={{ color: '#006E6F', fontWeight: 'bold' }}>Community Is Calling, No Need to Stalling</Typography>
                        <Stack spacing={4}>
                            <Typography sx={{ textAlign: "justify" }}>
                                Join our discussion community! Discover new ideas and exchange experience with thousands of members. Let's join now!
                            </Typography>
                            <Box>
                                <Button variant="contained" sx={{ bgcolor: "#006E6F" }}>Join Now</Button>
                            </Box>
                        </Stack>
                    </Stack>
                </Stack>
            </Grid>
            {/* right content */}
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
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
                        <img
                            src={illustration}
                            alt="community illustration"
                            style={{ width: '90%', height: 'auto' }}
                        />
                    </Box>
                </Stack>
            </Grid>
        </Grid>
    );
};

export default CommunityIsCalling;