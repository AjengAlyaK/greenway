import { Grid, Stack, Typography, Box, Button } from '@mui/material';
import React, { useEffect } from 'react';
// card
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { asyncReceiveCampaigns } from '../states/campaign/Action';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

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
            sx={{ py: 7, px: 10, justifyContent: 'center', alignItems: 'center' }}
        >
            <Grid
                item
                xs={12}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <Stack spacing={2} sx={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography variant="h3" sx={{ textAlign: 'center', fontWeight: 'bold', color: '#006E6F', pb: 3 }}>Campaign</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', width: '100%' }}>
                        <Button variant="contained" sx={{ bgcolor: "#006E6F" }} size="small">See All</Button>
                    </Box>
                    <Stack direction="row" spacing={2} sx={{ width: '100%', justifyContent: 'space-between', pt: 1, pb: 5 }}>
                        {displayedCampaigns.map((campaign, index) => (
                            <Card key={index} sx={{ width: 345, borderRadius: 3 }}>
                                <CardActionArea>
                                    <Box sx={{ position: 'relative' }}>
                                        <CardMedia
                                            component="img"
                                            height="200"
                                            image={campaign.picture}
                                            alt={campaign.picture}
                                        />
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                right: 0,
                                                bottom: 0,
                                                backgroundColor: 'rgba(0, 0, 0, 0.3)', // Dark overlay with 50% opacity
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-end',
                                                p: 2,
                                                color: 'white',
                                                fontSize: '1.5rem',
                                                fontWeight: 'bold',
                                                opacity: 1,
                                                transition: 'opacity 0.3s ease',
                                            }}
                                        >
                                            <Typography sx={{ fontWeight: 'bold' }}>
                                                {campaign.name}
                                            </Typography>
                                            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                <FmdGoodIcon sx={{ mr: 1 }}/>
                                                <Typography>
                                                    {campaign.location}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </CardActionArea>
                            </Card>
                        ))}
                    </Stack>
                </Stack>
            </Grid>
        </Grid>
    );
};

export default CampaignSlightly;