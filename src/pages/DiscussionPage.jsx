import React, { useEffect } from 'react';
import { Box, Button, Grid, IconButton, Stack, Typography } from '@mui/material';
import OneLineTitle from '../elements/sharing/OneLineTitle';
import DiscussionCard from '../Components/DiscussionCard';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch, useSelector } from 'react-redux';
import { asyncReceiveDiscussions } from '../states/discussion/action';
import { formatDistanceToNow } from 'date-fns';
import { asyncGetOwnProfile } from '../states/getOwnProfile/action';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import { useNavigate } from 'react-router';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import WarningBar from '../elements/sharing/WarningBar';

const DiscussionPage = () => {
    const { discussions, profile = { id: null }, authUser = null } = useSelector((states) => states);
    const navigate = useNavigate();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(asyncReceiveDiscussions());
        dispatch(asyncGetOwnProfile())
    }, [dispatch]);

    const clickComment = ({ discussionId }) => {
        navigate(`/discussion/${discussionId}`);
    };

    const createCommentIcon = ({ discussionId, comments }) => {
        return (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton aria-label='comment' onClick={() => clickComment({ discussionId })}>
                    <ModeCommentOutlinedIcon />
                </IconButton>
                <Typography sx={{ mr: 1 }}>{comments}</Typography>
            </Box>
        );
    };

    return (
        <Grid container spacing={0} sx={{ pt: { xs: 8, md: 13 }, pb: { xs: 10, md: 13 }, px: { xs: 2, md: 13 } }}>
            <Grid size={12} width="100%">
                <Stack spacing={4}>
                    <Stack spacing={3}>
                        <Stack spacing={2}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Popular Category</Typography>
                            <Stack direction="row" spacing={2}>
                                <Button variant="outlined"># Contoh</Button>
                                <Button variant="outlined"># Contoh</Button>
                            </Stack>
                        </Stack>
                        <Stack spacing={2}>
                            <OneLineTitle title="Discussion Available" />
                            <Box>
                                {authUser ?
                                    <Button variant="contained"><AddIcon sx={{ mr: 1 }} /> New Discussion</Button>
                                    :
                                    <WarningBar
                                        color="#e5f6fd"
                                        iconBar={<ErrorOutlineOutlinedIcon color="primary" />}
                                        titleBar="Hold Up!"
                                        object="start a discussion"
                                    />
                                }
                            </Box>
                        </Stack>
                    </Stack>
                    <Stack spacing={3}>
                        {discussions.map((discussion, index) => (
                            <DiscussionCard
                                key={index}
                                discussionId={discussion.id}
                                userId={profile.id}
                                photo={discussion.photo}
                                name={discussion.name}
                                timestamp={`Posted ${formatDistanceToNow(new Date(discussion.createdAt), { addSuffix: true })}`}
                                title={discussion.title}
                                body={discussion.body}
                                category={discussion.category}
                                likes={discussion.upVotesBy.length}
                                dislikes={discussion.downVotesBy.length}
                                upVotesBy={discussion.upVotesBy}
                                downVotesBy={discussion.downVotesBy}
                                comments={discussion.comments}
                                createCommentIcon={({ discussionId, comments }) => createCommentIcon({ discussionId, comments })}
                            />
                        ))}
                    </Stack>
                </Stack>
            </Grid>
        </Grid>
    );
};

export default DiscussionPage;