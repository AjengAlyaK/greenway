import React from 'react';
import PropTypes from 'prop-types';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';

const ReactButtonGroup = ({ likes, dislikes, comments }) => {
    return (
        <Stack direction="row" spacing={2}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton aria-label='like'>
                    <ThumbUpOutlinedIcon />
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
    likes: PropTypes.string.isRequired,
    dislikes: PropTypes.string.isRequired,
    comments: PropTypes.string.isRequired,
};

export default ReactButtonGroup;