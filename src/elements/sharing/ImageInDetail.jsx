import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Stack, Typography, Box } from '@mui/material';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

const ImageInDetail = ({ picture, location, title }) => {
    return (
        <>
            <Paper elevation={0}>
                <img style={{ width: '100%', height: 'auto', borderRadius: 15 }} src={picture} alt="img campaign" />
            </Paper>
            <Stack spacing={2} sx={{ py: 2 }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <FmdGoodIcon sx={{ mr: 1 }} />
                    <Typography sx={{ typography: { xs: 'body1', md: 'body1' }, fontWeight: { xs: 'bold', md: 'bold' } }}>
                        {location}
                    </Typography>
                </Box>
                <Typography sx={{ typography: { xs: 'h4', md: 'h4' }, fontWeight: { xs: 'bold', md: 'bold' }, color: '#006E6F' }}>
                    {title}
                </Typography>
            </Stack>
        </>
    );
};

ImageInDetail.propTypes = {
    picture: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default ImageInDetail;