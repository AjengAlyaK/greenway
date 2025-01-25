import { Box, CardMedia, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import TitleHomePage from '../elements/sharing/TitleHomePage';

const title = "Nature of Indonesia";

const Video = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Box display={loading ? "none" : "flex"} sx={{ pt: { xs: 3, md: 5 }, pb: { xs: 1, sm: 2 }, px: { xs: 2, md: 13 }, justifyContent: 'center', alignItems: 'center' }}>
                <TitleHomePage text={title} />
            </Box>
            <Grid
                container
                space={2}
                display={loading ? "none" : "flex"}
                sx={{ px: { xs: 2, sm: 5, md: 13 }, py: { xs: 3, sm: 2, md: 5 }, justifyContent: 'center', alignItems: 'center' }}
            >
                <Grid
                    item
                    space={2}
                    xs={12}
                >
                    <CardMedia
                        component="video"
                        title="test"
                        src="https://firebasestorage.googleapis.com/v0/b/mostgreen.appspot.com/o/Wonderful%20Indonesia%20-%20Nature.mp4?alt=media&token=bc06930b-651f-4a8e-8c6f-66b274c921ef"
                        sx={{ width: '100%', height: 'auto', borderRadius: 3 }}
                    />
                </Grid>
            </Grid>
        </>
    );
};

export default Video;