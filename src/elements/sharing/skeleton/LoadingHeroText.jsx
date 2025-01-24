import React from 'react';
import PropTypes from 'prop-types';
import { Skeleton, Typography } from '@mui/material';

const LoadingHeroText = ({ text }) => {
    return (
        <Skeleton>
            <Typography variant="body1" sx={{ fontSize: 16, pr: { xs: 0, md: 3 }, textAlign: { xs: 'center', md: 'justify' } }}>
                {text}
            </Typography>
        </Skeleton>
    );
};

LoadingHeroText.propTypes = {
    text: PropTypes.string.isRequired,
};

export default LoadingHeroText;