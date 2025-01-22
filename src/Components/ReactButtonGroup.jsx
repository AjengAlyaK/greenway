import React, { useState } from 'react';
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

    const [likeCount, setLikeCount] = useState(likes);
    const [dislikeCount, setDislikeCount] = useState(dislikes);
    const [like, setLike] = useState(isLike);
    const [dislike, setDislike] = useState(isDislike);

    const upVote = ({ discussionId }) => {
        if (authUser) {
            if (isLike) {
                setLike(!isLike);
                setLikeCount((prev) => prev - 1);
                dispatch(asyncNetralVote({ discussionId }));
            } else if (!isLike) {
                setLike(!isLike);
                setLikeCount((prev) => prev + 1);
                dispatch(asyncUpVote({ discussionId }));
            } else if (isDislike) {
                setDislike(!isDislike);
                setDislikeCount((prev) => prev - 1);
                setLikeCount((prev) => prev + 1);
                dispatch(asyncNetralVote({ discussionId }));
                dispatch(asyncUpVote({ discussionId }));
            }
        } else {
            alert("login first!");
        }
    };

    const downVote = ({ discussionId }) => {
        if (authUser) {
            if (isDislike) {
                setDislike(!isDislike);
                setDislikeCount((prev) => prev - 1);
                dispatch(asyncNetralVote({ discussionId }));
            } else if (!isDislike) {
                setDislike(!isDislike);
                setDislikeCount((prev) => prev + 1);
                dispatch(asyncDownVote({ discussionId }));
            } else if (isLike) {
                setLike(!isLike);
                setLikeCount((prev) => prev - 1);
                setDislikeCount((prev) => prev + 1);
                dispatch(asyncNetralVote({ discussionId }));
                dispatch(asyncDownVote({ discussionId }));
            }
        } else {
            alert("login first!");
        }
    };

    return (
        <Stack direction="row" spacing={2}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton aria-label='like' onClick={() => upVote({ discussionId })}>
                    {like ? <ThumbUpIcon /> : <ThumbUpOutlinedIcon />}
                </IconButton>
                <Typography sx={{ mr: 1 }}>{likeCount}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton aria-label='unlike' onClick={() => downVote({ discussionId })}>
                    {dislike ? <ThumbDownIcon /> : <ThumbDownOutlinedIcon />}
                </IconButton>
                <Typography sx={{ mr: 1 }}>{dislikeCount}</Typography>
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