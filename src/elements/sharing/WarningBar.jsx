import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper, Stack, Typography } from '@mui/material';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

const WarningBar = ({ object }) => {
    return (
        <Grid
            container
            item
            xs={12}
        >
            <Paper
                sx={{ width: "100%", p: 1, bgcolor: "#FFF4E6" }}
                elevation={0}
            >
                <Grid
                    container
                    item
                >
                    <WarningAmberIcon color="warning" />
                    <Stack
                        spacing={1}
                        sx={{ pl: 1 }}
                    >
                        <Typography sx={{fontWeight: 600}}>
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
    object: PropTypes.string.isRequired,
};

export default WarningBar;