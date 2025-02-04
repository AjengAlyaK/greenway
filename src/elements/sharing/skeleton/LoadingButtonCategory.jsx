import { Button, Skeleton } from '@mui/material'
import React from 'react'

function LoadingButtonCategory() {
    return (
        <Skeleton
            sx={{
                mr: 1,
                mb: 1,
            }}
        >
            <Button>
                Lorem.
            </Button>
        </Skeleton>
    )
}

export default LoadingButtonCategory;
