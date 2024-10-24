import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import { useDispatch } from 'react-redux';
import { asyncDownVote, asyncNetralVote, asyncUpVote } from '../states/discussion/action';

const ReactButtonGroup = ({ discussionId, likes, dislikes, comments }) => {
    const [isLiked, setIsLiked] = useState(false);
    const [localLikes, setLocalLikes] = useState(likes);
    const [isDisLiked, setIsDisLiked] = useState(false);
    const [localDisLikes, setLocalDisLikes] = useState(dislikes);
    const dispatch = useDispatch();

    const clickUpVote = ({ discussionId }) => {
        if (isLiked) {
            dispatch(asyncNetralVote({ discussionId }));
            setLocalLikes(prevLikes => prevLikes - 1);
        } else {
            dispatch(asyncUpVote({ discussionId }));
            if (isDisLiked) {
                setLocalDisLikes(prevDisLikes => prevDisLikes - 1);
                setIsDisLiked(false);
            };
            setLocalLikes(prevLikes => prevLikes + 1);
        };
        setIsLiked(!isLiked);
    };

    const clickDownVote = ({ discussionId }) => {
        if (isDisLiked) {
            dispatch(asyncNetralVote({ discussionId }));
            setLocalDisLikes(prevDisLikes => prevDisLikes - 1);
        } else {
            dispatch(asyncDownVote({ discussionId }));
            if (isLiked) {
                setLocalLikes(prevLikes => prevLikes - 1);
                setIsLiked(false);
            }
            setLocalDisLikes(prevDisLikes => prevDisLikes + 1);
        };
        setIsDisLiked(!isDisLiked);
    };

    return (
        <Stack direction="row" spacing={2}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton aria-label='like' onClick={() => clickUpVote({ discussionId })}>
                    {isLiked ? <ThumbUpIcon /> : <ThumbUpOutlinedIcon />}
                </IconButton>
                <Typography sx={{ mr: 1 }}>{localLikes}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton aria-label='unlike' onClick={() => clickDownVote({ discussionId })}>
                    {isDisLiked ? <ThumbDownIcon /> : <ThumbDownOutlinedIcon />}
                </IconButton>
                <Typography sx={{ mr: 1 }}>{localDisLikes}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton aria-label='comment'>
                    <ModeCommentOutlinedIcon />
                </IconButton>
                <Typography sx={{ mr: 1 }}>{comments}</Typography>
            </Box>
        </Stack>
    );
};

ReactButtonGroup.propTypes = {
    discussionId: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    dislikes: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
};

export default ReactButtonGroup;