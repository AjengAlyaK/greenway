import React from 'react';
// import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import HalfScreenImage from '../Components/HalfScreenImage';
import LoginInput from '../Components/LoginInput';
import { useDispatch } from 'react-redux';
import { asyncSetAuthUser } from '../states/authUser/action';
import { useNavigate } from 'react-router';

const picture = "https://firebasestorage.googleapis.com/v0/b/mostgreen.appspot.com/o/semeru.jpg?alt=media&token=1b762c8d-a67a-4c42-a29e-e65c12daa77a";
const greeting = "Welcome Back!";
const words = '“Don\'t just enjoy the beauty of nature, but also love nature by not littering or vandalizing it"';
const author = "- Fiersa Besari";

const LoginPage = props => {
    const Navigate = useNavigate()
    const dispatch = useDispatch();

    const onLogin = async ({ email, password }) => {
        await dispatch(asyncSetAuthUser({ email, password }));
        Navigate('/')
    };
    
    return (
        <Grid container spacing={0} sx={{ height: '100vh', bgcolor: '#F8FFF8' }}>
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
            <Grid item container xs={12} md={6} justifyContent="center" alignItems="center" sx={{ px: 5, height: '100%' }}>
                <Grid item xs={12}>
                    <LoginInput login={onLogin} />
                </Grid>
            </Grid>
        </Grid>
    );
};

LoginPage.propTypes = {

};

export default LoginPage;