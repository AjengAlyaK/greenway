import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router';

const illustration = "https://firebasestorage.googleapis.com/v0/b/mostgreen.appspot.com/o/Connected%20world-bro.png?alt=media&token=4ef3b596-261a-456d-85a0-7501b941c12c";

const CommunityIsCalling = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/discussion");
    }

    return (
        <Grid
            container
            spacing={2}
            sx={{ flexGrow: 1, pt: { xs: 3, md: 5 }, pb: 10, px: { xs: 2, md: 13 } }}
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
                        <Typography sx={{ typography: { xs: 'h4', sm: 'h3' }, fontWeight: { xs: 'bold', md: 'bold' }, textAlign: { xs: 'center', md: 'start' }, color: '#006E6F' }}>Community Is Calling, No Need to Stalling</Typography>
                        <Stack spacing={4}>
                            <Typography variant="body1" sx={{ textAlign: { xs: 'center', md: 'justify' } }}>
                                Join our discussion community! Discover new ideas and exchange experience with thousands of members. Let's join now!
                            </Typography>
                            <Box sx={{ display: 'flex', width: '100%', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-start' } }}>
                                <Button variant="contained" color="primary" onClick={handleClick}>Join Now</Button>
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
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' } }}>
                        <img
                            src={illustration}
                            alt="community illustration"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </Box>
                </Stack>
            </Grid>
        </Grid>
    );
};

export default CommunityIsCalling;