import { Skeleton, Typography } from "@mui/material";

const LoadingAboutUs = () => {
    return (
        <Skeleton>
            <Typography
                sx={{
                    color: '#006E6F',
                    typography: { xs: 'h5', md: 'h4' },
                    fontWeight: { xs: 'bold', md: 'bold' },
                }}
            >
                About Us
            </Typography>
        </Skeleton>
    );
};

export default LoadingAboutUs;