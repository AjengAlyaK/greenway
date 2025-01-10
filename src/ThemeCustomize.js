import { createTheme } from '@mui/material/styles';
import '@fontsource/poppins';
import '@fontsource/inter';

const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '12px',
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
