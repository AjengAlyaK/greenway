import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import DetailInformation from '../elements/sharing/DetailInformation';
import ImageInDetail from '../elements/sharing/ImageInDetail';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { asyncReceiveDetailCampaign } from '../states/campaignDetail/action';

const DetailCampaignPage = () => {
    const { id } = useParams();
    // const { campaign = null } = useSelector((states) => states);
    const campaign = useSelector((state) => state.campaign);
    console.log(campaign)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(asyncReceiveDetailCampaign(id))
    }, [id, dispatch]);

    if (!campaign) {
        return <p>Loading...</p>;
    }

    return (
        <Grid container spacing={2} sx={{ py: 13, px: { xs: 2, md: 13 } }}>
            <Grid item xs={12}>
                <ImageInDetail picture={campaign.picture} location="Candi Borobudur" title="Zero Waste" />
                <DetailInformation subtitle='ID Campaign' value={campaign.id} />
                <DetailInformation subtitle='Time Periode' value={campaign.date} />
                <DetailInformation subtitle='Link Enrollment' value={campaign.name} />
                <DetailInformation subtitle='Description' value={campaign.description} />
            </Grid>
        </Grid >
    );
};

export default DetailCampaignPage;