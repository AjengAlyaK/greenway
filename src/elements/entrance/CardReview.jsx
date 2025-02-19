import React from 'react';
import PropTypes from 'prop-types';
import { Box, Paper, Typography } from '@mui/material';
import AvatarGeneral from '../sharing/AvatarGeneral';

const CardReview = ({ name, photo, review, occupation }) => {
    return (
        <Paper
            sx={{
                p: 2,
                border: '1.5px solid #5AC9A2',
                borderRadius: 3,
                height: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                flexBasis: 'column',
                transition: 'box-shadow 0.3s ease-in-out',
                '&:hover': {
                    boxShadow: '0px 4px 10px 1px rgba(90, 201, 162, 0.5)',
                },
            }}
        >
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="flex-start"
            >
                <AvatarGeneral source={photo} alternative={name} />
                <Typography sx={{ pt: 2, }}>{review}</Typography>
                <Typography sx={{ fontWeight: 'bold', pt: 2 }}>{name}</Typography>
                <Typography sx={{ pb: 1 }}>{occupation}</Typography>
            </Box>
        </Paper>
    );
};

CardReview.propTypes = {
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    review: PropTypes.string.isRequired,
    occupation: PropTypes.string.isRequired,
};

export default CardReview;