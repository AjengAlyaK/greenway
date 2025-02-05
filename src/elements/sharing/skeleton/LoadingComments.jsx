import { Skeleton, Typography } from '@mui/material';

function LoadingComments() {
    return (
        <Skeleton>
            <Typography sx={{ typography: { xs: 'h6', md: 'h5' }, fontWeight: { xs: 'bold', md: 'bold' }, color: '#006E6F', py: 3 }}>
                Comments (N)
            </Typography>
        </Skeleton>
    )
}

export default LoadingComments;
