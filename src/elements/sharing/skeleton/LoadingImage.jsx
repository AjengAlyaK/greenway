import { Skeleton } from "@mui/material";

function LoadingImage() {
    return (
        <Skeleton
            variant="rectangular"
            width="100%"
            height={400}
            sx={{
                mb: 5
            }}
        />
    )
}

export default LoadingImage;
