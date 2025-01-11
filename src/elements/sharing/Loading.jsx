import React from 'react';
import PropTypes from 'prop-types';
import { Skeleton } from '@mui/material';

const Loading = ({children}) => {
    return (
        <Skeleton>
            {children}
        </Skeleton>
    );
};

Loading.propTypes = {
    children: PropTypes.element.isRequired,
};

export default Loading;