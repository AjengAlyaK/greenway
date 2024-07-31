import React from "react";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import ResponsiveAppBar from "./Components/Navbar";
import HeroArea from "./Components/HeroArea";
import Record from "./Components/Record";
import BetterFuture from "./Components/BetterFuture";
import Explore from "./Components/Explore";
import CampaignSlightly from "./Components/CampaignSlightly";
import theme from "./ThemeCustomize";
import Review from "./Components/Review";
import Video from "./Components/Video";
import CommunityIsCalling from "./Components/CommunityIsCalling";
import Footer from "./Components/Footer";

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
                <ResponsiveAppBar />
                {/* hero area */}
                <HeroArea />
                {/* record */}
                <Record />
                {/* better future */}
                <BetterFuture />
                {/* explore */}
                <Explore />
                {/* little campaign */}
                <CampaignSlightly />
                {/* review */}
                <Review/>
                {/* video */}
                <Video/>
                {/* join community */}
                <CommunityIsCalling/>
                {/* footer */}
                <Footer/>
            </Box >
        </ThemeProvider>
    )
}

export default App;