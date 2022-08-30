import "./Teacher.css";
import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function Teacher() {
  const [teachers, setTeachers]= useState([]);

    useEffect(() => {
      fetch("http://localhost:8000/KinderGarten")
      .then(res => {
        return res.json()})
        .then((data)=>{
            console.log(data);
            setTeachers(data);
        })
      },[]);



  return (
    <div className="teacher">
      <h1>{teachers.Teachers.firstname}</h1>

    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          name+lastname
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          phone
        </Typography>
      </CardContent>
    </Card>

    </div>
  );
};

export default Teacher;


