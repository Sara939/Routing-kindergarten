import "./Teacher.css";
import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


function Teacher({teachers}) {
  // const [teachers, setTeachers]= useState(null);

  //   useEffect(() => {
  //     fetch("http://localhost:8000/Teachers")
  //     .then(res => {
  //       return res.json()})
  //       .then(data =>{
  //           // console.log(data);
  //           setTeachers(data);
  //           console.log(teachers);

  //       })
  //     },[]);

  return (
    <div className="teacher">
      <h1>{teachers}</h1>

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


