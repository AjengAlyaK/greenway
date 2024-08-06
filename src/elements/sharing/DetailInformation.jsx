import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Stack, Typography } from '@mui/material';

const DetailInformation = ({ subtitle, textAlign = "flex-start", value }) => {
    return (
        <Paper elevation={0} sx={{ borderBottom: '1px solid #5AC9A2', py: 3, background: '#F8FFF8' }}>
            <Stack spacing={1}>
                <Typography sx={{ typography: { xs: 'body1', md: 'body1' }, fontWeight: { xs: 'bold', md: 'bold' }, color: '#006E6F' }}>
                    {subtitle}
                </Typography>
                <Typography textAlign={textAlign} sx={{ typography: { xs: 'body1', md: 'body1' } }}> {value} </Typography>
            </Stack>
        </Paper >
    );
};

DetailInformation.propTypes = {
    subtitle: PropTypes.string.isRequired,
    textAlign: PropTypes.string,
    value: PropTypes.string.isRequired,
};

export default DetailInformation;