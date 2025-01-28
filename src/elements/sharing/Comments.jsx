import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

const Comments = ({ visibility, count }) => {
    return (
        <Typography display={visibility} sx={{ typography: { xs: 'h6', md: 'h5' }, fontWeight: { xs: 'bold', md: 'bold' }, color: '#006E6F', py: 3 }}>
            Comments ({count})
        </Typography>
    );
};

Comments.propTypes = {
    visibility: PropTypes.string,
    count: PropTypes.number.isRequired,
};

Comments.defaultProps = {
    visibility: 'flex',
    count: 0,
};

export default Comments;