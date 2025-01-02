import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { asyncReceiveCampaigns } from '../states/campaign/Action';
import TitleContent from '../elements/sharing/TitleContent';
import CardGeneral from '../elements/sharing/CardGeneral';

const title = "Join the Campaign for Protecting Nature, Preserving Beauty";
const subtitle = "Join our efforts to safeguard the natural wonders of Indonesia. Explore our environmental initiatives and be part of the change for a sustainable future.";

const CampaignPage = () => {
    const { campaigns } = useSelector((states) => states);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(asyncReceiveCampaigns);
    }, [dispatch]);
    return (
        <Grid container spacing={3} sx={{ pt: { xs: 2, sm: 4 }, pb: { xs: 10, md: 13 }, px: { xs: 2, sm: 5, md: 13 } }}>
            <Grid item xs={12} sx={{ mb: { md: 2 } }}>
                <TitleContent title={title} subtitle={subtitle} />
            </Grid>
            {campaigns.map((campaign, index) => (
                <Grid item xs={12} sm={4} md={3}>
                    <CardGeneral path="campaign" id={campaign.id} index={index} picture={campaign.picture} name={campaign.name} location={campaign.location} />
                </Grid>
            ))}
        </Grid>
    );
};

export default CampaignPage;