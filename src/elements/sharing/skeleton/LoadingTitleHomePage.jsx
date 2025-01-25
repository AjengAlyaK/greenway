import PropTypes from 'prop-types';
import { Skeleton, Typography } from '@mui/material';

const LoadingTitleHomePage = ({ text }) => {
    return (
        <Skeleton>
            <Typography sx={{ color: '#006E6F', typography: { xs: 'h4', sm: 'h3' }, textAlign: { xs: 'center', md: 'start' }, fontWeight: { xs: 'bold', sm: 'bold', md: 'bold' } }}>{text}</Typography>
        </Skeleton>
    );
};

LoadingTitleHomePage.propTypes = {
    text: PropTypes.string.isRequired,
};

export default LoadingTitleHomePage;