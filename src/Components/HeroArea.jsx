import React, { useEffect, useRef, useState } from 'react';
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { Typewriter } from 'react-simple-typewriter';
import LoadingHeroTitle from '../elements/sharing/skeleton/LoadingHeroTitle';
import LoadingHeroText from '../elements/sharing/skeleton/LoadingHeroText';
import LoadingButton from '../elements/sharing/skeleton/LoadingButton';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import LoadingImageHero from '../elements/sharing/skeleton/LoadingImageHero';

const HeroArea = () => {
    const [loading, setLoading] = useState(true);
    const container = useRef();

    const mainTitle = ['TRAVEL AND SAVE NATURE'];
    const heroTitle = "TRAVEL AND SAVE NATURE";
    const heroText = "Welcome to a new era of travel where adventure meets environmental stewardship. Your Gateway to Sustainable Exploration in Indonesia! Start your journey with us and traverse Indonesia in a more responsible, eco-conscious manner.";

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    const { contextSafe } = useGSAP({ scope: container });

    const onClickGood = contextSafe(() => {
        gsap.to('.good', { rotation: 360 });
    });

    return (
        <Grid
            container
            spacing={{ xs: 5, md: 2 }}
            sx={{ flexGrow: 1, py: 0, px: { xs: 2, sm: 5, md: 13 } }}
        >
            {/* Left Content */}
            <Grid
                item
                md={6}
                xs={12}
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <Stack>
                    <Stack spacing={2}>
                        {loading ?
                            <LoadingHeroTitle text={heroTitle} />
                            :
                            <Typography
                                sx={{
                                    color: '#006E6F',
                                    typography: { xs: 'h4', sm: 'h3', md: 'h3', lg: 'h2' },
                                    fontWeight: { xs: 'bold', sm: 'bold', md: 'bold', lg: 'bold' },
                                    pt: { xs: 2, sm: 4, md: 0 }, pr: { xs: 0, md: 3 },
                                    textAlign: { xs: 'center', md: 'start' }
                                }}>
                                <Typewriter words={mainTitle} typeSpeed={120} />
                            </Typography>
                        }
                        <Stack alignItems="flex-start" spacing={{ xs: 3, md: 4 }}>
                            {loading ?
                                <LoadingHeroText text={heroText} />
                                :
                                <Typography variant="body1" sx={{ fontSize: 16, pr: { xs: 0, md: 3 }, textAlign: { xs: 'center', md: 'justify' } }}>
                                    {heroText}
                                </Typography>
                            }
                            <Box ref={container} sx={{ display: 'flex', width: '100%', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-start' } }}>
                                {loading ?
                                    <LoadingButton text="Go Travel" />
                                    :
                                    <Button onClick={onClickGood} className="good" variant="contained" color="primary">Go Travel</Button>
                                }
                            </Box>
                        </Stack>
                    </Stack>
                </Stack>
            </Grid>
            {/* Right Content */}
            <Grid
                sx={{ flexGrow: 1 }}
                item
                container
                md={6}
                xs={12}
                justifyContent="center"
                alignItems="flex-start"
            >
                <Box sx={{ pl: { xs: 0, md: 3 }, width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
                    {loading ?
                        <LoadingImageHero />
                        :
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/mostgreen.appspot.com/o/landing-1.png?alt=media&token=2ade045c-366c-4d8e-b44e-5951667d3fc1"
                            alt="https://firebasestorage.googleapis.com/v0/b/mostgreen.appspot.com/o/landing-1.png?alt=media&token=2ade045c-366c-4d8e-b44e-5951667d3fc1"
                            style={{ width: '100%', height: 'auto' }} />
                    }
                </Box>
            </Grid>
        </Grid>
    );
}

export default HeroArea;