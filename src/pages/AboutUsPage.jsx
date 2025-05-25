import { Grid, Stack, Typography } from '@mui/material';

const illustration = "https://firebasestorage.googleapis.com/v0/b/mostgreen.appspot.com/o/menjaga-alam.jpg?alt=media&token=76c6d57e-8ec0-42c5-9360-d23764493b0d";

const AboutUsPage = () => {
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
                <img
                    src={illustration}
                    alt="About Us"
                    style={{
                        width: '100%',
                        height: 'auto',
                        borderRadius: '10px',
                    }}
                />
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
                    <Typography
                        sx={{
                            color: '#006E6F',
                            typography: { xs: 'h5', md: 'h4' },
                            fontWeight: {xs: 'bold', md: 'bold'},
                        }}
                    >
                        About Us
                    </Typography>
                    <Typography
                        variant="body1"
                        textAlign="justify"
                    >
                        Welcome to GreenWay, where our passion for the environment meets the joy of discovery. At GreenWay, we are dedicated to promoting Eco-friendly tourism while introducing a myriad of captivating travel destinations to everyone. Our website is designed to inspire and educate, featuring engaging campaigns and providing a platform to connect with like-minded communities. Join us on our journey to explore the world's beauty sustainably and responsibly.
                    </Typography>
                </Stack>
            </Grid>
        </Grid>
    );
};

export default AboutUsPage;