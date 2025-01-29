import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { Grid, Stack } from '@mui/material';
import OneLineTitle from '../elements/sharing/OneLineTitle';
import DiscussionCard from '../Components/DiscussionCard';
import Comments from '../elements/sharing/Comments';
import FormComment from '../Components/FormComment';
import { useDispatch, useSelector } from 'react-redux';
import WarningBar from '../elements/sharing/WarningBar';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { useParams } from 'react-router';
import { asyncAddCommentOnDiscussion, asyncReceiveDiscussionDetail } from '../states/discussionDetail/action';
import { formatDistanceToNow } from 'date-fns';
import { asyncInitializeAuthUser } from '../states/authUser/action';

const DetailDiscussionPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { authUser = null, discussion } = useSelector((state) => state);

    useEffect(() => {
        dispatch(asyncReceiveDiscussionDetail(id));
        dispatch(asyncInitializeAuthUser());
    }, [id, dispatch]);

    const addComment = ({ comment }) => {
        dispatch(asyncAddCommentOnDiscussion({ text: comment, id: discussion.id}));
    };

    return (
        <Grid container spacing={0} sx={{ pt: { xs: 2, sm: 3 }, pb: { xs: 10, md: 13 }, px: { xs: 2, sm: 5, md: 13 } }}>
            <Grid size={12} width="100%">
                <Stack spacing={3}>
                    <OneLineTitle title="Detail Discussion" />
                    <DiscussionCard
                        photo={discussion.owner.photo}
                        name={discussion.owner.name}
                        timestamp={`Posted ${discussion.createdAt ? formatDistanceToNow(new Date(discussion.createdAt), { addSuffix: true }) : "Unknown time"}`}
                        title={discussion.title}
                        body={discussion.body}
                        category={discussion.category}
                        likes={discussion.upVotesBy?.length || 0}
                        dislikes={discussion.downVotesBy?.length || 0}
                    />
                </Stack>
                <Comments count={discussion.comments?.length} />
                {authUser ?
                    <FormComment addComment={addComment} /> :
                    <WarningBar
                        color="#FFF4E6"
                        iconBar={<WarningAmberIcon color="warning" />}
                        titleBar="Permission Required"
                        object="start a new comment"
                    />
                }
                <Stack spacing={3} sx={{ py: 4 }}>
                    {discussion.comments
                        .slice()
                        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                        .map((comment, index) => (
                            <DiscussionCard
                                key={comment.id}
                                name={comment.owner.name}
                                photo={comment.owner.photo}
                                timestamp={`Posted ${comment.createdAt ? formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true }) : "Unknown time"}`}
                                body={comment.comment}
                                likes={comment.upVotesBy?.length || 0}
                                dislikes={comment.downVotesBy?.length || 0}
                            />
                        ))}
                </Stack>
            </Grid>
        </Grid>
    );
};

DetailDiscussionPage.propTypes = {

};

export default DetailDiscussionPage;