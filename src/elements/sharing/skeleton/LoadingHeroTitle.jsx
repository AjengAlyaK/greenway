import React from 'react';
import PropTypes from 'prop-types';
import { Skeleton, Typography } from '@mui/material';

const LoadingHeroTitle = ({ text }) => {
    return (
        <Skeleton variant="text" width="100%">
            <Typography
                sx={{
                    color: '#006E6F',
                    typography: { xs: 'h4', sm: 'h3', md: 'h3', lg: 'h2' },
                    fontWeight: { xs: 'bold', sm: 'bold', md: 'bold', lg: 'bold' },
                    pt: { xs: 2, sm: 4, md: 0 }, pr: { xs: 0, md: 3 },
                    textAlign: { xs: 'center', md: 'start' }
                }}>
                {text}
            </Typography>
        </Skeleton>
    );
};

LoadingHeroTitle.propTypes = {
    text: PropTypes.string.isRequired,
};

export default LoadingHeroTitle;