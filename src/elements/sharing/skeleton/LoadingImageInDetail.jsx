import { Box, Paper, Skeleton, Stack, Typography } from '@mui/material';

const LoadingImageInDetail = () => {
    return (
        <>
            <Paper elevation={0}>
                <Skeleton
                    variant="rectangular"
                    sx={{
                        height: {
                            xs: 230, 
                            sm: 450,
                            md: 500
                        },
                        borderRadius: 5,
                    }}
                />
            </Paper>
            <Stack spacing={2} sx={{ py: 2 }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Skeleton
                        variant="circular"
                        width={20}
                        height={20}
                        sx={{
                            mr: 1
                        }}
                    />
                    <Skeleton variant="text">
                        <Typography>
                            Lorem, ipsum dolor.
                        </Typography>
                    </Skeleton>
                </Box>
                <Skeleton>
                    <Typography sx={{ typography: { xs: 'h5', md: 'h4' }, fontWeight: { xs: 'bold', md: 'bold' }, color: '#006E6F' }}>
                        Lorem, ipsum dolor.
                    </Typography>
                </Skeleton>
            </Stack >
        </>
    );
};

export default LoadingImageInDetail;