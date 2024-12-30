import { Box, Grid, Stack} from '@mui/material';
import React from 'react';
import TitleHomePage from '../elements/sharing/TitleHomePage';
import WordingHomePage from '../elements/sharing/WordingHomePage';

const illustration = "https://firebasestorage.googleapis.com/v0/b/mostgreen.appspot.com/o/Taking%20care%20of%20the%20Earth-bro.png?alt=media&token=be3278b6-c9bb-4b77-a9d0-91dc49c20cfa";
const title = "Eco Friendly Travel For Better Future";
const wording = "Welcome to a new era of travel where adventure meets environmental stewardship. Your Gateway to Sustainable Exploration in Indonesia! Start your journey with us and traverse Indonesia in a more responsible, eco-conscious manner."

const BetterFuture = () => {
    return (
        <Grid
            container
            spacing={{ xs: 0, md: 2 }}
            sx={{ flexGrow: 1, pt: { xs: 6, md: 5 }, pb: { xs: 3, md: 5 }, px: { xs: 2, sm: 5, md: 13 } }}
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
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '100%',
                        pb: { xs: 4, md: 0 }
                    }}
                >
                    <img
                        src={illustration}
                        alt="Taking care of the earth illustration"
                        style={{ width: '100%', height: 'auto' }}
                    />
                </Box>
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
                    <TitleHomePage text={title} />
                    <WordingHomePage text={wording} />
                </Stack>
            </Grid>
        </Grid>
    );
};

export default BetterFuture;