import "./Teacher.css";
import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
// import uuid from 'uuid/v1';key={uuid()}


function Teacher() {
  const [teachers, setTeachers]= useState({Teachers:[]});

    useEffect(() => {
      fetch("http://localhost:8000/Teachers")
      .then(res => {
        return res.json()})
        .then(data =>{ setTeachers(data);

        })
      },[]);

  return (
    <div className="teacher">
      {console.log(teachers[0].firstname)}
    </div>
  );
};

export default Teacher;


