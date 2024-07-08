import React, { useState, useEffect } from 'react';
import GridWrapper from '../../Components/common/GridWrapper/GridWrapper';
import UserTable from '../../Components/UserTable/UserTable';
// import BasicSnackbar from '../../Components/common/BasicSnackBar/BasicSnackBar';
// import CommonButton from '../../Components/common/CommonButton/CommonButton';

const Storage = () => {
    // const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(true)
    // const handleClick = () => {
    //     setOpen(true);
    // };

    // const handleClose = (event, reason) => {
    //     if (reason === 'clickaway') {
    //         return;
    //     }

    //     setOpen(false);
    // };

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <GridWrapper item xs={8} sx={{ marginLeft: '320px' }}>
            Storage Page
            {/* <CommonButton
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
            /> */}
            <UserTable/>
        </GridWrapper>
    );
};

export default Storage;