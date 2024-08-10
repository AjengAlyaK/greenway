import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography, Box, Stack } from '@mui/material';

const HalfScreenImage = ({ picture, greeting, words, author }) => {
    return (
        <Paper sx={{
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <img
                src={picture}
                alt="pic"
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.2)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 5,
                    width: { xs: '100%', md: '50%' }
                }}
            >
                <Stack spacing={2}>
                    <Typography variant="h3" sx={{ typography: { xs: 'h4', md: 'h3' }, fontWeight: { xs: 'bold', md: 'bold' }, color: 'white' }}>
                        {greeting}
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'white' }}>
                        {words}
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'white' }}>
                        {author}
                    </Typography>
                </Stack>
            </Box>
        </Paper>
    );
};

HalfScreenImage.propTypes = {
    picture: PropTypes.string.isRequired,
    greeting: PropTypes.string.isRequired,
    words: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
};

export default HalfScreenImage;