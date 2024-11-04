import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper, Stack, Typography } from '@mui/material';

const WarningBar = ({ color, iconBar, titleBar, object }) => {
    return (
        <Grid
            container
            item
            xs={12}
        >
            <Paper
                sx={{ width: "100%", p: 2, bgcolor: color }}
                elevation={0}
            >
                <Grid
                    container
                    item
                >
                    {iconBar}
                    <Stack
                        spacing={1}
                        sx={{ pl: 1 }}
                    >
                        <Typography variant="body1" sx={{ fontWeight: 600 }}>
                            {titleBar}
                        </Typography>
                        <Typography variant="body1">
                            Please login or create an account to {object}!
                        </Typography>
                    </Stack>
                </Grid>
            </Paper>
        </Grid>
    );
};

WarningBar.propTypes = {
    color: PropTypes.string.isRequired,
    iconBar: PropTypes.element.isRequired,
    titleBar: PropTypes.string.isRequired,
    object: PropTypes.string.isRequired,
};

export default WarningBar;