import "./Contact.css";
import React from "react";
import Button from '@mui/material/Button';
import SendSharpIcon from '@mui/icons-material/SendSharp';

function contact() {
  return (
    <div className="contact">
      <h1>Contact</h1>

      <Button variant="outlined" color="success" type="submit" endIcon={<SendSharpIcon/>}>Submit</Button>


    </div>
  );
};

export default contact;
