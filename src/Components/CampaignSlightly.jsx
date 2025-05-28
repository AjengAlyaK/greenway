import { Grid, Stack, Box, Button } from '@mui/material';
import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncReceiveCampaigns } from '../states/campaign/Action';
import { Link } from 'react-router-dom';
import CardGeneral from '../elements/sharing/CardGeneral';
import TitleHomePage from '../elements/sharing/TitleHomePage';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const title = "Campaign";

gsap.registerPlugin(ScrollTrigger);

const CampaignSlightly = () => {
    const { campaigns } = useSelector((states) => states);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const containerRef = useRef();
    const titleRef = useRef();
    const buttonRef = useRef();
    const cardRefs = useRef([]);

    useEffect(() => {
        dispatch(asyncReceiveCampaigns());
    }, [dispatch]);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    const displayedCampaigns = campaigns.slice(0, 4);

    // Store card refs
    const addToRefs = (el) => {
        if (el && !cardRefs.current.includes(el)) {
            cardRefs.current.push(el);
        }
    };

    // GSAP Animation with ScrollTrigger
    useEffect(() => {
        if (loading || displayedCampaigns.length === 0) return;

        const ctx = gsap.context(() => {
            // Set initial state (hidden)
            gsap.set([titleRef.current, buttonRef.current, ...cardRefs.current], {
                opacity: 0,
                y: 60
            });

            // Animate title
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

            // Animate "See All" button
            gsap.to(buttonRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: buttonRef.current,
                    start: "top 75%",
                    toggleActions: "play none none none"
                }
            });

            // Animate cards with stagger and bounce
            cardRefs.current.forEach((card, index) => {
                gsap.to(card, {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    ease: "back.out(1.4)",
                    delay: index * 0.15,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 80%",
                        toggleActions: "play none none none"
                    }
                });
            });

        }, containerRef);

        return () => ctx.revert();
    }, [loading, displayedCampaigns]);

    return (
        <Grid
            container
            spacing={3}
            display={loading ? "none" : "flex"}
            sx={{ py: { xs: 3, sm: 5 }, px: { xs: 2, sm: 5, md: 13 }, justifyContent: 'center', alignItems: 'center' }}
            ref={containerRef}
        >
            <Stack spacing={2} sx={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <div ref={titleRef}>
                    <TitleHomePage text={title} />
                </div>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', width: '100%' }}>
                    <div ref={buttonRef}>
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            component={Link}
                            to="/campaigns"
                        >
                            See All
                        </Button>
                    </div>
                </Box>
            </Stack>
            {displayedCampaigns.map((campaign, index) => (
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={3}
                    key={index}
                    ref={addToRefs}
                >
                    <CardGeneral
                        path="campaign"
                        id={campaign.id}
                        index={index}
                        picture={campaign.picture}
                        name={campaign.name}
                        location={campaign.location}
                    />
                </Grid>
            ))}
        </Grid>
    );
};

export default CampaignSlightly;