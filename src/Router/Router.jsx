import "./Router.css";
import React from "react";
import {Class,Contact,Home,ParentCommittee,Teacher} from "../component/pages/";
import {Route, Routes} from "react-router-dom";

function Router() {

  return (
    <div className="router">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="Class" element={<Class/>}/>
        <Route path="Contact" element={<Contact/>}/>
        <Route path="ParentCommittee" element={<ParentCommittee/>}/>
        <Route path="Teacher" element={<Teacher/>}/>
      </Routes>

         
      
     
      
    </div>
  );
};

export default Router;
