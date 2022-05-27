import React from 'react'
import Login from './pages/login';
import Home from './pages/home';
import Signout from './pages/signout';
import Studentdash from './pages/studentdash';
import Teacherdash from './pages/teacherdash';
import Admindash from './pages/admindash';
import Newstudent from './pages/admin/newstudent';
import Newteacher from './pages/admin/newteacher';
import Newsubj from './pages/admin/newsubj';
import Newstu from './pages/admin/newstu';
import Takeattd from './pages/teachers/takeattd';
import Modifyattd from './pages/teachers/modifyattd';
import Viewattd from './pages/teachers/viewattd';
import Catupload from './pages/teachers/catupload';
import Giveattd from './pages/students/giveattd';
import Viewattdstu from './pages/students/viewattd';
import { history } from "./history";
import { BrowserRouter as Router, Routes, Route,Navigate} from 'react-router-dom';
import { useState, createContext, useNavigate } from "react";
function App() {
  const [type, settype] = useState(-1);
  const [curemail,setcuremail]=useState("");
  const [curid,setcurid]=useState("");
  
  /*useEffect(() => {
    console.log("type : ",type);
  },[type]);*/
  return (

    <Router history={history}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id/login" element={<Login pass={settype} e={setcuremail} i={setcurid} />}/>
        {type === 1 && (
                    <Route path="/student/dashboard" element={<Studentdash />} />
                ) }
        {type === 1 && (
                    <Route path="/student/giveattd" element={<Giveattd e={curemail} id={curid}/>} />
                ) }
        {type === 1 && (
                    <Route path="/student/viewattd" element={<Viewattdstu e={curemail} id={curid}/>} />
                ) }
        {type === 2 && (
                    <Route path="/teacher/dashboard" element={<Teacherdash />} />
                ) }
        {type === 2 && (
                    <Route path="/teacher/takeattd" element={<Takeattd e={curemail} id={curid}/>} />
                ) }
        {type === 2 && (
                    <Route path="/teacher/viewattd" element={<Viewattd e={curemail} id={curid}/>} />
                ) }
        {type === 2 && (
                    <Route path="/teacher/modifyattd" element={<Modifyattd e={curemail} id={curid}/>} />
                ) }
        {type === 2 && (
                    <Route path="/teacher/catupload" element={<Catupload />} />
                ) }
        {type === 3 && (
                    <Route path="/admin/dashboard" element={<Admindash />} /> 
                ) }
        {type === 3 && (
                    <Route path="/admin/newstudent" element={<Newstudent />} /> 
                ) }
        {type === 3 && (
                    <Route path="/admin/newteacher" element={<Newteacher />} /> 
                ) }
        {type === 3 && (
                    <Route path="/admin/newteachersubj" element={<Newsubj />} /> 
                ) }
        {type === 3 && (
                    <Route path="/admin/newstudentsem" element={<Newstu />} /> 
                ) }
        <Route path="*" element={<Navigate to="/" />} />       
      </Routes>
    </Router>
    
  );
}

export default App;
/**/