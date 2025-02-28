import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Card, CardContent, CardMedia, CardActionArea, Box } from '@mui/material';

const CardArticle = ({ image, title, link }) => {
    return (
        <Card sx={{ width: { xs: '100%' }, borderRadius: 3 }}>
            <CardActionArea
                component="a"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ textDecoration: 'none' }}
            >
                <Box sx={{ overflow: 'hidden', height: '160px' }}>
                    <CardMedia
                        component="img"
                        height="160px"
                        image={image}
                        alt={title}
                        sx={{
                            transition: 'transform 0.3s ease-in-out',
                            transformOrigin: 'center center',
                            '&:hover': {
                                transform: 'scale(1.1)',
                            },
                        }}
                    />
                </Box>
                <CardContent sx={{ py: 1.5 }}>
                    <Typography variant="body1"
                        sx={{
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            maxWidth: '100%',
                            display: 'block'
                        }}>
                        {title}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card >
    );
};

CardArticle.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    loading: PropTypes.bool,
};

export default CardArticle;