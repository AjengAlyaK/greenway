import React from 'react';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import HalfScreenImage from '../Components/HalfScreenImage';
import { useDispatch } from 'react-redux';
import { asyncRegisterUser } from '../states/register/action';
import RegisterInput from '../Components/RegisterInput';

const picture = "https://firebasestorage.googleapis.com/v0/b/mostgreen.appspot.com/o/beach%201.jpg?alt=media&token=1b00e76b-68cc-4ce3-a205-2981f56b3c42";
const greeting = "Welcome!";
const words = "As long as you don't have the subtle feeling of seeing nature, your soul is not alive.";
const author = "- Prof. Dr. Hamka";

const RegisterPage = () => {
    const Navigate = useNavigate();
    const dispatch = useDispatch();

    const onRegister = async ({ name, email, password }) => {
        await dispatch(asyncRegisterUser({ name, email, password }));
        console.log(name, email,  password);
        Navigate('/login');
    }
    
    return (
        <Grid
            container
            spacing={0}
            sx={{
                height: '100vh',
                bgcolor: '#F8FFF8'
            }}
        >
            <Grid
                item
                xs={12}
                md={6}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    height: '100%'
                }}
            >
                <HalfScreenImage picture={picture} greeting={greeting} words={words} author={author} />
            </Grid>
            <Grid
                item
                container
                xs={12}
                md={6}
                justifyContent="center"
                alignItems="center"
                sx={{
                    px: 5,
                    height: '100%'
                }}
            >
                <Grid
                    xs={12}
                >
                    <RegisterInput register={onRegister}/>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default RegisterPage;