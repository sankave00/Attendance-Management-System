import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import firebase from "../../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import "../styles/login.css";
<<<<<<< HEAD
import '../styles/headingstyle.css'
=======

>>>>>>> 4f76763bffbfff083c3008f92d91337b77bb862d
const Newstu = () => {

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
    var success=0;
    //const [success, setsuccess] = useState(0);
    const SubmitHandler = async (event) => {
        event.preventDefault();
        const usersRef = collection(db, "StudentAttd");
        const q = query(usersRef, where("SID", "==", SID));
        const querySnapshot = await getDocs(q);
        
        console.log(querySnapshot);
        if(querySnapshot){
        querySnapshot.forEach((doc) => {
          //console.log(doc.data().email);
            if (doc.data().SID == SID && doc.data().Sem == sem) {
                success=1;
            }
        });}
        if(success==0)
        {
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
            
        }
        else
        {
            alert("\nData Already found");
            navigate("/admin/dashboard");
        }
    }
        
        

    
        return (
<<<<<<< HEAD
            <>
            <h2 className="heading">Add new Semester : Student</h2>
=======
>>>>>>> 4f76763bffbfff083c3008f92d91337b77bb862d
            <div className="login">
            <div className="login__container">
              
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
<<<<<<< HEAD
          </>
=======
>>>>>>> 4f76763bffbfff083c3008f92d91337b77bb862d
    );
};

export default Newstu;