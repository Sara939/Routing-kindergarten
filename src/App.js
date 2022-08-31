import './App.css';
import Router from './Router';
import Header from "./component/feature/Header/Header";
import Footer from "./component/feature/Footer/Footer";
import {BrowserRouter} from "react-router-dom";
import {createTheme, ThemeProvisor} from '@mui/material/';
import { ThemeProvider } from '@emotion/react';
import React, { useEffect, useState } from "react";
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
  const [teachers, setTeachers]= useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/Teachers")
    .then(res => {
      return res.json()})
      .then(data =>{
          // console.log(data);
          setTeachers(data);
          console.log(teachers);

      })
    },[]);

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
