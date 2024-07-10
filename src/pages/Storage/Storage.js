import React, { useState, useEffect } from 'react';
import GridWrapper from '../../Components/common/GridWrapper/GridWrapper';
import UserTable from '../../Components/UserTable/UserTable';
import BasicCard from '../../Components/common/BasicCard/BasicCard';
import BasicSnackbar from '../../Components/common/BasicSnackBar/BasicSnackBar';
// import CommonButton from '../../Components/common/CommonButton/CommonButton';

const Storage = () => {
    const [open, setOpen] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <GridWrapper>
            <BasicCard
                content={<UserTable onError={() => setOpen(true)}/>}
            />
            {/* <BasicSnackbar
                open={open}
                serverity="error"
                message="Data couldn't be fetched"
                onClose={handleClose()}
            /> */}
        </GridWrapper>
    );
};

export default Storage;