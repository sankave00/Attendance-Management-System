import './styles/home.css'

import { Link } from 'react-router-dom'

import Footer from './Footer'
const Home=()=>{
    console.log("Home");
    return(
        <>
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
        </>
    )
}

export default Home