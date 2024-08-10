import React from 'react';
// import PropTypes from 'prop-types';
import { Grid, Stack, Typography, Button } from '@mui/material';
import HalfScreenImage from '../Components/HalfScreenImage';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import TitleEntrance from '../elements/entrance/TitleEntrance';

const picture = "https://firebasestorage.googleapis.com/v0/b/mostgreen.appspot.com/o/semeru.jpg?alt=media&token=1b762c8d-a67a-4c42-a29e-e65c12daa77a";
const greeting = "Welcome Back!";
const words = '“Don\'t just enjoy the beauty of nature, but also love nature by not littering or vandalizing it"';
const author = "- Fiersa Besari";

const LoginPage = props => {
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
                    <Stack spacing={4}>
                        <TitleEntrance />
                        <Stack spacing={2}>
                            <TextField id="outlined-basic" label="Email" variant="outlined" />
                            <TextField id="outlined-basic" label="Password" variant="outlined" />
                            <Button variant="contained" sx={{ bgcolor: "#006E6F" }}>Log In</Button>
                            <Typography variant="body1">Don't have an account? <Link to="/register">Register</Link></Typography>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
        </Grid>
    );
};

LoginPage.propTypes = {

};

export default LoginPage;