import { Grid } from '@mui/material';
import { useEffect, useState, useRef } from 'react';
import CardExplore from '../elements/entrance/CardExplore';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ExploreContents = [
    {
        id: 0,
        title: "Explore Destinations",
        subtitle: "Explore travel destination and share experience with exploler."
    },
    {
        id: 1,
        title: "Sustainable Journeys",
        subtitle: "Discover our curated selection of campaign destinations."
    },
    {
        id: 2,
        title: "Green Travel Actions",
        subtitle: "Learn about our initiatives for sustainable travel awareness."
    },
];

gsap.registerPlugin(ScrollTrigger);

const Explore = () => {
    const [loading, setLoading] = useState(true);
    const componentRef = useRef();
    const cardRefs = useRef([]);

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
        if (loading) return;

        const ctx = gsap.context(() => {
            gsap.set(cardRefs.current, {
                opacity: 0,
                y: 100
            });

            cardRefs.current.forEach((card, index) => {
                gsap.to(card, {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "back.out(1.2)",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 80%",
                        toggleActions: "play none none none",
                        markers: false 
                    },
                    delay: index * 0.1 
                });
            });

        }, componentRef);

        return () => ctx.revert();
    }, [loading]);

    return (
        <Grid
            container
            display={loading ? "none" : "flex"}
            justifyContent="space-between"
            spacing={{
                xs: 3,
                md: 4
            }}
            sx={{
                px: { xs: 2, sm: 5, md: 13 },
                py: { xs: 3, md: 5 },
            }}
            ref={componentRef}
        >
            {ExploreContents.map((content) => (
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    key={content.id}
                    ref={addToRefs}
                >
                    <CardExplore title={content.title} subtitle={content.subtitle} />
                </Grid>
            ))}
        </Grid>
    );
};

export default Explore;