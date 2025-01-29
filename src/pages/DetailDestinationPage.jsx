import { Grid, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
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
import { asyncInitializeAuthUser } from '../states/authUser/action';
import LoadingImageInDetail from '../elements/sharing/skeleton/LoadingImageInDetail';
import LoadingDetailInformation from '../elements/sharing/skeleton/LoadingDetailInformation';

const DetailDestinationPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { authUser = null, destination } = useSelector((state) => state);

    const commentLength = destination?.comments?.length || 0;

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            dispatch(asyncInitializeAuthUser());
            await dispatch(asyncReceiveDestinationDetail(id));
            setLoading(false);
        };

        fetchData()
    }, [id, dispatch]);

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
                {loading ?
                    <>
                        <LoadingImageInDetail />
                        <LoadingDetailInformation />
                    </>
                    :
                    <>
                        <ImageInDetail picture={destination.photo} location={destination.location} title={destination.name} />
                        <DetailInformation subtitle="Description" value={destination.description} />
                    </>
                }
                <Comments visibility={loading ? "none" : "flex"} count={commentLength} />
                {authUser ?
                    <FormComment
                        visibility={loading ? "none" : "flex"}
                        addComment={addComment}
                    />
                    :
                    <WarningBar
                        visibility={loading ? "none" : "flex"}
                        color="#FFF4E6"
                        iconBar={<WarningAmberIcon color="warning" />}
                        titleBar="Permission Required"
                        object="start a new comment"
                    />
                }
                <Stack
                    spacing={3}
                    sx={{ width: '100%', py: 6 }}
                    display={loading ? "none" : "flex"}
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