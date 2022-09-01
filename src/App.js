import './App.css';
import Router from './Router';
import Header from "./component/feature/Header/Header";
import Footer from "./component/feature/Footer/Footer";
import {BrowserRouter} from "react-router-dom";
import {createTheme, ThemeProvisor} from '@mui/material/';
import { ThemeProvider } from '@emotion/react';
import React, { useEffect, useState } from "react";
import { Teacher } from './component/pages';
// import { orange, purple } from '@mui/material/colors';


const MyTheme= createTheme({
  palette:{
    success:{
      main: "#dcedc8"
    },
    // success: orange[100]
  }
})

function App() {

  return (
    <div className="App">
      <ThemeProvider theme={MyTheme}>
        <BrowserRouter>
        <Header/>
        <Router/>
        <Footer/>
        </BrowserRouter>
      </ThemeProvider>

    </div>
 
  );
}

export default App;
