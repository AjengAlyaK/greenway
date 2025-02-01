import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

const DisplayNoResult = ({image, text}) => {
    return (
        <>
            <img
                component="img"
                alt="No Result"
                src={image}
                style={{
                    width: '20%',
                    height: 'auto',
                }}
            />
            <Typography
                variant="body1"
                sx={{
                    py: 3,
                    color: '#006E6F',
                    fontWeight: 'bold'
                }}
            >
                {text}
            </Typography>
        </>
    );
};

DisplayNoResult.propTypes = {
    image: PropTypes.string,
    text: PropTypes.string,
};

export default DisplayNoResult;