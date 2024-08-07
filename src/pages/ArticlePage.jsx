import React, { useEffect } from 'react';
import { Grid, Stack } from '@mui/material';
import CardArticle from '../elements/artikel/CardArticle';
import { useDispatch, useSelector } from 'react-redux';
import { asyncReceiveArticles } from '../states/article/action';
import TitleContent from '../elements/sharing/TitleContent';

const ArticlePage = () => {
    const { articles } = useSelector((states) => states);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(asyncReceiveArticles());
    }, [dispatch]);
    return (
        <Grid container spacing={3} sx={{ pt: { xs: 8, md: 13 }, pb: {xs: 10, md: 13}, px: { xs: 2, md: 13 } }}>
            <Grid item xs={12} sx={{ mb: { md: 2 } }}>
                <Stack spacing={2}>
                    <TitleContent title="Read Insightful Articles In Your Free Time" subtitle="There are many choices of useful articles to read, let's make the best your free time to get inspired."/>
                </Stack>
            </Grid>
            {articles.map((article, index) => (
                <Grid item xs={12} md={3}>
                    <CardArticle key={index} image={article.picture} title={article.title} link={article.link} />
                </Grid>
            ))}
        </Grid>
    );
};

export default ArticlePage;