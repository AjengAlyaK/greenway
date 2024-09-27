import React from 'react';
import PropTypes from 'prop-types';
import { Box, Card, CardContent, Grid, IconButton, MenuItem, Popover, Stack, Typography } from '@mui/material';
import AvatarGeneral from '../elements/sharing/AvatarGeneral';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const CommentCard = ({name,  photo, comment, timestamp}) => {
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
        
                <Card sx={{ width: '100%', p: 1.7, borderRadius: 4, border: '1px solid #5AC9A2' }}>
                    <CardContent>
                        <Grid
                            container
                            item
                            alignItems="center"
                        >
                            <AvatarGeneral source={photo} alternative="image" />
                            <Stack
                                sx={{ pl: 2 }}
                            >
                                <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                                    {name}
                                </Typography>
                                <Typography variant="body1" sx={{ color: 'text.secondary' }}>{timestamp}</Typography>
                            </Stack>
                            <Box sx={{ ml: 'auto' }} >
                                <IconButton aria-describedby={id} onClick={handleClick}>
                                    <MoreVertIcon />
                                </IconButton>
                            </Box>
                        </Grid>
                        <Box sx={{ pt: 1.5 }}>
                            <Typography variant="body1">
                                {comment}
                            </Typography>
                        </Box>
                    </CardContent>
                </Card>

            // <>
            //     <Popover
            //         id={id}
            //         open={open}
            //         anchorEl={anchorEl}
            //         onClose={handleClose}
            //         anchorOrigin={{
            //             vertical: 'bottom',
            //             horizontal: 'left',
            //         }}
            //         elevation={1}
            //     >
            //         <MenuItem onClick={() => alert('coming soon feature')} sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
            //             <EditIcon sx={{ fontSize: '20px', mr: 1 }} />
            //             <Typography>Edit</Typography>
            //         </MenuItem>
            //         <MenuItem onClick={() => alert('coming soon feature')} sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
            //             <DeleteIcon sx={{ fontSize: '20px', mr: 1 }} />
            //             <Typography>Delete</Typography>
            //         </MenuItem>
            //     </Popover>
            // </>

    );
};

CommentCard.propTypes = {
    name: PropTypes.string.isRequired,
    photo:  PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
};

CommentCard.defaultProps = {
    timestamp: "17 days ago"
};

export default CommentCard;