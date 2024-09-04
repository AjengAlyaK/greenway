import React from 'react';
import { Box, Card, CardContent, Grid, IconButton, Stack, Typography } from '@mui/material';
import AvatarGeneral from '../elements/sharing/AvatarGeneral';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const temporarysrc = "https://firebasestorage.googleapis.com/v0/b/mostgreen.appspot.com/o/user-g3.jpg?alt=media&token=9246563e-3f94-4c70-93f6-3dec6de3271e";
const temporaryalt = "image";
const CommentCard = props => {
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
                                <IconButton>
                                    <MoreVertIcon />
                                    
                                </IconButton>
                            </Box>
                        </Grid>
                        <Box sx={{ pt: 1.5 }}>
                            <Typography variant="body1">
                                {/* well meaning and kindly. "a benevolent smile" */}
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae ea minus quo quia saepe minima. Veritatis eum ipsum suscipit asperiores!
                            </Typography>
                        </Box>
                    </CardContent>
                </Card>
            </Stack>
        </Grid>
    );
};

CommentCard.propTypes = {

};

export default CommentCard;