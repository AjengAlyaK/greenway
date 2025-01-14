import { Box, Skeleton, Stack, Typography } from '@mui/material';

function LoadingTitle() {
    return (
        <Stack spacing={{ xs: 2, md: 3 }}>
            <Skeleton variant="rounded" width="100%">
                <Typography sx={{ color: '#006E6F', typography: { xs: 'h4', md: 'h3' }, textAlign: { xs: 'center', md: 'center' }, fontWeight: { xs: 'bold', md: 'bold' } }}>
                    Lorem.
                </Typography>
            </Skeleton>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Skeleton variant="rounded" width="80%">
                    <Typography variant="body1" textAlign="center" sx={{ width: '80%' }}>
                        Lorem.
                    </Typography>
                </Skeleton>
            </Box>
        </Stack>
    )
}

export default LoadingTitle;
