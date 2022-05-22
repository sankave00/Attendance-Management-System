import React from "react";
import Signout from './signout';
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Studentdash = () => {
    
        return (
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
    );
};

export default Studentdash;