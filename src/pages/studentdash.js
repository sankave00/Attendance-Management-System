import React from "react";
import Signout from './signout';
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import './styles/headingstyle.css'

const Studentdash = () => {
    
        return (
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
    );
};

export default Studentdash;