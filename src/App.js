import React from "react";
import { Box, CssBaseline} from "@mui/material";
import ResponsiveAppBar from "./Components/Navbar";
import HeroArea from "./Components/HeroArea";

function App() {
    return (
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
            <ResponsiveAppBar />
            {/* hero area */}
            <HeroArea />
            {/* record */}
            
        </Box >
    )
}

export default App;