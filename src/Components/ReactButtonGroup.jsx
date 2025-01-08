import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { useDispatch, useSelector } from 'react-redux';
import { asyncDownVote, asyncNetralVote, asyncUpVote } from '../states/discussion/action';

const ReactButtonGroup = ({ discussionId, likes, dislikes, upVotesBy, downVotesBy, comments, createCommentIcon }) => {
    const dispatch = useDispatch();
    const { authUser = null } = useSelector((states) => states);

    const isLike = upVotesBy.includes(authUser?.id);
    const isDislike = downVotesBy.includes(authUser?.id);

    const [like, setLike] = useState(isLike);
    const [dislike, setDislike] = useState(isDislike);

    const upVote = ({ discussionId }) => {
        if (authUser) {
            if (isLike) {
                dispatch(asyncNetralVote({ discussionId }));
                setLike(!isLike);
            } else if (!isLike) {
                dispatch(asyncUpVote({ discussionId }));
                setLike(!isLike);
            } else if (isDislike) {
                dispatch(asyncNetralVote({ discussionId }));
                dispatch(asyncUpVote({ discussionId }));
                setDislike(!isDislike);
            }
        } else {
            alert("login first!");
        }
    };

    const downVote = ({ discussionId }) => {
        if (authUser) {
            if (isDislike) {
                dispatch(asyncNetralVote({ discussionId }));
                setDislike(!isDislike);
            } else if (!isDislike) {
                dispatch(asyncDownVote({ discussionId }));
                setDislike(!isDislike);
            } else if (isLike) {
                dispatch(asyncNetralVote({ discussionId }));
                dispatch(asyncDownVote({ discussionId }));
                setLike(!isLike);
            }
        } else {
            alert("login first!");
        }
    };

    // case click like
    // 1. when button already liked by logged user (DONE)
    // 2. yet liked
    // 3. when button already unliked by logged user
    // 4. when logout the filled dissapear

    // case click dislike
    // 1. when button already disliked by logged user (DONE)
    // 2. yet disliked
    // 3. when button already liked by logged user
    // 4. when logout the filled dissapear

    return (
        <Stack direction="row" spacing={2}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton aria-label='like' onClick={() => upVote({ discussionId })}>
                    {upVotesBy.includes(authUser?.id) ? <ThumbUpIcon /> : <ThumbUpOutlinedIcon />}
                </IconButton>
                <Typography sx={{ mr: 1 }}>{likes}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton aria-label='unlike' onClick={() => downVote({ discussionId })}>
                    {downVotesBy.includes(authUser?.id) ? <ThumbDownIcon /> : <ThumbDownOutlinedIcon />}
                </IconButton>
                <Typography sx={{ mr: 1 }}>{dislikes}</Typography>
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