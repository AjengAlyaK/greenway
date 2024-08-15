import React, { useEffect } from 'react';
import { Grid, InputBase, Paper } from '@mui/material';
import TitleContent from '../elements/sharing/TitleContent';
// import CardGeneral from '../elements/sharing/CardGeneral';
import { useDispatch, useSelector } from 'react-redux';
import { asyncReceiveDestinations } from '../states/destination/action';
import CardGeneral from '../elements/sharing/CardGeneral';
import SearchIcon from '@mui/icons-material/Search';

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
            <Grid item container spacing={3} justifyContent="center" xs={12} sx={{ mb: { md: 2 } }}>
                <TitleContent title={title} subtitle={subtitle} />
                <Grid item xs={8} md={4}>
                    <Paper sx={{ p: 1, borderRadius: 3, border: '1.5px solid #006E6F' }}>
                        <Grid item container alignItems="center">
                            <SearchIcon />
                            <InputBase placeholder="Search" sx={{px: 1, width: '90%'}}/>
                        </Grid>
                    </Paper>
                </Grid>
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