import React from 'react';
// import PropTypes from 'prop-types';
import { Button, Grid, Stack, TextField } from '@mui/material';

const FormComment = props => {
    return (
        <Grid
            container
            item
            // spacing={0}
            direction="column"
        >
            <Stack spacing={2}>
                <TextField
                    id="outlined-basic"
                    label="What's on your mind ?"
                    variant="outlined"
                    multiline
                    rows={5}
                    fullWidth
                />
                <Button variant="contained" sx={{ bgcolor: "#006E6F" }}>Add Comment</Button>
            </Stack>
        </Grid>
    );
};

// FormComment.propTypes = {

// };

export default FormComment;