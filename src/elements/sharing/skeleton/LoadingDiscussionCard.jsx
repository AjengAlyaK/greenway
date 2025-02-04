import React from 'react';
import { Skeleton } from '@mui/material';

const LoadingDiscussionCard = () => {
    return (
        <Skeleton
            variant="rectangular"
            height={300}
            sx={{
                borderRadius: 4
            }}
        />
    );
};

export default LoadingDiscussionCard;