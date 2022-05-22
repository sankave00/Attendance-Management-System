import React from "react";
import Signout from './signout';
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Admindash = () => {
    
        return (
        <div className="float-right mt-2 mr-2">
            <p> Admin dashoard</p>
            <Link to="/admin/newstudent">
                <Button variant="outline-primary">New Student User</Button>
            </Link>
            <Link to="/admin/newteacher">
                <Button variant="outline-primary">New Teacher User</Button>
            </Link>
            <Link to="/admin/newsubj">
                <Button variant="outline-primary">Add subject</Button>
            </Link>
            <Signout />
        </div>
    );
};

export default Admindash;