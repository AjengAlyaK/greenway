import React from 'react';
// import PropTypes from 'prop-types';
import { Grid, Stack } from '@mui/material';
import OneLineTitle from '../elements/sharing/OneLineTitle';
import DiscussionCard from '../Components/DiscussionCard';
import Comments from '../elements/sharing/Comments';
import FormComment from '../Components/FormComment';
import { useSelector } from 'react-redux';
import WarningBar from '../elements/sharing/WarningBar';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

const DetailDiscussion = () => {
    const { authUser = null } = useSelector((state) => state);

    return (
        <Grid container spacing={0} sx={{ pt: { xs: 8, md: 13 }, pb: { xs: 10, md: 13 }, px: { xs: 2, md: 13 } }}>
            <Grid size={12} width="100%">
                <Stack spacing={3}>
                    <OneLineTitle title="Detail Discussion" />
                    <DiscussionCard />
                </Stack>
                <Comments />
                {authUser ? 
                    <FormComment /> : 
                    <WarningBar 
                        color="#FFF4E6" 
                        iconBar={<WarningAmberIcon color="warning" />} 
                        object="start a new comment" 
                    />
                }
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