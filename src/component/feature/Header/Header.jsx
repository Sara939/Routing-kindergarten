import "./Header.css";
import React from "react";
import {Link} from "react-router-dom";
import {navPages} from "";


function Header() {
  return (
    <div className="header">
      <Link to={"/"}><button>Home</button></Link>
      {
        navPages.map(pageName=>{
          <Link to={pageName}><button>{pageName}</button></Link>

        })
      }
    </div>
  );
};

export default Header;
