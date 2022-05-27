import React from "react";
import Signout from './signout';
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
<<<<<<< HEAD
import Footer from './Footer'
import './styles/headingstyle.css'
=======

>>>>>>> 4f76763bffbfff083c3008f92d91337b77bb862d

const Studentdash = () => {
    
        return (
<<<<<<< HEAD
            <>

            <div className="float-right mt-1 mr-1">
                <Signout />
            </div>

            <div>
            <h2 className="heading"> Student Dashboard</h2>
            <div style={{margin:"auto"}}>
            <Link to="/student/giveattd">
                <Button variant="btn btn-primary">Give Attendance</Button>
            </Link>
            <Link to="/student/viewattd">
                <Button variant="btn btn-primary">View Attendance</Button>
            </Link>
            </div>
            <Footer/>
            </div>

            </>
=======
        <div className="float-right mt-2 mr-2">
            <p> student dashoard</p>
            <Link to="/student/giveattd">
                <Button variant="outline-primary">Give Attendance</Button>
            </Link>
            <Link to="/student/viewattd">
                <Button variant="outline-primary">View Attendance</Button>
            </Link>
            <Signout />
        </div>
>>>>>>> 4f76763bffbfff083c3008f92d91337b77bb862d
    );
};

export default Studentdash;