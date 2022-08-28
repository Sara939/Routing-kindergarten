import "./Router.css";
import React from "react";
import {Class,Contact,Home,ParentCommittee,Teacher} from "../component/pages";
import {Route, Routes} from "react-router-dom";

function Router() {

  return (
    <div className="router">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="Classes" element={<Class/>}/>
        <Route path="Contact" element={<Contact/>}/>
        <Route path="Parents-Committee" element={<ParentCommittee/>}/>
        <Route path="Teachers" element={<Teacher/>}/>
      </Routes>

         
      
     
      
    </div>
  );
};

export default Router;
