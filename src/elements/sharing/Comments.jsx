import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

const Comments = ({ count }) => {
    return (
        <Typography sx={{ typography: { xs: 'h5', md: 'h4' }, fontWeight: { xs: 'bold', md: 'bold' }, color: '#006E6F', py: 4 }}>
            Comments ({count})
        </Typography>
    );
};

Comments.propTypes = {
    count: PropTypes.number.isRequired,
};

Comments.defaultProps = {
    count: 0,
};

export default Comments;