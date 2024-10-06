import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

const OneLineTitle = ({ title }) => {
    return (
        <Typography sx={{ typography: { xs: 'h5', md: 'h4' }, fontWeight: { xs: 'bold', md: 'bold' }, color: '#006E6F' }}>
            {title}
        </Typography>
    );
};

OneLineTitle.propTypes = {
    title: PropTypes.string.isRequired,
};

export default OneLineTitle;