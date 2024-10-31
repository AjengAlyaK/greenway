import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';

const CategoryDiscussionTag = ({ category }) => {
    return (
        <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>#{category}</Typography>
        </Box>
    );
};

CategoryDiscussionTag.propTypes = {
    category: PropTypes.string.isRequired,
};

export default CategoryDiscussionTag;