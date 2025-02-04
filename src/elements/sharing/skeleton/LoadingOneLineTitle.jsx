import React from 'react';
import PropTypes from 'prop-types';
import { Skeleton, Typography } from '@mui/material';

const LoadingOneLineTitle = ({ text }) => {
    return (
        <Skeleton>
            <Typography sx={{ typography: { xs: 'h5', md: 'h4' } }}>
                {text}
            </Typography>
        </Skeleton>
    );
};

LoadingOneLineTitle.propTypes = {
    text: PropTypes.string.isRequired,
};

export default LoadingOneLineTitle;