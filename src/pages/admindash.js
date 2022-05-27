import React from "react";
import Signout from './signout';
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import './styles/headingstyle.css'

const Admindash = () => {
    return (
            <>
        <div className="float-right mt-1 mr-1">
            <Signout />
        </div>

        <div>    
            <h2 className="heading"> Admin Dashboard</h2>
            <div style={{margin:"auto"}}>
            <Link to="/admin/newstudent">
                <Button variant="btn btn-primary">New Student User</Button>
            </Link>
            <Link to="/admin/newteacher">
                <Button variant="btn btn-primary">New Teacher User</Button>
            </Link>
            <Link to="/admin/newteachersubj">
                <Button variant="btn btn-primary">Add subject to Teacher</Button>
            </Link>
            <Link to="/admin/newstudentsem">
                <Button variant="btn btn-primary">Add sem to Student</Button>
            </Link>
            </div>
            <Footer/>
        </div>
        </>
    );
};

export default Admindash;