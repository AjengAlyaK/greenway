import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Card, CardContent, CardMedia, CardActionArea } from '@mui/material';

// const temporary = "https://firebasestorage.googleapis.com/v0/b/mostgreen.appspot.com/o/menanggapi-krisis-lingkungan-hidup.jpg?alt=media&token=9398c761-458f-4e14-8dda-0cb74083622a";

const CardArticle = ({ image, title, link }) => {
    return (
        <Card sx={{ width: {xs:'100%', md:250}, borderRadius: 3 }}>
            <CardActionArea
                component="a"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ textDecoration: 'none' }}
            >
                <CardMedia
                    component="img"
                    height="160"
                    image={image}
                    alt={title}
                />
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
};

export default CardArticle;