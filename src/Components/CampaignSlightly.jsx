import { Grid, Stack, Box, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncReceiveCampaigns } from '../states/campaign/Action';
import { Link } from 'react-router-dom';
import CardGeneral from '../elements/sharing/CardGeneral';
import TitleHomePage from '../elements/sharing/TitleHomePage';

const title = "Campaign";

const CampaignSlightly = () => {
    const { campaigns } = useSelector((states) => states);
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        dispatch(asyncReceiveCampaigns());
    }, [dispatch]);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    const displayedCampaigns = campaigns.slice(0, 4);

    return (
        <Grid
            container
            spacing={3}
            display={loading ? "none" : "flex"}
            sx={{ py: { xs: 3, sm: 5 }, px: { xs: 2, sm: 5, md: 13 }, justifyContent: 'center', alignItems: 'center' }}
        >
            <Stack spacing={2} sx={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <TitleHomePage text={title} />
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', width: '100%' }}>
                    <Button variant="contained" color="primary" size="small" component={Link}
                        to="/campaigns">See All</Button>
                </Box>
            </Stack>
            {displayedCampaigns.map((campaign, index) => (
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={3}
                >
                    <CardGeneral
                        key={index}
                        path="campaign"
                        id={campaign.id}
                        index={index}
                        picture={campaign.picture}
                        name={campaign.name}
                        location={campaign.location} 
                    />
                </Grid>
            ))}
        </Grid>
    );
};

export default CampaignSlightly;