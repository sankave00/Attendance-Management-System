import React, { useState ,useEffect} from "react"

import "./styles/register.css"
import {Form,FormGroup,Label,Input} from 'reactstrap'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Footer from './Footer'

const Register=({history})=>{
    return(
        <>

    <p style={{ color: "red" }} >Register page</p>
    <Footer/>
        </>
    )
}

export default Register