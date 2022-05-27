import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import firebase from "../../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "../styles/login.css";
import '../styles/headingstyle.css'
const Newstudent = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [SID, setSID] = useState("");
    const [sem, setSem] = useState();
    const [sub1, setsub1] = useState("");
    const [sub2, setsub2] = useState("");
    const [sub3, setsub3] = useState("");
    const [sub4, setsub4] = useState("");
    const [sub5, setsub5] = useState("");
    const [sub6, setsub6] = useState("");
    const db = getFirestore();
    const navigate = useNavigate();
    const SubmitHandler = async (event) => {
        event.preventDefault();
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        firebase.firestore().collection('users').add({
            email: email,
            id: SID,
            type:1
        });
        firebase.firestore().collection('StudentAttd').add({
            SID: SID,
            Sem:sem,
            Sub1Attd:0,
            Sub1Name:sub1,
            Sub2Attd:0,
            Sub2Name:sub2,
            Sub3Attd:0,
            Sub3Name:sub3,
            Sub4Attd:0,
            Sub4Name:sub4,
            Sub5Attd:0,
            Sub5Name:sub5,
            Sub6Attd:0,
            Sub6Name:sub6

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
          <>
            <h2 className="heading">Add new Student</h2>
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
                value={SID}
                onChange={(e) => setSID(e.target.value)}
                placeholder="Student Registration No"
              />
              <input
                type="number"
                className="login__textBox"
                value={sem}
                onChange={(e) => setSem(e.target.value)}
                placeholder="Semester No"
              />
              <input
                type="text"
                className="login__textBox"
                value={sub1}
                onChange={(e) => setsub1(e.target.value)}
                placeholder="Subject1"
              />
              <input
                type="text"
                className="login__textBox"
                value={sub2}
                onChange={(e) => setsub2(e.target.value)}
                placeholder="Subject2"
              />
              <input
                type="text"
                className="login__textBox"
                value={sub3}
                onChange={(e) => setsub3(e.target.value)}
                placeholder="Subject3"
              />
              <input
                type="text"
                className="login__textBox"
                value={sub4}
                onChange={(e) => setsub4(e.target.value)}
                placeholder="Subject4"
              />
              <input
                type="text"
                className="login__textBox"
                value={sub5}
                onChange={(e) => setsub5(e.target.value)}
                placeholder="Subject5"
              />
              <input
                type="text"
                className="login__textBox"
                value={sub6}
                onChange={(e) => setsub6(e.target.value)}
                placeholder="Subject6"
              />
              <button
                className="login__btn"
                onClick={SubmitHandler}
              >
                Submit
              </button>
      
              
            </div>
          </div>
          </>
    );
};

export default Newstudent;