import React, { useEffect, useState } from 'react';
import { Box, Grid, InputBase, Paper } from '@mui/material';
import TitleContent from '../elements/sharing/TitleContent';
import { useDispatch, useSelector } from 'react-redux';
import { asyncReceiveDestinations } from '../states/destination/action';
import CardGeneral from '../elements/sharing/CardGeneral';
import SearchIcon from '@mui/icons-material/Search';
import LoadingTitleContent from '../elements/sharing/skeleton/LoadingTitleContent';
import LoadingCard from '../elements/sharing/skeleton/LoadingCard';
import LoadingSearchArticle from '../elements/artikel/skeleton/LoadingSearchArticle';

const title = "Find The Next Places to Explore The Beauty of The Indonesia";
const subtitle = "Discover your dream adventure here. Every corner of Indonesia's beauty awaits you with unforgettable memories. With Greenway, explore it all now!";

const DestionationPage = () => {
    const { destinations } = useSelector((states) => states);
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDestination = async () => {
            await dispatch(asyncReceiveDestinations());
            setLoading(false);
        };

        fetchDestination();
    }, [dispatch]);

    return (
        <Grid container spacing={3} sx={{ pt: { xs: 2, sm: 4 }, pb: { xs: 10, md: 13 }, px: { xs: 2, sm: 5, md: 13 } }}>
            <Grid item container spacing={3} justifyContent="center" xs={12} sx={{ mb: { md: 2 } }}>
                <Grid item xs={12}>
                    {loading ?
                        <LoadingTitleContent title={title} subtitle={subtitle} />
                        :
                        <TitleContent title={title} subtitle={subtitle} />
                    }
                </Grid>
                {loading ?
                    <LoadingSearchArticle />
                    :
                    <Grid item xs={8} md={4}>
                        <Paper sx={{ p: 1, borderRadius: 3, border: '1.5px solid #006E6F' }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >
                                <SearchIcon />
                                <InputBase placeholder="Search" sx={{ px: 1, width: { xs: '80%', sm: '100%' } }} />
                            </Box>
                        </Paper>
                    </Grid>
                }
            </Grid>
            {loading ?
                Array.from({ length: 10 }).map((_, index) => (
                    <Grid item xs={12} sm={6} md={3}>
                        <LoadingCard key={index} />
                    </Grid>
                ))
                :
                destinations.map((destination, index) => (
                    <Grid item xs={12} sm={6} md={3}>
                        <CardGeneral path="destination" id={destination.id} index={index} picture={destination.photo} name={destination.name} location={destination.location} />
                    </Grid>
                ))
            }
        </Grid>
    );
};

export default DestionationPage;