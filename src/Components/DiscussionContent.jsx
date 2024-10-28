import React from 'react';
import PropTypes from 'prop-types';
import { Box, Stack, Typography } from '@mui/material';
import ReactButtonGroup from './ReactButtonGroup';

const DiscussionContent = ({ discussionId, userId, title, body, category, likes, dislikes, upVotesBy, downVotesBy, comments }) => {
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
                        userId={userId}
                        likes={likes}
                        dislikes={dislikes}
                        upVotesBy={upVotesBy}
                        downVotesBy={downVotesBy}
                        comments={comments}
                    />
                </>
            </Stack>
        </Box>
    );
};

DiscussionContent.propTypes = {
    discussionId: PropTypes.string.isRequired,
    userId: PropTypes.string,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    dislikes: PropTypes.number.isRequired,
    upVotesBy: PropTypes.array.isRequired,
    downVotesBy: PropTypes.array.isRequired,
    comments: PropTypes.number,
};

export default DiscussionContent;