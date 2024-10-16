import React from 'react';
import PropTypes from 'prop-types';
import { Box, Stack, Typography } from '@mui/material';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';

const DiscussionContent = props => {
    return (
        <Box sx={{ pt: 2 }}>
            <Stack spacing={2}>
                <Stack spacing={1}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Let say this is title</Typography>
                    <Typography variant="subtitle1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit dolorem molestiae numquam cum at minima nulla voluptate, praesentium unde, ab ut omnis! Cum aliquam esse a necessitatibus temporibus fuga sed!</Typography>
                </Stack>
                <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>#nosurprises</Typography>
                </Box>
                <Stack direction="row" spacing={3}>
                    <Box sx={{ display: 'flex' }}>
                        <ThumbUpOutlinedIcon sx={{ mr: 1 }} />
                        <Typography>3</Typography>
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <ThumbDownOutlinedIcon sx={{ mr: 1 }} />
                        <Typography>9</Typography>
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <ModeCommentOutlinedIcon sx={{ mr: 1 }} />
                        <Typography>2</Typography>
                    </Box>
                </Stack>
            </Stack>
        </Box>
    );
};

DiscussionContent.propTypes = {

};

export default DiscussionContent;