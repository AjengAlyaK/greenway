import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { useDispatch, useSelector } from 'react-redux';
import { asyncDownVote as asyncDownVoteComment, asyncNetralVote as asyncNetralVoteComment, asyncUpVote as asyncUpVoteComment } from '../states/discussionDetail/action';
import { asyncDownVote, asyncNetralVote, asyncUpVote } from '../states/discussion/action';

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

    const handleUpVote = (discussionId, commentId = null) => {
        if (!authUser) {
            alert("Please login first!");
            return;
        }

        if (like) {
            setLike(false);
            setLikeCount(likeCount - 1);
            commentId !== null ? dispatch(asyncNetralVoteComment({ discussionId, commentId })) : dispatch(asyncNetralVote({ discussionId }));
        } else {
            setLike(true);
            setDislike(false);
            setLikeCount(likeCount + 1);
            if (dislike) setDislikeCount(dislikeCount - 1);
            commentId !== null ? dispatch(asyncUpVoteComment({ discussionId, commentId })) : dispatch(asyncUpVote({ discussionId }));
        }
    };

    const handleDownVote = (discussionId, commentId = null) => {
        if (!authUser) {
            alert("Please login first!");
            return;
        }

        if (dislike) {
            setDislike(false);
            setDislikeCount(dislikeCount - 1);
            commentId !== null ? dispatch(asyncNetralVoteComment({ discussionId, commentId })) : dispatch(asyncNetralVote({ discussionId }));
        } else {
            setDislike(true);
            setLike(false);
            setDislikeCount(dislikeCount + 1);
            if (like) setLikeCount(likeCount - 1);
            commentId !== null ? dispatch(asyncDownVoteComment({ discussionId, commentId })) : dispatch(asyncDownVote({ discussionId }));
        }
    };

    return (
        <Stack direction="row" spacing={2}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton aria-label='like' onClick={() => handleUpVote(discussionId, commentId)}>
                    {like ? <ThumbUpIcon /> : <ThumbUpOutlinedIcon />}
                </IconButton>
                <Typography sx={{ mr: 1 }}>{likeCount}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton aria-label='unlike' onClick={() => handleDownVote(discussionId, commentId)}>
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