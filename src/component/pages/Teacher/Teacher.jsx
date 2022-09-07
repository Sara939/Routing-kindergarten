import "./Teacher.css";
import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import GetInfo from "../../../service/serverApi";
import CardMedia from '@mui/material/CardMedia';
import { Container } from "@mui/system";
import Grid from "@mui/material/Grid";


function Teacher() {
  const [teachers, setTeachers]= useState([]);

  GetInfo().then((res)=> setTeachers(res))


  return (
    
    // <div className="teacher">
      <Container>
        <Grid Container spacing={20}>
          {teachers.map((item)=>
            <Grid item md={2}>
              <Card >
              <CardMedia
                component="img"
                height="200"
                image={item.photo} 
                />
              <CardContent >
                <Typography gutterBottom variant="h5" component="div">
                  {item.firstname} {item.lastname}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {item.phonnumber}
                </Typography>
              </CardContent>
              </Card>
            </Grid>
          )}
        </Grid> 
      </Container>
      
      
    // </div>
  );
};

export default Teacher;


