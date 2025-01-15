import { Skeleton } from '@mui/material';

const LoadingCard = () => {
    return (
        <Skeleton
            variant="rounded"
            width="100%"
            height={200}
            sx={{
                borderRadius: 3
            }}
        />
    );
};

export default LoadingCard;