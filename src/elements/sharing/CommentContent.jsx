import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';

const CommentContent = ({ comment }) => {
    return (
        <Box sx={{ pt: 1.5 }}>
            <Typography variant="body1">
                {comment}
            </Typography>
        </Box>
    );
};

CommentContent.propTypes = {
    comment: PropTypes.string.isRequired,
};

export default CommentContent;