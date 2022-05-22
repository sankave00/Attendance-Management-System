import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import firebase from "../../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import "../styles/login.css";

const Newteacher = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [TID, setTID] = useState("");
    const [nosub, setnosub] = useState();
    const [sub, setsub] = useState([]);
    const [currsub, setcurrsub] = useState();

    const db = getFirestore();
    const navigate = useNavigate();
    var fieldsArray = [],subarr=[];
    useEffect(() => {
        for (var i = 0; i <= {nosub}; i++) {
            fieldsArray.push(
              <input
                      type="text"
                      className="login__textBox"
                      value={currsub}
                      onChange={(e) => setcurrsub(e.target.value)}
                      placeholder="Subject1"
                      onBlur={setsub(oldArray => [...oldArray, currsub])}
              />
            );}
       
      },[nosub]);
    
    
    const SubmitHandler = async (event) => {
        event.preventDefault();
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        firebase.firestore().collection('users').add({
            email: email,
            id: TID,
            type:2
        });
        firebase.firestore().collection('TeacherAttd').add({
            Tid: TID,
            noSubj:nosub,
            Subjects:sub

        });
        alert("Added Successfully");
        navigate("/admin/dashboard");
        })
        .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
        // ..
        });

    }
        return (
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
              <input
                type="text"
                className="login__textBox"
                value={TID}
                onChange={(e) => setTID(e.target.value)}
                placeholder="Teacher Id"
              />
              <input
                type="number"
                className="login__textBox"
                value={nosub}
                onChange={(e) => setnosub(e.target.value)}
                placeholder="No of Subjects"
              />
              {fieldsArray}
              
                  
              
              
              
              <button
                className="login__btn"
                onClick={SubmitHandler}
              >
                Submit
              </button>
      
              
            </div>
          </div>
    );
};

export default Newteacher;