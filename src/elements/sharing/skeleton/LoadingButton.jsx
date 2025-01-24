import React from 'react';
import PropTypes from 'prop-types';
import { Button, Skeleton } from '@mui/material';

const LoadingButton = ({ text }) => {
    return (
        <Skeleton>
            <Button variant="contained" color="primary">{text}</Button>
        </Skeleton>
    );
};

LoadingButton.propTypes = {
    text: PropTypes.string.isRequired,
};

export default LoadingButton;