import { Paper, Skeleton, Stack } from '@mui/material';

function LoadingDetailInformation() {
    return (
        <Paper elevation={0} sx={{ py: 2, background: '#F8FFF8' }}>
            <Stack spacing={1}>
                <Skeleton
                    variant="text"
                    width="15%"
                />
                <Skeleton
                    variant="rectangular"
                    sx={{
                        height: {
                            xs: 200,
                            sm: 300,
                            md: 400
                        }
                    }}
                />
            </Stack>
        </Paper >
    )
}

export default LoadingDetailInformation;
