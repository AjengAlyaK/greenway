import { Box, Grid, Paper, Stack, Typography } from '@mui/material';
import { useEffect, useState, useRef } from 'react';
import LoadingRecord from '../elements/sharing/skeleton/LoadingRecord';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const RecordContents = [
    {
        id: 0,
        count: 14,
        title: "Initiatives"
    },
    {
        id: 0,
        count: 52,
        title: "Destinations"
    },
    {
        id: 0,
        count: 31,
        title: "Campaigns"
    },
    {
        id: 0,
        count: 25,
        title: "Articles"
    },
];

gsap.registerPlugin(ScrollTrigger);

const Record = () => {
    const [loading, setLoading] = useState(true);
    const recordRef = useRef(null);
    const countersRef = useRef([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
            setTimeout(initAnimations, 100);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    const initAnimations = () => {
        countersRef.current.forEach((counter, index) => {
            const countTo = RecordContents[index].count;

            gsap.fromTo(counter,
                { textContent: 0 },
                {
                    textContent: countTo,
                    duration: 3,
                    ease: "power1.out",
                    snap: { textContent: 1 },
                    scrollTrigger: {
                        trigger: counter,
                        start: "top 80%",
                        toggleActions: "play none none reset"
                    }
                }
            );
        });
    };

    return (
        <>
            {loading ?
                <LoadingRecord />
                :
                <Box
                    sx={{
                        px: { xs: 2, sm: 5, md: 13 },
                    }}
                    ref={recordRef}
                >
                    <Grid
                        container
                        sx={{
                            bgcolor: '#5AC9A2',
                            p: 3,
                        }}
                    >
                        {RecordContents.map((content, index) => (
                            <Grid
                                item
                                key={index}
                                xs={12}
                                sm={6}
                                md={3}
                                sx={{
                                    p: 2
                                }}
                            >
                                <Paper
                                    sx={{
                                        borderRadius: 1
                                    }}
                                >
                                    <Box
                                        sx={{
                                            p: 5
                                        }}
                                    >
                                        <Stack
                                            spacing={{ xs: 1, md: 2 }}
                                        >
                                            <Typography
                                                ref={el => countersRef.current[index] = el}
                                                sx={{
                                                    typography: "h4",
                                                    fontWeight: "bold",
                                                    color: "#006E6F",
                                                    textAlign: "center"
                                                }}
                                            >
                                                0
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    typography: "body",
                                                    fontWeight: "bold",
                                                    textAlign: "center",
                                                }}
                                            >
                                                {content.title}
                                            </Typography>
                                        </Stack>
                                    </Box>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Box >
            }
        </>
    );
};

export default Record;