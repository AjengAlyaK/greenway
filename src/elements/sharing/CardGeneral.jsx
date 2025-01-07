import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// card
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
// component MUI
import { Box, Typography } from '@mui/material';

const CardGeneral = ({ path, id, index, picture, name, location }) => {
    return (
        <Card key={index} sx={{ width: {xs: '100%'}, borderRadius: 3, margin: 'auto' }}>
            <CardActionArea
                component={Link}
                to={`/${path}/${id}`}
                sx={{ textDecoration: 'none' }}
            >
                <Box sx={{ position: 'relative' }}>
                    <CardMedia
                        component="img"
                        height="200"
                        image={picture}
                        alt={picture}
                    />
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0, 0, 0, 0.3)', // Dark overlay with 50% opacity
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-end',
                            p: 2,
                            color: 'white',
                            fontSize: '1.5rem',
                            fontWeight: 'bold',
                            opacity: 1,
                            transition: 'opacity 0.3s ease',
                        }}
                    >
                        <Typography sx={{ fontWeight: 'bold' }}>
                            {name}
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <FmdGoodIcon sx={{ mr: 1 }} />
                            <Typography>
                                {location}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </CardActionArea>
        </Card>
    );
};

CardGeneral.propTypes = {
    path: PropTypes.string,
    id: PropTypes.string,
    index: PropTypes.number.isRequired,
    picture: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
};

export default CardGeneral;