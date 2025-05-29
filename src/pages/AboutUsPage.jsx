import { Grid, Skeleton, Stack, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import LoadingAboutUs from '../elements/sharing/skeleton/LoadingAboutUs';
import LoadingWordingAboutUs from '../elements/sharing/skeleton/LoadingWordingAboutUs';

const illustration = "https://firebasestorage.googleapis.com/v0/b/mostgreen.appspot.com/o/menjaga-alam.jpg?alt=media&token=76c6d57e-8ec0-42c5-9360-d23764493b0d";

const AboutUsPage = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <Grid
            container
            sx={{
                pt: { xs: 3, md: 7 },
                pb: { xs: 10, md: 13 },
                px: { xs: 2, sm: 5, md: 13 },
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Grid
                item
                xs={12}
                md={6}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                {loading ?
                    (
                        <Skeleton
                            variant="rectangular"
                            width="100%"
                            height={350}
                            sx={{
                                borderRadius: '10px',
                            }}
                        />
                    )
                    :
                    (
                        <img
                            src={illustration}
                            alt="About Us"
                            style={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: '10px',
                            }}
                        />
                    )}
            </Grid>
            <Grid
                item
                xs={12}
                md={6}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Stack
                    spacing={{ xs: 2, md: 3 }}
                    sx={{
                        pl: { xs: 0, md: 5 },
                        pt: { xs: 3, md: 0 },
                    }}
                >
                    {loading ?
                        (
                            <LoadingAboutUs />
                        ) : (
                            <Typography
                                sx={{
                                    color: '#006E6F',
                                    typography: { xs: 'h5', md: 'h4' },
                                    fontWeight: { xs: 'bold', md: 'bold' },
                                }}
                            >
                                About Us
                            </Typography>
                        )
                    }
                    {loading ?
                        (
                            <LoadingWordingAboutUs />
                        ) :
                        (
                            <Typography
                                variant="body1"
                                textAlign="justify"
                            >
                                Welcome to GreenWay, where our passion for the environment meets the joy of discovery. At GreenWay, we are dedicated to promoting Eco-friendly tourism while introducing a myriad of captivating travel destinations to everyone. Our website is designed to inspire and educate, featuring engaging campaigns and providing a platform to connect with like-minded communities. Join us on our journey to explore the world's beauty sustainably and responsibly.
                            </Typography>
                        )
                    }
                </Stack>
            </Grid>
        </Grid>
    );
};

export default AboutUsPage;