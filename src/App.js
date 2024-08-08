import React from "react";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import ResponsiveAppBar from "./Components/Navbar";
import theme from "./ThemeCustomize";
import Footer from "./Components/Footer";
import Router from "./Router";

function App() {
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
                {/* main */}
                <Router/>
                {/* footer */}
                {/* <Footer /> */}
            </Box >
        </ThemeProvider>
    )
}

export default App;