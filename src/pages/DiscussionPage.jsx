import React from 'react';
import { Button, Grid, Stack, Typography } from '@mui/material';
import OneLineTitle from '../elements/sharing/OneLineTitle';

// const temporary = {
//     photo: "", 
//     name: "", 
//     timestamp: "",
// }

const DiscussionPage = () => {
    return (
        <Grid container spacing={3} sx={{ pt: { xs: 8, md: 13 }, pb: { xs: 10, md: 13 }, px: { xs: 2, md: 13 } }}>
            <Grid size={12}>
                <Stack spacing={3}>
                    <Typography variant="h6">Popular Category</Typography>
                    <Stack direction="row" spacing={2}>
                        <Button variant="outlined"># Contoh</Button>
                        <Button variant="outlined"># Contoh</Button>
                    </Stack>
                    <Stack>
                        <OneLineTitle title="Discussion Available" />
                    </Stack>
                </Stack>
                <Stack>
                    
                </Stack>
            </Grid>
        </Grid>
    );
};

export default DiscussionPage;