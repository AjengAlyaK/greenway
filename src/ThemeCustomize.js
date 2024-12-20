import { createTheme } from '@mui/material/styles';
import '@fontsource/poppins';

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
        button: {
            fontStyle: 'Poppins, Arial, sans-serif',
            fontWeight: 'bold',
            textTransform: 'none',
        }
    }
});

export default theme;
