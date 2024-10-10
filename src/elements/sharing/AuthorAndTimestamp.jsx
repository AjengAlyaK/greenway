import React from 'react';
import PropTypes from 'prop-types';
import { Stack, Typography } from '@mui/material';

const AuthorAndTimestamp = ({name, timestamp}) => {
    return (
        <Stack
            sx={{ pl: 2 }}
        >
            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                {name}
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>{timestamp}</Typography>
        </Stack>
    );
};

AuthorAndTimestamp.propTypes = {
    name: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
};

export default AuthorAndTimestamp;