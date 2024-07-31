import { Box, Grid, Paper, Typography, Avatar } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncReceiveReviews } from '../states/review/Action';

const Review = () => {
    const { reviews } = useSelector((states) => states);
    console.log(reviews);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(asyncReceiveReviews());
    }, [dispatch]);
    return (
        <>
            <Box sx={{ pt: 5, pb: 2, px: 10, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#006E6F' }}>People are Talking ...</Typography>
            </Box>
            <Grid
                container
                spacing={3}
                sx={{ py: 5, px: 10, justifyContent: 'center', alignItems: 'center' }}
            >
                {reviews.map((content, index) => (
                    <Grid item xs={12} md={4} key={content.id} spacing={2}>

                        <Paper sx={{ p: 3, border: '1.5px solid #5AC9A2', borderRadius: 3 }}>
                            <Box
                                display="flex"
                                flexDirection="column"
                                justifyContent="flex-start"
                                alignItems="flex-start"
                            >
                                <Avatar src={content.photo} alt={`photo of ${content.name}`} sx={{ width: 54, height: 54 }} />
                                <Typography sx={{ pt: 2 }}>{content.review}</Typography>
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