import React, { useState } from 'react';
import GridWrapper from '../../Components/common/GridWrapper/GridWrapper';
import BasicSnackbar from '../../Components/common/BasicSnackBar/BasicSnackBar';
import CommonButton from '../../Components/common/CommonButton/CommonButton';

const Storage = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <GridWrapper item xs={8} sx={{ marginLeft: '320px' }}>
            Storage Page
            <CommonButton
                variant="contained"
                onClick={handleClick}
            >
                Open Snackbar
            </CommonButton>
            <BasicSnackbar
                open={open}
                onClose={handleClose}
                severity="warning"
                message="Success msg"
            />
        </GridWrapper>
    );
};

export default Storage;