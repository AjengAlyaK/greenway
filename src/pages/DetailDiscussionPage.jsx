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

const DetailDiscussionPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { authUser = null, discussion } = useSelector((state) => state);

    useEffect(() => {
        dispatch(asyncReceiveDiscussionDetail(id))
    }, [id, dispatch]);

    if (!discussion) {
        return <p>Loading ...</p>
    };

    const addComment = ({ comment, id }) => {
        dispatch(asyncAddCommentOnDiscussion({ text: comment, id }));
    };

    return (
        <Grid container spacing={0} sx={{ pt: { xs: 8, md: 13 }, pb: { xs: 10, md: 13 }, px: { xs: 2, md: 13 } }}>
            <Grid size={12} width="100%">
                <Stack spacing={3}>
                    <OneLineTitle title="Detail Discussion" />
                    <DiscussionCard
                        photo={discussion.owner.photo}
                        name={discussion.owner.name}
                        timestamp={`Posted ${formatDistanceToNow(new Date(discussion.createdAt), { addSuffix: true })}`}
                        title={discussion.title}
                        body={discussion.body}
                        category={discussion.category}
                        likes={discussion.upVotesBy.length}
                        dislikes={discussion.downVotesBy.length}
                    />
                </Stack>
                <Comments count={discussion.comments.length} />
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
                                key={index}
                                name={comment.owner.name}
                                photo={comment.owner.photo}
                                comment={comment.comment}
                                timestamp={`Posted ${formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true })}`}
                                body={comment.comment}
                                likes={comment.upVotesBy.length}
                                dislikes={comment.downVotesBy.length}
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