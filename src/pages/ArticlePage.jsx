import React, { useEffect, useState } from 'react';
import { Grid, Stack } from '@mui/material';
import CardArticle from '../elements/artikel/CardArticle';
import { useDispatch, useSelector } from 'react-redux';
import { asyncReceiveArticles } from '../states/article/action';
import TitleContent from '../elements/sharing/TitleContent';
import LoadingTitleContent from '../elements/sharing/skeleton/LoadingTitleContent';
import LoadingCard from '../elements/sharing/skeleton/LoadingCard';

const title = "Read Insightful Articles In Your Free Time";
const subtitle = "There are many choices of useful articles to read, let's make the best your free time to get inspired.";

const ArticlePage = () => {
    const { articles } = useSelector((states) => states);
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            await dispatch(asyncReceiveArticles());
            setLoading(false);
        };

        fetchData();
    }, [dispatch]);

    return (
        <Grid container spacing={3} sx={{ pt: { xs: 2, sm: 4 }, pb: { xs: 10, md: 13 }, px: { xs: 2, sm: 5, md: 13 } }}>
            <Grid item xs={12} sx={{ mb: { md: 2 } }}>
                <Stack spacing={2}>
                    {loading ?
                        <LoadingTitleContent title={title} subtitle={subtitle} />
                        :
                        <TitleContent title={title} subtitle={subtitle} />
                    }
                </Stack>
            </Grid>
            {
                loading ?
                    Array.from({ length: 10 }).map((_, index) => (
                        <Grid item xs={12} sm={4} md={3}>
                            <LoadingCard key={index} />
                        </Grid>
                    ))
                    :
                    articles.map((article, index) => (
                        <Grid item xs={12} sm={4} md={3}>
                            <CardArticle loading={loading} key={index} image={article.picture} title={article.title} link={article.link} />
                        </Grid>
                    ))
            }
        </Grid>
    );
};

export default ArticlePage;