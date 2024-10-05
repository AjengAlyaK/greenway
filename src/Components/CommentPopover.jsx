import React from 'react';
import { Popover, MenuItem, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const CommentPopover = ({ anchorEl, handleClose }) => {
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            elevation={1}
        >
            <MenuItem onClick={() => alert('coming soon feature')} sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
                <EditIcon sx={{ fontSize: '20px', mr: 1 }} />
                <Typography>Edit</Typography>
            </MenuItem>
            <MenuItem onClick={() => alert('coming soon feature')} sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
                <DeleteIcon sx={{ fontSize: '20px', mr: 1 }} />
                <Typography>Delete</Typography>
            </MenuItem>
        </Popover>
    );
};

CommentPopover.propTypes = {
    anchorEl: PropTypes.object,
    handleClose: PropTypes.func.isRequired,
};

export default CommentPopover;