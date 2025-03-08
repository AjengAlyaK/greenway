import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { useDispatch, useSelector } from 'react-redux';
import { asyncDownVote, asyncNetralVote, asyncUpVote } from '../states/discussionDetail/action';
// import { asyncDownVote, asyncNetralVote, asyncUpVote } from '../states/discussion/action';

const ReactButtonGroup = ({ discussionId, likes, dislikes, upVotesBy, downVotesBy, comments, createCommentIcon, commentId }) => {
    const dispatch = useDispatch();
    const { authUser = null } = useSelector((states) => states);

    const [like, setLike] = useState(false);
    const [dislike, setDislike] = useState(false);
    const [likeCount, setLikeCount] = useState(likes);
    const [dislikeCount, setDislikeCount] = useState(dislikes);

    useEffect(() => {
        setLike(upVotesBy?.includes(authUser?.id));
        setDislike(downVotesBy?.includes(authUser?.id));
        setLikeCount(likes);
        setDislikeCount(dislikes);
    }, [authUser, upVotesBy, downVotesBy, likes, dislikes]);

    const handleUpVote = () => {
        if (!authUser) {
            alert("Please login first!");
            return;
        }

        if (like) {
            setLike(false);
            setLikeCount(likeCount - 1);
            // dispatch(asyncNetralVote({ discussionId }));
            dispatch(asyncNetralVote({ discussionId, commentId }))
        } else {
            setLike(true);
            setDislike(false);
            setLikeCount(likeCount + 1);
            if (dislike) setDislikeCount(dislikeCount - 1);
            // dispatch(asyncUpVote({ discussionId }));
            dispatch(asyncUpVote({ discussionId, commentId }))
        }
    };

    const handleDownVote = () => {
        if (!authUser) {
            alert("Please login first!");
            return;
        }

        if (dislike) {
            setDislike(false);
            setDislikeCount(dislikeCount - 1);
            // dispatch(asyncNetralVote({ discussionId }));
            dispatch(asyncNetralVote({ discussionId, commentId }));
        } else {
            setDislike(true);
            setLike(false);
            setDislikeCount(dislikeCount + 1);
            if (like) setLikeCount(likeCount - 1);
            // dispatch(asyncDownVote({ discussionId }));
            dispatch(asyncDownVote({ discussionId, commentId }));
        }
    };

    return (
        <Stack direction="row" spacing={2}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton aria-label='like' onClick={() => handleUpVote()}>
                    {like ? <ThumbUpIcon /> : <ThumbUpOutlinedIcon />}
                </IconButton>
                <Typography sx={{ mr: 1 }}>{likeCount}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton aria-label='unlike' onClick={() => handleDownVote()}>
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