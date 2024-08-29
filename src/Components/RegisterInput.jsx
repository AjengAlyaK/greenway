import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { Typography, Button, TextField } from '@mui/material';

const RegisterInput = props => {
    return (
        <>
            <TextField id="outlined-basic" label="Name" variant="outlined" />
            <TextField id="outlined-basic" label="Email" variant="outlined" />
            <TextField id="outlined-basic" label="Password" variant="outlined" />
            <Button variant="contained" sx={{ bgcolor: "#006E6F" }}>Sign In</Button>
            <Typography variant="body1">Don't have an account? <Link to="/login">Register</Link></Typography>
        </>
    );
};

RegisterInput.propTypes = {
    
};

export default RegisterInput;