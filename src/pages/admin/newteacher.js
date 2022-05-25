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
    const [nosub, setnosub] = useState(0);
    //const [sub, setsub] = useState([]);
    let sub =[],mp={};
    /*const [currsub, setcurrsub] = useState("");
    const [sem,setsem]=useState();*/
    let currsub="",sem;
    const db = getFirestore();
    const navigate = useNavigate();


      const Addmore=async() => {
         setnosub(nosub+1);
        
          var input = document.createElement("input");
          input.type = "text";
          input.placeholder = "Subject" + nosub;
          input.className="login_textBox";
          input.id="Subject" + nosub;
          var input1 = document.createElement("input");
          input1.type = "number";
          input1.placeholder = "Subject" + nosub + "Sem";
          input1.className="login_textBox";
          input1.id="Subject" + nosub + "Sem";
          
          
          document.getElementById("formincr").appendChild(input);
          document.getElementById("formincr").appendChild(input1);
       
      }
    
    const SubmitHandler = async (event) => {
        event.preventDefault();
        const auth = getAuth();
        for(var i=0;i<nosub;i++)
        {
          console.log(document.getElementById("Subject" + i).value);
          console.log(document.getElementById("Subject" + i+"Sem").value);
          currsub=document.getElementById("Subject" + i).value;
          sem=document.getElementById("Subject" + i+"Sem").value;
          console.log(currsub);
          mp ={
            "class":0,
            "subj":currsub,
            "sem":sem
          }
          console.log(sem,currsub);
          sub.push(mp);
          console.log(sub);
        }
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
            <div className="login__container" >
              <div id="formincr" className="login__container">
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
              </div>
              <button
                className="login__btn"
                onClick={SubmitHandler}
              >
                Submit
              </button>
      
              
            </div>
            <button onClick={Addmore}>Add More Subjects</button>
          </div>
          
    );
};

export default Newteacher;