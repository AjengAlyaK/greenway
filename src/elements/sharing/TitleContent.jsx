import React from 'react';
import PropTypes from 'prop-types';
import { Box, Stack, Typography } from '@mui/material';

const TitleContent = ({ title, subtitle }) => {
    return (
        <Stack spacing={{ xs: 2, md: 3 }}>
            <Typography sx={{ color: '#006E6F', typography: { xs: 'h4', md: 'h3' }, textAlign: { xs: 'center', md: 'center' }, fontWeight: { xs: 'bold', md: 'bold' } }}>
                {title}
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Typography variant="body1" textAlign="center" sx={{ width: '80%' }}>
                    {subtitle}
                </Typography>
            </Box>
        </Stack>
    );
};

TitleContent.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
};

export default TitleContent;