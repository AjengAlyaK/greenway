import { Box, CardMedia, Grid } from '@mui/material';
import { useEffect, useState, useRef } from 'react';
import TitleHomePage from '../elements/sharing/TitleHomePage';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const title = "Nature of Indonesia";
const videoSrc = "https://firebasestorage.googleapis.com/v0/b/mostgreen.appspot.com/o/Wonderful%20Indonesia%20-%20Nature.mp4?alt=media&token=bc06930b-651f-4a8e-8c6f-66b274c921ef"

gsap.registerPlugin(ScrollTrigger);

const Video = () => {
    const [loading, setLoading] = useState(true);
    const containerRef = useRef();
    const titleRef = useRef();
    const videoRef = useRef();

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (loading) return;
        if (!containerRef.current || !titleRef.current || !videoRef.current) return;

        const ctx = gsap.context(() => {
            // Set initial state (hidden)
            gsap.set([titleRef.current, videoRef.current], {
                opacity: 0,
                y: 40
            });

            // Title animation
            gsap.to(titleRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 75%",
                    toggleActions: "play none none none"
                }
            });

            // Video card animation
            gsap.to(videoRef.current, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "back.out(1.2)",
                scrollTrigger: {
                    trigger: videoRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            });

        }, containerRef);

        return () => ctx.revert();
    }, [loading]);

    return (
        <div ref={containerRef}>
            <Box
                display={loading ? "none" : "flex"}
                sx={{
                    pt: { xs: 3, md: 5 },
                    pb: { xs: 1, sm: 2 },
                    px: { xs: 2, md: 13 },
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                ref={titleRef}
            >
                <TitleHomePage text={title} />
            </Box>
            <Grid
                container
                spacing={2}
                display={loading ? "none" : "flex"}
                sx={{ px: { xs: 2, sm: 5, md: 13 }, py: { xs: 3, sm: 2, md: 5 }, justifyContent: 'center', alignItems: 'center' }}
            >
                <Grid
                    item
                    spacing={2}
                    xs={12}
                    ref={videoRef}
                >
                    <CardMedia
                        component="video"
                        title="test"
                        src={videoSrc}
                        sx={{ width: '100%', height: 'auto', borderRadius: 3 }}
                        controls
                    />
                </Grid>
            </Grid>
        </div>
    );
};

export default Video;