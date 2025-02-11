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
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);'
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