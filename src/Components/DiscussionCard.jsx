import React from 'react';
import PropTypes from 'prop-types';
import { Box, Card, CardContent, Grid, IconButton } from '@mui/material';
import AvatarGeneral from '../elements/sharing/AvatarGeneral';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AuthorAndTimestamp from '../elements/sharing/AuthorAndTimestamp';
import CommentPopover from './CommentPopover';
import DiscussionContent from './DiscussionContent';

const DiscussionCard = ({ discussionId, photo, name, timestamp, title, body, category, likes, dislikes, upVotesBy, downVotesBy, comments, createCommentIcon }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <>
            <Card sx={{ width: '100%', p: 1.7, borderRadius: 4, border: '1px solid #5AC9A2' }}>
                <CardContent>
                    <Grid
                        container
                        item
                        alignItems="center"
                    >
                        <AvatarGeneral source={photo} alternative="image" />
                        <AuthorAndTimestamp name={name} timestamp={timestamp} />
                        <Box sx={{ ml: 'auto' }} >
                            <IconButton aria-describedby={id} onClick={handleClick}>
                                <MoreVertIcon />
                            </IconButton>
                        </Box>
                    </Grid>

                    <DiscussionContent
                        discussionId={discussionId}
                        title={title}
                        body={body}
                        category={category}
                        likes={likes}
                        dislikes={dislikes}
                        upVotesBy={upVotesBy}
                        downVotesBy={downVotesBy}
                        comments={comments}
                        createCommentIcon={createCommentIcon}
                    />
                </CardContent>
            </Card>

            <CommentPopover anchorEl={anchorEl} handleClose={handleClose} />
        </>
    );
};

DiscussionCard.propTypes = {
    discussionId: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
    comment: PropTypes.string,
    likes: PropTypes.number.isRequired,
    dislikes: PropTypes.number.isRequired,
    upVotesBy: PropTypes.array.isRequired,
    downVotesBy: PropTypes.array.isRequired,
    comments: PropTypes.number.isRequired,
    createCommentIcon: PropTypes.func,
};

export default DiscussionCard;