import { Grid, Stack } from '@mui/material';
import React, { useEffect } from 'react';
import ImageInDetail from '../elements/sharing/ImageInDetail';
import DetailInformation from '../elements/sharing/DetailInformation';
import Comments from '../elements/sharing/Comments';
import FormComment from '../Components/FormComment';
import { useDispatch, useSelector } from 'react-redux';
import WarningBar from '../elements/sharing/WarningBar';
import CommentCard from '../Components/CommentCard';
import { useParams } from 'react-router';
import { asyncReceiveDestinationDetail, asyncAddCommentOnDestination } from '../states/destinationDetail/Action';
import { formatDistanceToNow } from 'date-fns';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

const DetailDestinationPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { authUser = null, destination } = useSelector((state) => state);

    const commentLength = destination?.comments?.length || 0;

    useEffect(() => {
        dispatch(asyncReceiveDestinationDetail(id));
    }, [id, dispatch]);

    if (!destination) {
        return <p>Loading ...</p>
    };

    const addComment = ({ comment, id }) => {
        dispatch(asyncAddCommentOnDestination({ text: comment, id }));
    };

    return (
        <Grid
            container
            sx={{
                pt: 2,
                pb: { xs: 5, md: 8 },
                px: { xs: 2, sm: 5, md: 13 }
            }}
        >
            <Grid
                item
                xs={12}
            >
                <ImageInDetail picture={destination.photo} location={destination.location} title={destination.name} />
                <DetailInformation subtitle="Description" value={destination.description} />
                <Comments count={commentLength} />
                {authUser ?
                    <FormComment
                        addComment={addComment}
                    /> :
                    <WarningBar
                        color="#FFF4E6"
                        iconBar={<WarningAmberIcon color="warning" />}
                        titleBar="Permission Required"
                        object="start a new comment"
                    />
                }
                <Stack
                    spacing={3}
                    sx={{ width: '100%', py: 6 }}
                >
                    {destination.comments
                        .slice()
                        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                        .map((comment, index) => (
                            <CommentCard
                                key={index}
                                name={comment.owner.name}
                                photo={comment.owner.photo}
                                comment={comment.comment}
                                timestamp={`Posted ${formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true })}`}
                            />
                        ))}
                </Stack>
            </Grid>
        </Grid>
    );
};

export default DetailDestinationPage;