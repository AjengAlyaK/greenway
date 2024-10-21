import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import { useDispatch } from 'react-redux';
import { asyncNetralVote, asyncUpVote } from '../states/discussion/action';

const ReactButtonGroup = ({ discussionId, likes, dislikes, comments }) => {
    const [isLiked, setIsLiked] = useState(false);
    const dispatch = useDispatch();

    const clickUpVote = ({ discussionId }) => {
        if (isLiked) {
            dispatch(asyncNetralVote({ discussionId }));
        } else {
            dispatch(asyncUpVote({ discussionId }));
        };
        setIsLiked(!isLiked);
    };

    return (
        <Stack direction="row" spacing={2}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton aria-label='like' onClick={() => clickUpVote({ discussionId })}>
                    {isLiked ? <ThumbUpIcon /> : <ThumbUpOutlinedIcon /> }
                </IconButton>
                <Typography sx={{ mr: 1 }}>{likes}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton aria-label='unlike'>
                    <ThumbDownOutlinedIcon />
                </IconButton>
                <Typography sx={{ mr: 1 }}>{dislikes}</Typography>
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