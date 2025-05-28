import { Box, Button, Grid, Stack } from '@mui/material';
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router';
import TitleHomePage from '../elements/sharing/TitleHomePage';
import WordingHomePage from '../elements/sharing/WordingHomePage';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 

const illustration = "https://firebasestorage.googleapis.com/v0/b/mostgreen.appspot.com/o/Connected%20world-bro.png?alt=media&token=4ef3b596-261a-456d-85a0-7501b941c12c";
const title = "Community Is Calling, No Need to Stalling";
const wording = "Join our discussion community! Discover new ideas and exchange experience with thousands of members. Let's join now!";

gsap.registerPlugin(ScrollTrigger);

const CommunityIsCalling = () => {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const componentRef = useRef();
    const leftContentRef = useRef();
    const rightContentRef = useRef();

    const handleClick = () => {
        navigate("/discussion");
    };

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (loading) return;

        const ctx = gsap.context(() => {
            gsap.set([leftContentRef.current, rightContentRef.current], {
                opacity: 0,
                x: (i) => i ? 100 : -100 
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: componentRef.current,
                    start: "top 70%", 
                    end: "bottom 30%",
                    toggleActions: "play none none none", 
                    markers: false 
                }
            });

            tl.to([leftContentRef.current, rightContentRef.current], {
                x: 0,
                opacity: 1,
                duration: 2.5,
                stagger: 0.2,
                ease: "power3.out"
            });

        }, componentRef);

        return () => ctx.revert();
    }, [loading]);

    return (
        <Grid
            container
            spacing={2}
            display={loading ? "none" : "flex"}
            sx={{ flexGrow: 1, pt: { xs: 3, sm: 5 }, pb: 10, px: { xs: 2, sm: 5, md: 13 } }}
            ref={componentRef}
        >
            {/* left content */}
            <Grid
                sx={{ flexGrow: 1 }}
                item
                container
                xs={12}
                md={6}
                justifyContent="center"
                alignItems="center"
                ref={leftContentRef}
            >
                <Stack spacing={6}>
                    <Stack spacing={2}>
                        <TitleHomePage text={title} />
                        <Stack spacing={4}>
                            <WordingHomePage text={wording} />
                            <Box sx={{ display: 'flex', width: '100%', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-start' } }}>
                                <Button variant="contained" color="primary" onClick={handleClick}>Join Now</Button>
                            </Box>
                        </Stack>
                    </Stack>
                </Stack>
            </Grid>
            {/* right content */}
            <Grid
                item
                container
                sx={{ flexGrow: 1 }}
                xs={12}
                md={6}
                justifyContent="center"
                alignItems="center"
                ref={rightContentRef}
            >
                <Stack spacing={2}>
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' } }}>
                        <img
                            src={illustration}
                            alt="community illustration"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </Box>
                </Stack>
            </Grid>
        </Grid>
    );
};

export default CommunityIsCalling;