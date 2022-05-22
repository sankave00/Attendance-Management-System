import './styles/home.css'

import {Button} from 'react-bootstrap'


import { Link } from 'react-router-dom'

const Home=()=>{
    console.log("Home");
    return(
        <>
        <Link to="/student/login">
        <Button variant="outline-primary">Student Login</Button>
        </Link>
        <Link to="/teacher/login">
        <Button variant="outline-primary">Teacher Login</Button>
        </Link>
        <Link to="/admin/login">
        <Button variant="outline-primary">Admin Login</Button>
        </Link>
        
        
        </>
    )
}

export default Home