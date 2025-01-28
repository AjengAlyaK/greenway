import { Paper, Skeleton, Stack } from '@mui/material';

function LoadingDetailInformation() {
    return (
        <Paper elevation={0} sx={{ py: 2 }}>
            <Stack spacing={1}>
                <Skeleton
                    variant="text"
                    width="15%"
                />
                <Skeleton
                    variant="rectangular"
                    height={500}
                />
            </Stack>
        </Paper >
    )
}

export default LoadingDetailInformation;
