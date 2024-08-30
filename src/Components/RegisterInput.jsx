import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Stack, Typography, Button, TextField } from '@mui/material';
import TitleEntrance from '../elements/entrance/TitleEntrance';
import useInput from '../hooks/useInput';

const RegisterInput = ({ register }) => {
    const [name, onNameChange] = useInput('');
    const [email, onEmailChange] = useInput('');
    const [password, onPasswordChange] = useInput('');
    return (
        <Stack spacing={4}>
            <TitleEntrance />
            <Stack spacing={2}>
                <TextField id="name" label="Name" value={name} onChange={onNameChange} variant="outlined" />
                <TextField id="email" label="Email" value={email} onChange={onEmailChange} variant="outlined" />
                <TextField id="password" label="Password" value={password} onChange={onPasswordChange} variant="outlined" />
                <Button variant="contained" sx={{ bgcolor: "#006E6F" }}
                    onClick={() => {
                        register({ name, email, password });
                    }}
                >Sign In</Button>
                <Typography variant="body1">Don't have an account? <Link to="/login">Register</Link></Typography>
            </Stack>
        </Stack>
    );
};

RegisterInput.propTypes = {
    onRegister: PropTypes.func.isRequired,
};

export default RegisterInput;