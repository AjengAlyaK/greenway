import { Box, Skeleton } from "@mui/material"

function LoadingRecord() {
    return (
        <Box
            sx={{
                px: { xs: 2, sm: 5, md: 13 },
                py: 2
            }}
        >
            <Skeleton variant="square" height={280} />
        </Box>
    )
}

export default LoadingRecord;