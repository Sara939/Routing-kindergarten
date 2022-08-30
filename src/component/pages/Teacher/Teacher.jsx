import "./Teacher.css";
import React, { useEffect, useState } from "react";


function Teacher() {
  const [teachers, setTeachers]=useState("");

    useEffect(() => {
      fetch("http://localhost:8000/KinderGarten")
      .then(res => {
        return res.json()})
        .then((data)=>{
            console.log(data[0][0]);
            // setTeachers(data[0][0])
        })
      },[]);



  return (
    <div className="teacher">
      <h1>{teachers}</h1>

    </div>
  );
};

export default Teacher;
