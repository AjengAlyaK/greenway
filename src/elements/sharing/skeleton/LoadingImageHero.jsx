import { Skeleton } from "@mui/material";

function LoadingImageHero() {
    return (
        <Skeleton
            variant="rectangular"
            width="100%"
            sx={{
                height: {
                    xs: "80vh",
                    md: "100vh"
                }
            }}
        />
    )
}

export default LoadingImageHero
