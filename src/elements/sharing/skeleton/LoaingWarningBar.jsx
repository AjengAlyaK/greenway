import { Skeleton } from '@mui/material'
import React from 'react'

function LoadingWarningBar() {
    return (
        <Skeleton
            variant="rectangular"
            sx={{
                borderRadius: 1,
                height: {
                    xs: 100,
                    sm: 90,
                    md: 80
                }
            }}
        />
    )
}

export default LoadingWarningBar
