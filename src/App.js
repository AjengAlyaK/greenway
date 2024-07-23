import React from "react";
import { Box, CssBaseline} from "@mui/material";
import ResponsiveAppBar from "./Components/Navbar";
import HeroArea from "./Components/HeroArea";
import Record from "./Components/Record";
import BetterFuture from "./Components/BetterFuture";
import Explore from "./Components/Explore";
import CampaignSlightly from "./Components/CampaignSlightly";

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
            <Record/>
            {/* better future */}
            <BetterFuture />
            {/* explore */}
            <Explore/>
            {/* little campaign */}
            <CampaignSlightly/>
        </Box >
    )
}

export default App;