import React, { useEffect } from 'react';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import OneLineTitle from '../elements/sharing/OneLineTitle';
import DiscussionCard from '../Components/DiscussionCard';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch, useSelector } from 'react-redux';
import { asyncReceiveDiscussions, asyncUpVote } from '../states/discussion/action';
import { formatDistanceToNow } from 'date-fns';

const DiscussionPage = () => {
    const { discussions } = useSelector((states) => states);
    console.log(discussions);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(asyncReceiveDiscussions())
    }, [dispatch]);

    const clickUpVote = ({ discussionId }) => {
        dispatch(asyncUpVote({ discussionId }));
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
                                <Button variant="contained"><AddIcon sx={{ mr: 1 }} /> New Discussion</Button>
                            </Box>
                        </Stack>
                    </Stack>
                    <Stack spacing={3}>
                        {discussions.map((discussion, index) => (
                            <DiscussionCard
                                index={index}
                                discussionId={discussion.id}
                                photo={discussion.photo}
                                name={discussion.name}
                                timestamp={`Posted ${formatDistanceToNow(new Date(discussion.createdAt), { addSuffix: true })}`}
                                title={discussion.title}
                                body={discussion.body}
                                category={discussion.category}
                                likes={discussion.upVotesBy.length}
                                dislikes={discussion.downVotesBy.length}
                                comments={discussion.comments}
                                clickUpVote={clickUpVote}
                            />
                        ))}
                    </Stack>
                </Stack>
            </Grid>
        </Grid>
    );
};

export default DiscussionPage;