import './styles/home.css'

import {Button} from 'react-bootstrap'

<<<<<<< HEAD
import { Link } from 'react-router-dom'

import Footer from './Footer'
=======

import { Link } from 'react-router-dom'

>>>>>>> 4f76763bffbfff083c3008f92d91337b77bb862d
const Home=()=>{
    console.log("Home");
    return(
        <>
<<<<<<< HEAD
        <header style={{textAlign:"center"}}>
            <h2>Attendance Management System</h2>
        </header>
        <div id='homepage'>
        <Link to="/student/login">
        <button style={{border:"2px solid green" , marginRight:"20px"}}>
            <div>
                <img src={require("./icons/graduated.png")} alt="No image" height="200px" width="200px"/><br/>
                <span>Student</span>
            </div>
        </button>
        </Link>
        <Link to="/teacher/login">
        
        <button style={{border:"2px solid green"}}>
                <div>
                    <img src={require("./icons/presentation.png")} alt="No image" height="200px" width="200px"/><br/>
                    <span>Teacher</span>
                </div>
            </button>
        </Link>
        <Link to="/admin/login">
        
        <button style={{border:"2px solid green" , marginLeft:"20px"}}>
                <div>
                    <img src={require("./icons/administrator.png")} alt="No image" height="200px" width="200px"/><br/>
                    <span>Admin</span>
                </div>
            </button> 
        </Link>
        <Footer/>
        </div>
=======
        <Link to="/student/login">
        <Button variant="outline-primary">Student Login</Button>
        </Link>
        <Link to="/teacher/login">
        <Button variant="outline-primary">Teacher Login</Button>
        </Link>
        <Link to="/admin/login">
        <Button variant="outline-primary">Admin Login</Button>
        </Link>
        
        
>>>>>>> 4f76763bffbfff083c3008f92d91337b77bb862d
        </>
    )
}

export default Home