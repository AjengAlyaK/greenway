import React from 'react';
import PropTypes from 'prop-types';
import { Box, Stack, Typography } from '@mui/material';
import ReactButtonGroup from './ReactButtonGroup';

const DiscussionContent = ({ title, body, category, likes, dislikes, comments }) => {
    return (
        <Box sx={{ pt: 2 }}>
            <Stack spacing={2}>
                <Stack spacing={1}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{title}</Typography>
                    <Typography variant="subtitle1">{body}</Typography>
                </Stack>
                <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>#{category}</Typography>
                </Box>
                <>
                    <ReactButtonGroup likes={likes} dislikes={dislikes} comments={comments} />
                </>
            </Stack>
        </Box>
    );
};

DiscussionContent.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    likes: PropTypes.string.isRequired,
    dislikes: PropTypes.string.isRequired,
    comments: PropTypes.string.isRequired,
};

export default DiscussionContent;