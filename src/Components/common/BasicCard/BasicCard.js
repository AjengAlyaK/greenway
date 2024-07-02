import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import SearchBar from '../SearchBar/SearchBar';

const BasicCard = ({header, content}) => {
    const cardStyles = {
        // width: '1050px',
        width: '900px',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        borderRadius: '8px',
    }
    return (
        <Card sx={cardStyles}>
            {header}
            <CardContent>
                {content}
            </CardContent>
        </Card>
    );
};

export default BasicCard;