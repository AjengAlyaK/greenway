import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Grid from '@mui/material/Grid';
import Header from "./Components/Header/Header";
import { useLocation } from "react-router-dom";

function App() {
  const [ title, setTitle ] = useState('test');
  const location = useLocation();

  useEffect(() => {
    const parsedTitle = location.pathname.replace(/\W/g, ' ');
    console.log(parsedTitle)
    setTitle(parsedTitle);
  }, [location]);

  return (
    <Grid container>
      <Navbar />
      <Header title={title}/>
      <Outlet />
    </Grid>
  )
}

export default App;
