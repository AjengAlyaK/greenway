import React, { useEffect, useState } from 'react';
import { Grid, Stack } from '@mui/material';
import OneLineTitle from '../elements/sharing/OneLineTitle';
import DiscussionCard from '../Components/DiscussionCard';
import Comments from '../elements/sharing/Comments';
import FormComment from '../Components/FormComment';
import { useDispatch, useSelector } from 'react-redux';
import WarningBar from '../elements/sharing/WarningBar';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { useNavigate, useParams } from 'react-router';
import { asyncAddCommentOnDiscussion, asyncReceiveDiscussionDetail } from '../states/discussionDetail/action';
import { formatDistanceToNow } from 'date-fns';
import { asyncInitializeAuthUser } from '../states/authUser/action';
import LoadingOneLineTitle from '../elements/sharing/skeleton/LoadingOneLineTitle';
import LoadingDiscussionCard from '../elements/sharing/skeleton/LoadingDiscussionCard';
import LoadingWarningBar from '../elements/sharing/skeleton/LoaingWarningBar';
import LoadingComments from '../elements/sharing/skeleton/LoadingComments';
import LoadingFormComment from '../elements/sharing/skeleton/LoadingFormComment';

const title = "Detail Discussion";

const DetailDiscussionPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { authUser = null, discussion = {} } = useSelector((state) => state);

    const [loading, setLoading] = useState(true);
    const authenticated = authUser?.id || false;

    useEffect(() => {
        const fetchDetailDiscussion = async () => {
            await dispatch(asyncInitializeAuthUser());
            const result = await dispatch(asyncReceiveDiscussionDetail(id));

            if (result === null) {
                navigate('/discussion');
                return;
            }

            setLoading(false);
        };

        fetchDetailDiscussion();
    }, [id, dispatch, navigate]);

    const addComment = (comment, id) => {
        dispatch(asyncAddCommentOnDiscussion({ text: comment, id: id }));
    };

    return (
        <Grid container spacing={0} sx={{ pt: { xs: 2, sm: 3 }, pb: { xs: 10, md: 13 }, px: { xs: 2, sm: 5, md: 13 } }}>
            <Grid size={12} width="100%">
                <Stack spacing={3}>
                    {loading ?
                        <>
                            <LoadingOneLineTitle text={title} />
                            <LoadingDiscussionCard />
                        </>
                        :
                        <>
                            <OneLineTitle title={title} />
                            <DiscussionCard
                                discussionId={discussion.id}
                                authenticated={authenticated}
                                photo={discussion.owner.photo}
                                name={discussion.owner.name}
                                ownerId={discussion.owner.idUser}
                                timestamp={`Posted ${discussion.createdAt ? formatDistanceToNow(new Date(discussion.createdAt), { addSuffix: true }) : "Unknown time"}`}
                                title={discussion.title}
                                body={discussion.body}
                                category={discussion.category}
                                likes={discussion.upVotesBy?.length || 0}
                                dislikes={discussion.downVotesBy?.length || 0}
                                upVotesBy={discussion.upVotesBy}
                                downVotesBy={discussion.downVotesBy}
                            />
                        </>
                    }
                </Stack>
                {loading ?
                    <LoadingComments />
                    :
                    <Comments count={discussion.comments?.length} />}
                {authUser ?
                    (
                        loading ?
                            <LoadingFormComment />
                            :
                            <FormComment addComment={addComment} />
                    )
                    :
                    (
                        loading ?
                            <LoadingWarningBar />
                            :
                            <WarningBar
                                color="#FFF4E6"
                                iconBar={<WarningAmberIcon color="warning" />}
                                titleBar="Permission Required"
                                object="start a new comment"
                            />)
                }
                <Stack spacing={3} sx={{ py: 4 }}>
                    {
                        loading ?
                            Array.from({ length: 2 }).map((_, index) => (
                                <LoadingDiscussionCard key={index} />
                            ))
                            :
                            discussion.comments
                                .slice()
                                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                                .map((comment) => (
                                    <DiscussionCard
                                        discussionId={comment.discussionId}
                                        authenticated={authenticated}
                                        key={comment.id}
                                        name={comment.owner.name}
                                        ownerId={comment.owner.idUser}
                                        photo={comment.owner.photo}
                                        timestamp={`Posted ${comment.createdAt ? formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true }) : "Unknown time"}`}
                                        body={comment.comment}
                                        likes={comment.upVotesBy?.length || 0}
                                        dislikes={comment.downVotesBy?.length || 0}
                                        upVotesBy={comment.upVotesBy}
                                        downVotesBy={comment.downVotesBy}
                                        commentId={comment.id}
                                    />
                                ))
                    }
                </Stack>
            </Grid>
        </Grid>
    );
};

export default DetailDiscussionPage;