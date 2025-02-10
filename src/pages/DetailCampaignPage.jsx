import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import DetailInformation from '../elements/sharing/DetailInformation';
import ImageInDetail from '../elements/sharing/ImageInDetail';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { asyncReceiveDetailCampaign } from '../states/campaignDetail/action';
import { asyncInitializeAuthUser } from '../states/authUser/action';
import LoadingImageInDetail from '../elements/sharing/skeleton/LoadingImageInDetail';

const DetailCampaignPage = () => {
    const { id } = useParams();
    const campaign = useSelector((state) => state.campaign);
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            await dispatch(asyncInitializeAuthUser());
            await dispatch(asyncReceiveDetailCampaign(id));
            setLoading(false);
        };

        fetchData();
    }, [id, dispatch]);

    // if (!campaign) {
    //     return <p>Loading...</p>;
    // }

    return (
        <Grid
            container
            spacing={2}
            sx={{
                pt: 2,
                pb: 8,
                px: { xs: 2, sm: 5, md: 13 }
            }}
        >
            <Grid item xs={12}>
                {loading ?
                    <>
                        <LoadingImageInDetail />
                        
                    </>
                    :
                    <>
                        <ImageInDetail picture={campaign.picture} location={campaign.location} title={campaign.name} />
                        <DetailInformation subtitle='ID Campaign' value={campaign.id} />
                        <DetailInformation subtitle='Time Periode' value={campaign.date} />
                        <DetailInformation subtitle='Link Enrollment' value='Link' />
                        <DetailInformation subtitle='Description' textAlign="justify" value={campaign.description} />
                    </>
                }
            </Grid>
        </Grid >
    );
};

export default DetailCampaignPage;