import { Grid, Skeleton } from '@mui/material';

const LoadingSearchArticle = () => {
    return (
        <Grid
            item
            xs={8}
            md={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <Skeleton
                variant="rectangular"
                sx={{
                    height: '80px',
                    width: '100%'
                }}
            />
        </Grid>
    );
};

export default LoadingSearchArticle;