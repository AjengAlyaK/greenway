import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper, Stack, Typography } from '@mui/material';

const WarningBar = ({ visibility, color, iconBar, titleBar, object }) => {
    return (
        <Grid
            container
            item
            xs={12}
            display={visibility}
        >
            <Paper
                sx={{ width: "100%", p: 2, bgcolor: color }}
                elevation={0}
            >
                <Grid
                    container
                    item
                >
                    <Stack
                        spacing={1}
                        sx={{ display: { xs: 'none', md: 'inline' } }}
                    >
                        {iconBar}
                    </Stack>
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

WarningBar.defaultProps = {
    visibility: 'flex',
};

export default WarningBar;