import React from 'react';
// import PropTypes from 'prop-types';
import { Grid, Stack } from '@mui/material';
import OneLineTitle from '../elements/sharing/OneLineTitle';
import DiscussionCard from '../Components/DiscussionCard';
import Comments from '../elements/sharing/Comments';
import FormComment from '../Components/FormComment';

const DetailDiscussion = () => {
    return (
        <Grid container spacing={0} sx={{ pt: { xs: 8, md: 13 }, pb: { xs: 10, md: 13 }, px: { xs: 2, md: 13 } }}>
            <Grid size={12} width="100%">
                <Stack spacing={3}>
                    <OneLineTitle title="Detail Discussion" />
                    <DiscussionCard />
                </Stack>
                <Comments />
                <FormComment />
                <Stack spacing={3} sx={{ py: 4 }}>
                    <DiscussionCard />
                    <DiscussionCard />
                </Stack>
            </Grid>
        </Grid>
    );
};

DetailDiscussion.propTypes = {

};

export default DetailDiscussion;