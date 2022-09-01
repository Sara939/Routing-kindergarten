import "./Teacher.css";
import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
// import uuid from 'uuid/v1';key={uuid()}


function Teacher() {
  const [teachers, setTeachers]= useState(null);

    useEffect(() => {
      fetch("http://localhost:8000/Teachers")
      .then(res => {
        return res.json()})
        .then(data =>{
            console.log(data);
            setTeachers([data]);

        })
      },[]);
      
  return (
    <div className="teacher">
      {teachers.map(teachers=>{
        return (    
        <Card sx={{ minWidth: 275 }} >
      <CardContent>
        <Typography variant="h5" component="div">
          {teachers.firstname}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          phone
        </Typography>
      </CardContent>
    </Card>)
      })}
    </div>
  );
};

export default Teacher;


