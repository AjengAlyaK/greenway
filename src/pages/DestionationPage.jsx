import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import TitleContent from '../elements/sharing/TitleContent';
// import CardGeneral from '../elements/sharing/CardGeneral';
import { useDispatch, useSelector } from 'react-redux';
import { asyncReceiveDestinations } from '../states/destination/action';
import CardGeneral from '../elements/sharing/CardGeneral';
// search

const title = "Find The Next Places to Explore The Beauty of The Indonesia";
const subtitle = "Discover your dream adventure here. Every corner of Indonesia's beauty awaits you with unforgettable memories. With Greenway, explore it all now!";

const DestionationPage = () => {
    const { destinations } = useSelector((states) => states);
    console.log(destinations)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(asyncReceiveDestinations())
    }, [dispatch]);
    return (
        <Grid container spacing={3} sx={{ pt: { xs: 8, md: 13 }, pb: { xs: 10, md: 13 }, px: { xs: 2, md: 13 } }}>
            <Grid item xs={12} sx={{ mb: { md: 2 } }}>
                <TitleContent title={title} subtitle={subtitle} />
            </Grid>
            {destinations.map((destination, index) => (
                <Grid item xs={12} md={3}>
                    <CardGeneral id={destination.id} index={index} picture={destination.photo} name={destination.name} location={destination.location} />
                </Grid>
            ))}
        </Grid>
    );
};

export default DestionationPage;