import React from 'react';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const BasicModal = ({ open, onClose }) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={style}>
                <Typography 
                    variant="h6" 
                    component="h2"
                >
                    New User
                    {/* Title */}
                </Typography>
                <Typography sx={{ mt: 2 }}>
                    Fill out inputs and hit 'submit' button.
                </Typography>
                <Box>
                    
                </Box>
            </Box>
        </Modal>
    );
};

export default BasicModal;