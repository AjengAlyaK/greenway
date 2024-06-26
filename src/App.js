import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Grid from '@mui/material/Grid';

function App() {
  return (
    <Grid container>
      <Navbar />
      <Outlet />
    </Grid>
  )
}

export default App;
