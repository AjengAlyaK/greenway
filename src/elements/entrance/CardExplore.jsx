import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Stack, Typography } from '@mui/material';

const CardExplore = ({ title, subtitle }) => {
    return (
        <Paper
            sx={(theme) => ({
                bgcolor: '#5AC9A2',
                borderRadius: 3,
                px: 2,
                py: 4,
                height: '100%',
                transition: theme.transitions.create(['transform'], {
                    duration: theme.transitions.duration.standard,
                }),
                '&:hover': {
                    transform: 'scale(1.05)',
                }
            })}
        >
            <Stack
                spacing={2}
            >
                <Typography
                    sx={{
                        color: '#ffffff',
                        fontWeight: { xs: 'bold', sm: 'bold', md: 'bold' },
                        typography: { xs: 'h6', md: 'h4' }
                    }}
                >
                    {title}
                </Typography>
                <Typography
                    sx={{
                        color: '#ffffff',
                        typography: 'body'
                    }}
                >
                    {subtitle}
                </Typography>
            </Stack>
        </Paper>
    );
};

CardExplore.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
};

export default CardExplore;