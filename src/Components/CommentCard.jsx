import React from 'react';
import PropTypes from 'prop-types';
import { Box, Card, CardContent, Grid, IconButton } from '@mui/material';
import AvatarGeneral from '../elements/sharing/AvatarGeneral';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CommentPopover from './CommentPopover';
import AuthorAndTimestamp from '../elements/sharing/AuthorAndTimestamp';
import CommentContent from '../elements/sharing/CommentContent';

const CommentCard = ({ commentId, destinationId, name, photo, comment, timestamp }) => {
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
            <Card
                sx={{
                    width: '100%',
                    p: 1.7,
                    borderRadius: 4,
                    border: '1px solid #5AC9A2',
                    transition: 'box-shadow 0.3s ease-in-out',
                    '&:hover': {
                        boxShadow: '0px 4px 10px 1px rgba(90, 201, 162, 0.5)',
                    },
                }}
            >
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
                    <CommentContent comment={comment} />
                </CardContent>
            </Card>

            <CommentPopover anchorEl={anchorEl} handleClose={handleClose} commentId={commentId} destinationId={destinationId} />
        </>
    );
};

CommentCard.propTypes = {
    commentId: PropTypes.string.isRequired,
    destinationId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
};

CommentCard.defaultProps = {
    timestamp: "17 days ago"
};

export default CommentCard;