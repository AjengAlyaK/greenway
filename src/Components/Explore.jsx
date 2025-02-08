import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import CardExplore from '../elements/entrance/CardExplore';

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

const Explore = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

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
        >
            {ExploreContents.map((content) => (
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    key={content.id}
                >
                    <CardExplore title={content.title} subtitle={content.subtitle} />
                </Grid>
            ))}
        </Grid>
    );
};

export default Explore;