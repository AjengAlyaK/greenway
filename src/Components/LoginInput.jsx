import React from 'react';
import PropTypes from 'prop-types';
import { Stack, Typography, Button, TextField } from '@mui/material';
import TitleEntrance from '../elements/entrance/TitleEntrance';
import { Link } from 'react-router-dom';
import useInput from '../hooks/useInput';

const LoginInput = ({ login }) => {
    const [email, onEmailChange] = useInput('');
    const [password, onPasswordChange] = useInput('');
    return (
        <Stack spacing={4}>
            <TitleEntrance />
            <Stack spacing={2}>
                <TextField id="email" label="Email" value={email} onChange={onEmailChange} variant="outlined" />
                <TextField id="password" label="Password" value={password} onChange={onPasswordChange} variant="outlined" />
                <Button variant="contained" sx={{ bgcolor: "#006E6F" }} onClick={() => {
                    login({ email, password });
                }}>Log In</Button>
                <Typography variant="body1">Don't have an account? <Link to="/signup">Register</Link></Typography>
            </Stack>
        </Stack>
    );
};

LoginInput.propTypes = {
    login: PropTypes.func.isRequired,
};

export default LoginInput;