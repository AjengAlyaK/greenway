import { Box, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncReceiveReviews } from '../states/review/Action';
import AvatarGeneral from '../elements/sharing/AvatarGeneral';
import TitleHomePage from '../elements/sharing/TitleHomePage';

const title = "People are Talking ...";

const Review = () => {
    const { reviews } = useSelector((states) => states);
    console.log(reviews);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(asyncReceiveReviews());
    }, [dispatch]);
    return (
        <>
            <Box sx={{ pt: { xs: 3, md: 5 }, pb: { xs: 1, sm: 2 }, px: { xs: 2, sm: 5, md: 13 }, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <TitleHomePage text={title} />
            </Box>
            <Grid
                container
                spacing={3}
                sx={{ py: { xs: 3, sm: 2, md: 5 }, px: { xs: 2, sm: 5, md: 13 }, justifyContent: 'center', alignItems: 'center' }}
            >
                {reviews.map((content, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index} spacing={2}>
                        <Paper sx={{ p: 2, border: '1.5px solid #5AC9A2', borderRadius: 3 }}>
                            <Box
                                display="flex"
                                flexDirection="column"
                                justifyContent="flex-start"
                                alignItems="flex-start"
                            >
                                {/* <Avatar src={content.photo} alt={`photo of ${content.name}`} sx={{ width: 54, height: 54 }} /> */}
                                <AvatarGeneral source={content.photo} alternative={content.name} />
                                <Typography sx={{ pt: 2, }}>{content.review}</Typography>
                                <Typography sx={{ fontWeight: 'bold', pt: 2 }}>{content.name}</Typography>
                                <Typography sx={{ pb: 1 }}>{content.occupation}</Typography>
                            </Box>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default Review;