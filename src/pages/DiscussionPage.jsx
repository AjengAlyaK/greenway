import React, { useEffect, useState } from 'react';
import { Box, Button, Grid, IconButton, Stack, Typography } from '@mui/material';
import OneLineTitle from '../elements/sharing/OneLineTitle';
import DiscussionCard from '../Components/DiscussionCard';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch, useSelector } from 'react-redux';
import { asyncReceiveDiscussions } from '../states/discussion/action';
import { formatDistanceToNow } from 'date-fns';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import { useNavigate } from 'react-router';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import WarningBar from '../elements/sharing/WarningBar';
import { asyncInitializeAuthUser } from '../states/authUser/action';
import LoadingOneLineTitle from '../elements/sharing/skeleton/LoadingOneLineTitle';
import LoadingDiscussionCard from '../elements/sharing/skeleton/LoadingDiscussionCard';
import LoadingHeaderCategory from '../elements/sharing/skeleton/LoadingHeaderCategory';
import LoadingButtonCategory from '../elements/sharing/skeleton/LoadingButtonCategory';

const title = "Discussion Available";

const DiscussionPage = () => {
    const { discussions, authUser = null } = useSelector((states) => states);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [activeCategory, setActiveCategory] = useState('all');
    const [loading, setLoading] = useState(true);

    const categories = ["all", ...new Set(discussions.map(discussion => discussion.category.toLowerCase()))];

    const clickComment = ({ discussionId }) => navigate(`/discussion/${discussionId}`);
    const addDiscussion = () => navigate('/discussion/add');

    const handleCategoryFilter = (category) => {
        setActiveCategory(category);
    };

    const filteredDiscussions = activeCategory === 'all'
        ? discussions
        : discussions.filter(discussion => discussion.category.toLowerCase() === activeCategory);

    useEffect(() => {
        const fetchDiscussion = async () => {
            await dispatch(asyncInitializeAuthUser());
            await dispatch(asyncReceiveDiscussions());
            setLoading(false);
        };

        fetchDiscussion();
    }, [dispatch]);

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
        <Grid container spacing={0} sx={{ pt: { xs: 2, sm: 3 }, pb: { xs: 10, md: 13 }, px: { xs: 2, sm: 5, md: 13 } }}>
            <Grid size={12} width="100%">
                <Stack spacing={4}>
                    <Stack spacing={3}>
                        <Stack spacing={2}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                {loading ?
                                    <LoadingHeaderCategory />
                                    :
                                    "Popular Category"
                                }
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap'
                                }}
                            >
                                {
                                    loading ?
                                        Array.from({ length: 6 }).map((_, index) => (
                                            <LoadingButtonCategory key={index} />
                                        ))
                                        :
                                        categories.map((category) => (
                                            <Button
                                                key={category}
                                                variant={activeCategory === category ? "contained" : "outlined"}
                                                onClick={() => handleCategoryFilter(category)}
                                                sx={{
                                                    mr: 1,
                                                    mb: 1,
                                                }}
                                            >
                                                # {category}
                                            </Button>
                                        ))
                                }
                            </Box>
                        </Stack>
                        <Stack spacing={2}>
                            {loading ?
                                <LoadingOneLineTitle text={title} />
                                :
                                <OneLineTitle title={title} />
                            }
                            <Box>
                                {authUser ?
                                    <Button variant="contained" onClick={() => addDiscussion()}><AddIcon sx={{ mr: 1 }} /> New Discussion</Button>
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
                        {
                            loading ?
                                Array.from({ length: 6 }).map((_, index) => (
                                    <LoadingDiscussionCard key={index} />
                                ))
                                :
                                filteredDiscussions.map((discussion) => (
                                    <DiscussionCard
                                        key={discussion.id}
                                        discussionId={discussion.id}
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