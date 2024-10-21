import React from 'react';
import PropTypes from 'prop-types';
import { Box, Stack, Typography } from '@mui/material';
import ReactButtonGroup from './ReactButtonGroup';

const DiscussionContent = ({ discussionId, title, body, category, likes, dislikes, comments }) => {
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
                    <ReactButtonGroup
                        discussionId={discussionId}
                        likes={likes}
                        dislikes={dislikes}
                        comments={comments}
                    />
                </>
            </Stack>
        </Box>
    );
};

DiscussionContent.propTypes = {
    discussionId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    dislikes: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
};

export default DiscussionContent;