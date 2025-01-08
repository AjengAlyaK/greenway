import React from 'react';
import PropTypes from 'prop-types';
import { Box, Stack, Typography } from '@mui/material';
import ReactButtonGroup from './ReactButtonGroup';
import { useNavigate } from 'react-router';
import CategoryDiscussionTag from '../elements/sharing/CategoryDiscussionTag';

const DiscussionContent = ({ discussionId, title, body, category, likes, dislikes, upVotesBy, downVotesBy, comments, createCommentIcon }) => {
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
                {category && <CategoryDiscussionTag category={category} />}
                <>
                    <ReactButtonGroup
                        discussionId={discussionId}
                        likes={likes}
                        dislikes={dislikes}
                        upVotesBy={upVotesBy}
                        downVotesBy={downVotesBy}
                        comments={comments}
                        clickDetailDiscussion={clickDetailDiscussion}
                        createCommentIcon={createCommentIcon}
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
    category: PropTypes.string,
    likes: PropTypes.number.isRequired,
    dislikes: PropTypes.number.isRequired,
    upVotesBy: PropTypes.array.isRequired,
    downVotesBy: PropTypes.array.isRequired,
    comments: PropTypes.number,
    commentIcon: PropTypes.func,
};

export default DiscussionContent;