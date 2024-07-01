import React from 'react';
import CommonButton from '../common/CommonButton/CommonButton';
import NotificationBell from '../common/NotificationBell/NotificationBell';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { IconButton, Tooltip } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';
import Box from '@mui/material/Box';

const Header = ({ title }) => {
    const headerStyles = {
        wrapper: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#009be5',
            padding: '20px',
        },
        topRow: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'end',
            alignItems: 'center',
            marginButtom: '20px',
            '*': {
                marginRight: '5px',
            }
        },
        middleRow: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginButtom: '20px',
            marginLeft: '320px',
        },
        link: {
            fontWeight: 500,
            color: 'rgba(255, 255, 255, 0.7)',
            "&:hover": {
                color: '#fff',
                cursor: 'pointer',
            },
        },
        webButton: {
            marginRight: '5px',
        },
    };

    return (
        <Box sx={headerStyles.wrapper}>
            <Box sx={headerStyles.topRow}>
                <Typography
                    sx={headerStyles.link}
                >
                    Go to docs
                </Typography>
                <NotificationBell
                    iconColor="white"
                />
                <Avatar src="https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj" />
            </Box>
            <Box sx={headerStyles.middleRow}>
                <Typography
                    variant="h1"
                    color="white"
                >{title}</Typography>
                <Box>
                    <CommonButton 
                        sx={headerStyles.webButton}
                        variant="outlined"
                    >
                        Web setup
                    </CommonButton>
                    <Tooltip 
                        title="help"
                    >
                        <IconButton
                            color="white"
                            sx={headerStyles.helpIcon}    
                        >
                            <HelpIcon />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Box>
        </Box>
    );
};

export default Header;