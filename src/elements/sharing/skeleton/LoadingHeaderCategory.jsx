import { Skeleton } from '@mui/material'
import React from 'react'

function LoadingHeaderCategory() {
    return (
        <Skeleton
            sx={{
                width: {
                    xs: '50%',
                    sm: '25%',
                    md: '20%'
                }
            }}
        />
    )
}

export default LoadingHeaderCategory
