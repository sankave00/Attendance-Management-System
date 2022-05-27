import React, { useEffect, useState,useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { useParams } from 'react-router-dom';
import firebase from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

import "./styles/login.css";
import { propTypes } from "react-bootstrap/esm/Image";
import Footer from './Footer'
import '../pages/styles/headingstyle.css'

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let type=-1;
  const { id } = useParams();
  const navigate = useNavigate();
  let name = id

  const db = getFirestore();
  const loginHandler = async (event) => {
    event.preventDefault();

    const auth = getAuth();
    try {
        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );
        const user = userCredential.user;
        let type1 = -1;
        console.log(String(id));
        let idnew;
        const snapshot = await firebase.firestore().collection('users').get()
      snapshot.docs.forEach((doc) => {
        console.log(doc.data());
          if (doc.data().email == email) {
              type1 = doc.data().type;
              idnew=doc.data().id;
          }
      });
        switch(String(id))
        {
          case "student":type=1;break;
          case "teacher":type=2;break;
          case "admin":type=3;break;
          default : type=-1;
        }
        console.log(type);
        console.log(type1);
        props.pass(type);
        props.e(email);
        props.i(idnew);
        if(type===type1)
          navigate("/"+id+"/dashboard");
        else 
        {
          alert("Wrong Credentials");
          navigate("/");
        }
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        alert(errorMessage);
    }
    
};
  return (
    <>
    <div>
      <h1 className="heading" style={{textAlign:"center"}}>{name.charAt(0).toUpperCase() + name.slice(1)} Login</h1>
    </div>
    
    <div className="login">
      <div className="login__container">
        <input
          type="text"
          className="login__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="login__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          className="login__btn"
          onClick={loginHandler}
        >
          Login
        </button>
        <Footer/>
        
      </div>
    </div>
    </>
  );
}
export default Login;