import { Grid, Stack, Box, Button } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncReceiveCampaigns } from '../states/campaign/Action';
import { Link } from 'react-router-dom';
import CardGeneral from '../elements/sharing/CardGeneral';
import TitleHomePage from '../elements/sharing/TitleHomePage';

const title = "Campaign";

const CampaignSlightly = () => {
    const { campaigns } = useSelector((states) => states);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(asyncReceiveCampaigns());
    }, [dispatch]);
    const displayedCampaigns = campaigns.slice(0, 4);
    return (
        <Grid
            container
            spacing={2}
            sx={{ py: { xs: 3, md: 5 }, px: { xs: 2, sm: 5, md: 13 }, justifyContent: 'center', alignItems: 'center' }}
        >
            <Grid
                item
                xs={12}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <Stack spacing={2} sx={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <TitleHomePage text={title} />
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', width: '100%' }}>
                        <Button variant="contained" color="primary" size="small" component={Link}
                            to="/campaigns">See All</Button>
                    </Box>
                    <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={2} sx={{ width: '100%', justifyContent: 'space-between', pt: 1, pb: 5 }}>
                        {displayedCampaigns.map((campaign, index) => (
                            <CardGeneral key={index} path="campaign" id={campaign.id} index={index} picture={campaign.picture} name={campaign.name} location={campaign.location} />
                        ))}
                    </Stack>
                </Stack>
            </Grid>
        </Grid>
    );
};

export default CampaignSlightly;