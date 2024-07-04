import React from 'react';
import BasicModal from '../../common/BasicModal/BasicModal';
import { Box, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const NewUserModal = ({ open, onClose }) => {
    const modalStyles = {
        inputFields: {
            display: 'flex',
            flexDirection: 'column',
            marginTop: '20px',
            marginBottom: '15px',
            '.MuiInput-root': {
                marginBottom: '20px',
            },
        }
    }

    const validationSchema = Yup.object().shape({
        userId: Yup.string()
            .required('User ID is required')
            .min(6, 'User ID must be at least 6 characters'),
        email: Yup.string()
            .required('Email is required')
            .email('Emmail  is invalid'),
        phoneNumber: Yup.string()
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const getContent = () => {
        return (
            <Box sx={modalStyles.inputFields}>
                <TextField
                    placeholder="User ID"
                    name="userId"
                    label="User ID"
                    required
                    error
                    helperText={'This is error message'}
                />
                {/* <Input placeholder="Phone number" />
                <Input placeholder="User id" /> */}
            </Box>
        );
    }
    return (
        <BasicModal
            open={open}
            onClose={onClose}
            title="New User"
            subTitle="Fill out inputs and hit 'submit' button."
            content={getContent()}
            validate={handleSubmit()}
        >

        </BasicModal>
    );
};

export default NewUserModal;