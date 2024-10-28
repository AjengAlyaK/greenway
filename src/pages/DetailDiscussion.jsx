import React from 'react';
// import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import OneLineTitle from '../elements/sharing/OneLineTitle';
import DiscussionCard from '../Components/DiscussionCard';

const DetailDiscussion = props => {
    return (
        <Grid container spacing={0} sx={{ pt: { xs: 8, md: 13 }, pb: { xs: 10, md: 13 }, px: { xs: 2, md: 13 } }}>
            <Grid container size={12} width="100%">
                <Grid size={12} spacing={6} width="100%">
                    <OneLineTitle title="Detail Discussion" />
                    <DiscussionCard />
                </Grid>
            </Grid>
        </Grid>
    );
};

DetailDiscussion.propTypes = {

};

export default DetailDiscussion;