import React from "react";
import Signout from './signout';
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import './styles/headingstyle.css'

const Teacherdash = () => {
    
        return (
            <>
        <div className="float-right mt-1 mr-1">
            <Signout />
        </div>

        <div>
            <h2 className="heading">Teacher DashBoard</h2>
            <div style={{margin:"auto"}}>
            <Link to="/teacher/takeattd">
                <Button variant="btn btn-primary">Take Attendance</Button>
            </Link>
            <Link to="/teacher/viewattd">
                <Button variant="btn btn-primary">View Attendance</Button>
            </Link>
            <Link to="/teacher/modifyattd">
                <Button variant="btn btn-primary">Modify Attendance</Button>
            </Link>
            <Link to="/teacher/catupload">
                <Button variant="btn btn-primary">Upload CAT Attendance</Button>
            </Link>
        </div> 
            <Footer/>
        </div>
        </>
    );
};

export default Teacherdash;