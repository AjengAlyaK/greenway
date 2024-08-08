import React from 'react';
// import PropTypes from 'prop-types';
import { Grid, Stack, Typography, Button } from '@mui/material';
import HalfScreenImage from '../Components/HalfScreenImage';
import TextField from '@mui/material/TextField';

const picture = "https://firebasestorage.googleapis.com/v0/b/mostgreen.appspot.com/o/semeru.jpg?alt=media&token=1b762c8d-a67a-4c42-a29e-e65c12daa77a";
const greeting = "Welcome Back!";
const words = '“Don\'t just enjoy the beauty of nature, but also love nature by not littering or vandalizing it"';
const author = "- Fiersa Besari";

const LoginPage = props => {
    return (
        <Grid container spacing={0} sx={{ height: '100vh' }}>
            <Grid item xs={6}
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
            <Grid item container xs={6} justifyContent="center" alignItems="center" sx={{ px: 5 }}>
                <Grid item xs={12}>
                    <Stack spacing={4}>
                        <Grid item container justifyContent="center">
                            <Typography variant="h2" sx={{ fontWeight: 'bold' }}>GreenWay</Typography>
                        </Grid>
                        <Stack spacing={2}>
                            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                            <Button variant="contained">Contained</Button>
                            <Typography variant="body1">Don't have an account? Register</Typography>
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