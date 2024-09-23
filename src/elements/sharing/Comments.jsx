import React from 'react';
// import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

const Comments = props => {
    return (
        <Typography sx={{ typography: { xs: 'h5', md: 'h4' }, fontWeight: { xs: 'bold', md: 'bold' }, color: '#006E6F', py: 4 }}>
            Comments (9)
        </Typography>
    );
};

Comments.propTypes = {

};

export default Comments;