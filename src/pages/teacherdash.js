import React from "react";
import Signout from './signout';
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
<<<<<<< HEAD
import Footer from './Footer'
import './styles/headingstyle.css'
=======
>>>>>>> 4f76763bffbfff083c3008f92d91337b77bb862d

const Teacherdash = () => {
    
        return (
<<<<<<< HEAD
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
=======
        <div className="float-right mt-2 mr-2">
            <p> teacher dashoard</p>

            <Link to="/teacher/takeattd">
                <Button variant="outline-primary">Take Attendance</Button>
            </Link>
            <Link to="/teacher/viewattd">
                <Button variant="outline-primary">View Attendance</Button>
            </Link>
            <Link to="/teacher/modifyattd">
                <Button variant="outline-primary">Modify Attendance</Button>
            </Link>
            <Link to="/teacher/catupload">
                <Button variant="outline-primary">Upload CAT Attendance</Button>
            </Link>
            <Signout />
        </div>
>>>>>>> 4f76763bffbfff083c3008f92d91337b77bb862d
    );
};

export default Teacherdash;