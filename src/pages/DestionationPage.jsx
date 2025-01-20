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
import { asyncInitializeAuthUser } from '../states/authUser/action';

const title = "Find The Next Places to Explore The Beauty of The Indonesia";
const subtitle = "Discover your dream adventure here. Every corner of Indonesia's beauty awaits you with unforgettable memories. With Greenway, explore it all now!";
const noresultimg = "https://firebasestorage.googleapis.com/v0/b/mostgreen.appspot.com/o/no%20result%20found.png?alt=media&token=cfe58687-4512-47b9-a5eb-510978cbc855";

const DestionationPage = () => {
    const { destinations } = useSelector((states) => states);
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true);
    const [searchItem, setSearchItem] = useState('');
    const [filteredDestination, setFilteredDestination] = useState([]);

    const handleInputChange = (e) => {
        const searchTerm = e.target.value;
        setSearchItem(searchTerm);

        const filteredItems = destinations.filter((destination) =>
            destination.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setFilteredDestination(filteredItems);
    };

    useEffect(() => {
        const fetchDestination = async () => {
            dispatch(asyncInitializeAuthUser());
            await dispatch(asyncReceiveDestinations());
            setLoading(false);
        };

        fetchDestination();
    }, [dispatch]);

    useEffect(() => {
        if (destinations && destinations.length > 0) {
            setFilteredDestination(destinations);
        }
    }, [destinations]);

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
                                <InputBase
                                    placeholder="Search"
                                    value={searchItem}
                                    onChange={handleInputChange}
                                    sx={{
                                        px: 1,
                                        width: { xs: '80%', sm: '100%' }
                                    }}
                                />
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
                filteredDestination.map((destination, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <CardGeneral path="destination" id={destination.id} picture={destination.photo} name={destination.name} location={destination.location} />
                    </Grid>
                ))
            }
            {!loading && filteredDestination.length === 0 &&
                (
                    <Grid
                        container
                        item
                        xs={12}
                        justifyContent="center"
                        alignItems="center"
                    >
                        <img
                            component="img"
                            alt="No Result"
                            src={noresultimg}
                            style={{
                                width: '20%',
                                height: 'auto',
                            }}
                        />
                    </Grid>
                )
            }
        </Grid>
    );
};

export default DestionationPage;