import React from 'react';
import { Grid, Stack, Typography, Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import HalfScreenImage from '../Components/HalfScreenImage';
import TitleEntrance from '../elements/entrance/TitleEntrance';

const picture = "https://firebasestorage.googleapis.com/v0/b/mostgreen.appspot.com/o/beach%201.jpg?alt=media&token=1b00e76b-68cc-4ce3-a205-2981f56b3c42";
const greeting = "Welcome!";
const words = "As long as you don't have the subtle feeling of seeing nature, your soul is not alive.";
const author = "- Prof. Dr. Hamka";
const RegisterPage = () => {
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
                    <Stack spacing={4}>
                        <TitleEntrance />
                        <Stack spacing={2}>
                            <TextField id="outlined-basic" label="Name" variant="outlined" />
                            <TextField id="outlined-basic" label="Email" variant="outlined" />
                            <TextField id="outlined-basic" label="Password" variant="outlined" />
                            <Button variant="contained" sx={{ bgcolor: "#006E6F" }}>Sign In</Button>
                            <Typography variant="body1">Don't have an account? <Link to="/login">Register</Link></Typography>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default RegisterPage;