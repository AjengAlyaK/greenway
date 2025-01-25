import { Skeleton, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const LoadingWordingHomePage = ({ text }) => {
    return (
        <Skeleton
            sx={{
                mb: 5
            }}
        >
            <Typography sx={{ textAlign: { xs: 'center', md: 'justify' }, typography: { xs: 'body1' } }}>{text}</Typography>
        </Skeleton>
    );
};

LoadingWordingHomePage.propTypes = {
    text: PropTypes.string.isRequired,
};

export default LoadingWordingHomePage;