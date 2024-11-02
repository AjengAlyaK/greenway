import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper, Stack, Typography } from '@mui/material';

const WarningBar = ({ color, iconBar, object }) => {
    return (
        <Grid
            container
            item
            xs={12}
        >
            <Paper
                sx={{ width: "100%", p: 1, bgcolor: color }}
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
                        {/* wording */}
                        <Typography sx={{ fontWeight: 600 }}>
                            Permission Required
                        </Typography>
                        <Typography variant="body2">
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
    object: PropTypes.string.isRequired,
};

export default WarningBar;