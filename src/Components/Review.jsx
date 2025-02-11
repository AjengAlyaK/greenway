import { Box, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncReceiveReviews } from '../states/review/Action';
import TitleHomePage from '../elements/sharing/TitleHomePage';
import CardReview from '../elements/entrance/CardReview';

const title = "People are Talking ...";

const Review = () => {
    const { reviews } = useSelector((states) => states);
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        dispatch(asyncReceiveReviews());
    }, [dispatch]);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Box display={loading ? "none" : "flex"} sx={{ pt: { xs: 3, md: 5 }, pb: { xs: 1, sm: 2 }, px: { xs: 2, sm: 5, md: 13 }, justifyContent: 'center', alignItems: 'center' }}>
                <TitleHomePage text={title} />
            </Box>
            <Grid
                container
                spacing={3}
                display={loading ? "none" : "flex"}
                sx={{ py: { xs: 3, sm: 2, md: 5 }, px: { xs: 2, sm: 5, md: 13 }, justifyContent: 'center', alignItems: 'strech' }}
            >
                {reviews.map((content, index) => (
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        key={index}
                        display="flex"
                    >
                        <CardReview
                            name={content.name}
                            photo={content.photo}
                            review={content.review}
                            occupation={content.occupation}
                        />
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default Review;