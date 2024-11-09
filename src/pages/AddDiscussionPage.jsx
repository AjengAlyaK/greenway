import React from 'react';
import { Button, Grid, Stack, TextField } from '@mui/material';
import OneLineTitle from '../elements/sharing/OneLineTitle';

const AddDiscussionPage = () => {
    return (
        <Grid container spacing={0} sx={{ pt: { xs: 8, md: 13 }, pb: { xs: 10, md: 13 }, px: { xs: 2, md: 13 } }}>
            <Grid size={12} width="100%">
                <Stack spacing={5} sx={{ pt: { xs: 2, md: 0 } }}>
                    <OneLineTitle title="Create New Discussion" />
                    <Stack spacing={2}>
                        <TextField id="title" label="Title" variant="outlined" />
                        <TextField id="category" label="Category" variant="outlined" />
                        <TextField id="content" label="Content" variant="outlined" multiline rows={5} />
                        <Button variant="contained" sx={{ bgcolor: "#006E6F" }}>Create</Button>
                    </Stack>
                </Stack>
            </Grid>
        </Grid>
    );
};

export default AddDiscussionPage;