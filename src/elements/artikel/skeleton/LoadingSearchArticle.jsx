import { Grid, Skeleton } from '@mui/material';

const LoadingSearchArticle = () => {
    return (
        <Grid item xs={8} md={4}>
            <Skeleton
                sx={{
                    height: { xs: '80px' },
                    width: { xs: '80%', sm: '100%' }
                }}
            />
        </Grid>
    );
};

export default LoadingSearchArticle;