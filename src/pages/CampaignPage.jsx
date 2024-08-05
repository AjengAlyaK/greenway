import React, { useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { asyncReceiveCampaigns } from '../states/campaign/Action';
import CardCampaign from '../elements/campaign/CardCampaign';

const CampaignPage = () => {
    const { campaigns } = useSelector((states) => states);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(asyncReceiveCampaigns)
    }, [dispatch]);
    return (
        <Grid container spacing={2} sx={{ py: 13, px: { xs: 2, md: 13 } }}>
            <Grid item xs={12} sx={{mb: {md: 2}}}>
                <Typography variant="h3" textAlign="center">
                    Join the Campaign for Protecting Nature, Preserving Beauty
                </Typography>
                <Typography variant="body1" textAlign="center" sx={{ pt: 2 }}>
                    Join our efforts to safeguard the natural wonders of Indonesia.
                </Typography>
                <Typography variant="body1" textAlign="center">
                    Explore our environmental initiatives and be part of the change for a sustainable future.
                </Typography>
            </Grid>
            {campaigns.map((campaign, index) => (
                <Grid item xs={12} md={3}>
                    <CardCampaign id={campaign.id} index={index} picture={campaign.picture} name={campaign.name} location={campaign.location} />
                </Grid>
            ))}
        </Grid>
    );
};

export default CampaignPage;