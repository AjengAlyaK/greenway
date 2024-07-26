import { Box, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const Video = () => {
    return (
        <>
            <Box sx={{ pt: 7, pb: 2, px: 10, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#006E6F' }}>Nature of Indonesia</Typography>
            </Box>
            <Grid
                container
                space={2}
                sx={{ px: 10, py: 5, justifyContent: 'center', alignItems: 'center' }}
            >
                <Grid
                    item
                    space={2}
                    xs={12}
                >
                    {/* <Box sx={{ width: '100%', height: 'auto' }}> */}
                        <CardMedia
                            component="video"
                            title="test"
                            src="https://firebasestorage.googleapis.com/v0/b/mostgreen.appspot.com/o/Wonderful%20Indonesia%20-%20Nature.mp4?alt=media&token=bc06930b-651f-4a8e-8c6f-66b274c921ef"
                            sx={{ width: '100%', height: 'auto', borderRadius: 3 }}
                            // height={140}
                        />
                    {/* </Box> */}
                </Grid>
            </Grid>
        </>
    );
};

export default Video;