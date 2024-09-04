import { Grid } from '@mui/material';
import React from 'react';
import ImageInDetail from '../elements/sharing/ImageInDetail';
import DetailInformation from '../elements/sharing/DetailInformation';
import Comments from '../elements/sharing/Comments';
import FormComment from '../Components/FormComment';
import { useSelector } from 'react-redux';
import WarningBar from '../elements/sharing/WarningBar';
import CommentCard from '../Components/CommentCard';

const temporary = {
    picture: "https://firebasestorage.googleapis.com/v0/b/mostgreen.appspot.com/o/banda-island-hd.jpg?alt=media&token=cba1673a-e45d-4197-b8e1-175b56270224",
    location: "somewhere Idk",
    title: "Empty Place"
}

const DetailDestinationPage = props => {
    const { authUser = null } = useSelector((state) => state)
    return (
        <Grid
            container
            sx={{
                pt: { xs: 8, md: 13 },
                pb: { xs: 8, md: 13 },
                px: { xs: 2, md: 13 }
            }}
        >
            <ImageInDetail picture={temporary.picture} location={temporary.location} title={temporary.title} />
            <DetailInformation subtitle="lorem" value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus inventore id dolorem vel. Ab voluptatem ad nulla soluta iste. Rerum tempora in sint asperiores tempore harum hic iusto ea magnam!" />
            <Comments />
            {authUser ? <FormComment /> : <WarningBar object="start a new comment" />}
            <CommentCard/>
        </Grid>
    );
};

DetailDestinationPage.propTypes = {

};

export default DetailDestinationPage;