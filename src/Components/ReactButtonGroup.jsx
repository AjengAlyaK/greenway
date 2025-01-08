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
                dispatch(asyncNetralVote({ discussionId }));
                setLikeCount((prev) => prev - 1);
                setLike(!isLike);
            } else if (!isLike) {
                dispatch(asyncUpVote({ discussionId }));
                setLikeCount((prev) => prev + 1);
                setLike(!isLike);
            } else if (isDislike) {
                dispatch(asyncNetralVote({ discussionId }));
                setDislikeCount((prev) => prev - 1);
                dispatch(asyncUpVote({ discussionId }));
                setLikeCount((prev) => prev + 1);
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
                setDislikeCount((prev) => prev - 1);
                setDislike(!isDislike);
            } else if (!isDislike) {
                dispatch(asyncDownVote({ discussionId }));
                setDislikeCount((prev) => prev + 1);
                setDislike(!isDislike);
            } else if (isLike) {
                dispatch(asyncNetralVote({ discussionId }));
                setLikeCount((prev) => prev - 1)
                dispatch(asyncDownVote({ discussionId }));
                setDislikeCount((prev) => prev + 1)
                setLike(!isLike);
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