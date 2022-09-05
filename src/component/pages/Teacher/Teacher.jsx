import "./Teacher.css";
import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import GetInfo from "../../../service/serverApi";


function Teacher() {
  const [teachers, setTeachers]= useState([]);

  GetInfo().then((res)=> setTeachers(res))
  // console.log(teachers);
//  const {Teachers,Class,Contact} = teachers

  return (
    <div className="teacher">
      {teachers.map((item)=>item.name)}
      
    </div>
  );
};

export default Teacher;


