import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

const WordingHomePage = ({ text }) => {
    return (
        <Typography sx={{ textAlign: { xs: 'center', md: 'justify' }, typography: { xs: 'body1' } }}>{text}</Typography>
    );
};

WordingHomePage.propTypes = {
    text: PropTypes.string.isRequired,
};

export default WordingHomePage;