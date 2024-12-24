// import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
// import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
// import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { useDispatch } from 'react-redux';
import { asyncDownVote, asyncNetralVote, asyncUpVote } from '../states/discussion/action';

const ReactButtonGroup = ({ discussionId, userId, likes, dislikes, upVotesBy, downVotesBy, comments, createCommentIcon }) => {
    const dispatch = useDispatch();
    const upVote = ({ discussionId }) => {
        dispatch(asyncUpVote({ discussionId }));
    };

    const downVote = ({ discussionId }) => {
        dispatch(asyncDownVote({ discussionId }));
    }

    return (
        <Stack direction="row" spacing={2}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton aria-label='like' onClick={() => upVote({ discussionId })}>
                    <ThumbUpOutlinedIcon />
                </IconButton>
                <Typography sx={{ mr: 1 }}>7</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton aria-label='unlike' onClick={() => downVote({ discussionId })}>
                    <ThumbDownOutlinedIcon />
                </IconButton>
                <Typography sx={{ mr: 1 }}>7</Typography>
            </Box>
            {createCommentIcon && createCommentIcon({ discussionId, comments })}
        </Stack>
    );
};

ReactButtonGroup.propTypes = {
    discussionId: PropTypes.string.isRequired,
    userId: PropTypes.string,
    likes: PropTypes.number.isRequired,
    dislikes: PropTypes.number.isRequired,
    upVotesBy: PropTypes.array.isRequired,
    downVotesBy: PropTypes.array.isRequired,
    comments: PropTypes.number,
    createCommentIcon: PropTypes.func,
};

export default ReactButtonGroup;