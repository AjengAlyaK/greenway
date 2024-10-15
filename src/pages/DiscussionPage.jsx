import React from 'react';
import { Button, Grid, Stack, Typography } from '@mui/material';
import OneLineTitle from '../elements/sharing/OneLineTitle';
import DiscussionCard from '../Components/DiscussionCard';

const temporary = {
    photo: "https://firebasestorage.googleapis.com/v0/b/mostgreen.appspot.com/o/user-g1.jpg?alt=media&token=6e6e8da1-0867-4dff-b2eb-9a05ed03410c",
    name: "Mikaca",
    timestamp: "7 days ago",
    comment: "lorem ipsum dolor sit amet"
}

const DiscussionPage = () => {
    return (
        <Grid container spacing={0} sx={{ pt: { xs: 8, md: 13 }, pb: { xs: 10, md: 13 }, px: { xs: 2, md: 13 } }}>
            <Grid size={12} width="100%">
                <Stack spacing={2}>
                    <Stack spacing={2}>
                        <Typography variant="h6">Popular Category</Typography>
                        <Stack direction="row" spacing={2}>
                            <Button variant="outlined"># Contoh</Button>
                            <Button variant="outlined"># Contoh</Button>
                        </Stack>
                        <Stack>
                            <OneLineTitle title="Discussion Available" />
                        </Stack>
                    </Stack>
                    <Stack spacing={2}>
                        <DiscussionCard photo={temporary.photo} name={temporary.name} timestamp={temporary.timestamp} comment={temporary.comment} />
                        <DiscussionCard photo={temporary.photo} name={temporary.name} timestamp={temporary.timestamp} comment={temporary.comment} />
                    </Stack>
                </Stack>
            </Grid>
        </Grid>
    );
};

export default DiscussionPage;