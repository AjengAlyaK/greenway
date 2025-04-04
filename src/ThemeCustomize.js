import { createTheme } from '@mui/material/styles';
import '@fontsource/poppins';

const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '12px',
                    variants: [
                        {
                            props: { variant: 'outlined' },
                            style: {
                                '&:hover': {
                                    backgroundColor: '#006E6F',
                                    color: '#FFFFFF',
                                }
                            },
                        }
                    ]
                }
            }
        }
    },
    palette: {
        primary: {
            main: '#006E6F',
        }
    },
    typography: {
        fontFamily: 'Poppins, Arial, sans-serif',
        button: {
            fontWeight: 'bold',
            textTransform: 'none',
        }
    }
});

export default theme;
