import React from "react";
import Signout from './signout';
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Teacherdash = () => {
    
        return (
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
    );
};

export default Teacherdash;