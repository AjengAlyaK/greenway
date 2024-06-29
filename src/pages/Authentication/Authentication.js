import React from 'react';
import Grid from '@mui/material/Grid';
import NotificationBell from '../../Components/common/NotificationBell/NotificationBell';
import BasicMenu from '../../Components/common/BasicMenu/BasicMenu';

const Authentication = () => {
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div>
            <Grid item xs={8}>
                This is an Authentication page
                <NotificationBell
                    iconColor="primary"
                    badgeContent={9}
                    anchorEl={anchorEl}
                    onClick={handleOpen}
                />
                <BasicMenu
                    open={open}
                    anchorEl={anchorEl}
                    handleClose={handleClose}
                />
            </Grid>
        </div>
    );
};

export default Authentication;