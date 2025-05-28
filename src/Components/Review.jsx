import { Box, Grid } from '@mui/material';
import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncReceiveReviews } from '../states/review/Action';
import TitleHomePage from '../elements/sharing/TitleHomePage';
import CardReview from '../elements/entrance/CardReview';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const title = "People are Talking ...";

gsap.registerPlugin(ScrollTrigger);

const Review = () => {
    const { reviews } = useSelector((states) => states);
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true);
    const containerRef = useRef();
    const titleRef = useRef();
    const cardRefs = useRef([]);

    useEffect(() => {
        dispatch(asyncReceiveReviews());
    }, [dispatch]);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    const addToRefs = (el) => {
        if (el && !cardRefs.current.includes(el)) {
            cardRefs.current.push(el);
        }
    };

    useEffect(() => {
        if (loading || reviews.length === 0) return;

        const ctx = gsap.context(() => {
            gsap.set([titleRef.current, ...cardRefs.current], {
                opacity: 0,
                y: 50
            });

            gsap.to(titleRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            });

            cardRefs.current.forEach((card, index) => {
                gsap.to(card, {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: "back.out(1.2)",
                    delay: index * 0.1,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                });
            });

        }, containerRef);

        return () => ctx.revert();
    }, [loading, reviews]);

    return (
        <div ref={containerRef}>
            <Box
                display={loading ? "none" : "flex"}
                sx={{
                    pt: { xs: 3, md: 5 },
                    pb: { xs: 1, sm: 2 },
                    px: { xs: 2, sm: 5, md: 13 },
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                ref={titleRef}
            >
                <TitleHomePage text={title} />
            </Box>
            <Grid
                container
                spacing={3}
                display={loading ? "none" : "flex"}
                sx={{ py: { xs: 3, sm: 2, md: 5 }, px: { xs: 2, sm: 5, md: 13 }, justifyContent: 'center', alignItems: 'strech' }}
            >
                {reviews.map((content, index) => (
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        key={index}
                        display="flex"
                        ref={addToRefs}
                    >
                        <CardReview
                            name={content.name}
                            photo={content.photo}
                            review={content.review}
                            occupation={content.occupation}
                        />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Review;