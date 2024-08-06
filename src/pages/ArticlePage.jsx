import React, { useEffect } from 'react';
import { Grid, Stack, Typography } from '@mui/material';
import CardArticle from '../elements/artikel/CardArticle';
import { useDispatch, useSelector } from 'react-redux';
import { asyncReceiveArticles } from '../states/article/action';

const ArticlePage = () => {
    const { articles } = useSelector((states) => states);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(asyncReceiveArticles());
    }, [dispatch]);
    return (
        <Grid container spacing={3} sx={{ py: { xs: 8, md: 13 }, px: { xs: 2, md: 13 } }}>
            <Grid item xs={12} sx={{ mb: { md: 2 } }}>
                <Stack spacing={2}>
                    <Typography sx={{ color: '#006E6F', typography: { xs: 'h4', md: 'h3' }, textAlign: { xs: 'center', md: 'center' }, fontWeight: { xs: 'bold', md: 'bold' } }}>
                        Read Insightful Articles <br />In Your Free Time
                    </Typography>
                    <Typography variant="body1" textAlign="center">
                        There are many choices of useful articles to read, let's <br /> make the best your free time to get inspired.
                    </Typography>
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