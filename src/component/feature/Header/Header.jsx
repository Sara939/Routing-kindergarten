import "./Header.css";
import React from "react";
import {Link} from "react-router-dom";
// import {navPages} from "";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import HolidayVillageRoundedIcon from '@mui/icons-material/HolidayVillageRounded';
import Typograpy from '@mui/material/Typography';


const navPages=["Classes","Contact","Parents-Committee","Teachers"];

function Header() {
  return (
    <div className="header">
      <Typograpy>
          FEFSFD
      </Typograpy>
      <Stack direction="row" spacing={2} justifyContent="center" paddingTop={2} >
      <Link to={"/"} style={{ textDecoration: 'none' }}><Button variant="contained" color="success" startIcon={<HolidayVillageRoundedIcon/>}>Home</Button></Link>
      {
        navPages.map(pageName=>
          <Link to={pageName} style={{ textDecoration: 'none' }}><Button variant="contained" color="success">{pageName}</Button></Link>

        )
      }
      </Stack>
    </div>
  );
};

export default Header;
