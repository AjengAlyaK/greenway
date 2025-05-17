import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import ResponsiveAppBar from "./Components/Navbar";
import theme from "./ThemeCustomize";
import Footer from "./Components/Footer";
import Router from "./Router";
import { useLocation } from "react-router";

function App() {
    const location = useLocation();
    const noNavAndFooterRoutes = ['/login', '/signup'];
    const showNavbarAndFooter = !noNavAndFooterRoutes.includes(location.pathname);
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{
                minHeight: '100vh',
                bgcolor: '#F8FFF8',
                display: 'flex',
                flexDirection: 'column',
                rowGap: 0,
            }}
            >
                {/* navbar */}
                <CssBaseline />
                {/* <ResponsiveAppBar /> */}
                {showNavbarAndFooter && <ResponsiveAppBar />}
                {/* main */}
                <Router/>
                {/* footer */}
                {showNavbarAndFooter && <Footer />}
            </Box >
        </ThemeProvider>
    )
}

export default App;