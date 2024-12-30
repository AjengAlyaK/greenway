import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

const TitleHomePage = ({ text }) => {
    return (
        <Typography sx={{ color: '#006E6F', typography: { xs: 'h4', sm: 'h3' }, textAlign: { xs: 'center', md: 'start' }, fontWeight: { xs: 'bold', sm: 'bold', md: 'bold' } }}>{text}</Typography>
    );
};

TitleHomePage.propTypes = {
    text: PropTypes.string.isRequired,
};

export default TitleHomePage;