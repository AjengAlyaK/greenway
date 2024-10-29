import React from 'react';
import PropTypes from 'prop-types';
import { Box, Stack, Typography } from '@mui/material';
import ReactButtonGroup from './ReactButtonGroup';
import { useNavigate } from 'react-router';

const DiscussionContent = ({ discussionId, userId, title, body, category, likes, dislikes, upVotesBy, downVotesBy, comments }) => {
    const navigate = useNavigate();

    const clickDetailDiscussion = ({ discussionId }) => {
        navigate(`/discussion/${discussionId}`);
    };

    return (
        <Box sx={{ pt: 2 }}>
            <Stack spacing={2}>
                <Stack spacing={1}>
                    <Typography onClick={() => clickDetailDiscussion({ discussionId })} component="span" variant="h6" sx={{ fontWeight: 'bold', cursor: 'pointer' }}>{title}</Typography>
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
                        clickDetailDiscussion={clickDetailDiscussion}
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