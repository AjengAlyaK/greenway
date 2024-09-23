import React from 'react';
import { Box, Card, CardContent, Grid, IconButton, MenuItem, Popover, Stack, Typography } from '@mui/material';
import AvatarGeneral from '../elements/sharing/AvatarGeneral';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const temporarysrc = "https://firebasestorage.googleapis.com/v0/b/mostgreen.appspot.com/o/user-g3.jpg?alt=media&token=9246563e-3f94-4c70-93f6-3dec6de3271e";
const temporaryalt = "image";
const CommentCard = props => {
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
        <Grid
            container
            item
            xs={12}
        >
            <Stack
                spacing={3}
                sx={{ width: '100%', py: 4 }}
            >
                <Card sx={{ width: '100%', p: 1.7, borderRadius: 4, border: '1px solid #5AC9A2' }}>
                    <CardContent>
                        <Grid
                            container
                            item
                            alignItems="center"
                        >
                            <AvatarGeneral source={temporarysrc} alternative={temporaryalt} />
                            <Stack
                                sx={{ pl: 2 }}
                            >
                                <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                                    Lorem, ipsum dolor.
                                </Typography>
                                <Typography variant="body1" sx={{ color: 'text.secondary' }}>Posted At 17 Days Ago</Typography>
                            </Stack>
                            <Box sx={{ ml: 'auto' }} >
                                <IconButton aria-describedby={id} onClick={handleClick}>
                                    <MoreVertIcon />
                                </IconButton>
                            </Box>
                        </Grid>
                        <Box sx={{ pt: 1.5 }}>
                            <Typography variant="body1">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae ea minus quo quia saepe minima. Veritatis eum ipsum suscipit asperiores!
                            </Typography>
                        </Box>
                    </CardContent>
                </Card>
            </Stack>
            <>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    elevation={1}
                >
                    <MenuItem onClick={() => alert('coming soon feature')} sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
                        <EditIcon sx={{ fontSize: '20px', mr: 1 }} />
                        <Typography>Edit</Typography>
                    </MenuItem>
                    <MenuItem onClick={() => alert('coming soon feature')} sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
                        <DeleteIcon sx={{ fontSize: '20px', mr: 1 }} />
                        <Typography>Delete</Typography>
                    </MenuItem>
                </Popover>
            </>
        </Grid>
    );
};

CommentCard.propTypes = {

};

export default CommentCard;