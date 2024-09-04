import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from '@mui/material';

const AvatarGeneral = ({ source, alternative }) => {
    return (
        <Avatar src={source} alt={`photo of ${alternative}`} sx={{ width: 54, height: 54 }} />
    );
};

AvatarGeneral.propTypes = {
    source: PropTypes.string.isRequired,
    alternative: PropTypes.string.isRequired,
};

export default AvatarGeneral;