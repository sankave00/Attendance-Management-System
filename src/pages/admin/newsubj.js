import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import firebase from "../../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import "../styles/login.css";

const Newsubj = () => {

    const [TID, setTID] = useState("");

    const [sub, setsub] = useState("");
    const [sem, setsem] = useState();
//db.collection("users").doc(doc.id).update({foo: "bar"});
    const db = getFirestore();
    const navigate = useNavigate();
    let docid,noofsub,subjects=[];

    const SubmitHandler = async (event) => {
        event.preventDefault();
        const usersRef = collection(db, "TeacherAttd");
        const q = query(usersRef, where("Tid", "==", TID));
        const querySnapshot = await getDocs(q);
        
        console.log(querySnapshot);
        if(querySnapshot){
        querySnapshot.forEach((doc) => {
          //console.log(doc.data().email);
            if (doc.data().Tid === TID) {
                docid = doc.id;
                noofsub=doc.data().noSubj;
                subjects=doc.data().Subjects;
            }
        });
        let newsubjobj = {
            "subj":sub,
            "class":0,
            "sem":sem
        };
        subjects.push(newsubjobj);
        firebase.firestore().collection('TeacherAttd').doc(docid).update({
            Tid: TID,
            noSubj:noofsub+1,
            Subjects:subjects

        });
        alert("Updated Successfully");
        navigate("/admin/dashboard");}
        else
        {
            alert("\nTeacher not found");navigate("/admin/dashboard");
        }
        
        

    }
        return (
            <div className="login">
            <div className="login__container">
              
              <input
                type="text"
                className="login__textBox"
                value={TID}
                onChange={(e) => setTID(e.target.value)}
                placeholder="Teacher ID"
              />
              <input
                type="text"
                className="login__textBox"
                value={sub}
                onChange={(e) => setsub(e.target.value)}
                placeholder="Subject"
              />
              <input
                type="number"
                className="login__textBox"
                value={sem}
                onChange={(e) => setsem(e.target.value)}
                placeholder="Subject Sem"
              />
              
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

export default Newsubj;