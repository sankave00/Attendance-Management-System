import React from "react";
import Signout from './signout';
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
<<<<<<< HEAD
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
=======
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
            <Link to="/admin/newteachersubj">
                <Button variant="outline-primary">Add Subject to Teacher</Button>
            </Link>
            <Link to="/admin/newstudentsem">
                <Button variant="outline-primary">Add Sem to Student</Button>
            </Link>
            <Signout />
        </div>
>>>>>>> 4f76763bffbfff083c3008f92d91337b77bb862d
    );
};

export default Admindash;