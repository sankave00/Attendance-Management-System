import React,{useState} from "react";

import { Link,useNavigate } from 'react-router-dom';
import firebase from "../../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
<<<<<<< HEAD
import '../styles/headingstyle.css'

=======
>>>>>>> 4f76763bffbfff083c3008f92d91337b77bb862d

const Modifyattd = (props) => {
    
    let subjectstaken =[];
    //const [docid,setdocid]=useState("");
    let docid;
   const [id,setid]=useState("");
    const db = getFirestore();
    
    const navigate = useNavigate();
    const addHandler=async()=>{
        var select = document.getElementById("subject");
    try{
    const snapshot = await firebase.firestore().collection('TeacherAttd').get();
      
        snapshot.docs.forEach(await function(doc) {
        console.log(doc.data().Tid);
        console.log(props.id);
          if (doc.data().Tid == props.id) {
              subjectstaken=doc.data().Subjects;
              //setdocid(doc.id);
          }});
          console.log(subjectstaken);
          if(subjectstaken)
          {
          subjectstaken.forEach(function(d){
            var option = document.createElement("option");
            option.text = d['subj'];
            option.value = d['subj'];
            
            select.appendChild(option);
        
         })
        }
    }
    catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            alert(errorMessage);}
    }
    const giveAttd=async(event)=>{
        event.preventDefault();
        var select = document.getElementById("subject");

        let newSubjAttd=0,str="";
        
        const snapshot= await firebase.firestore().collection('StudentAttd').get();
        snapshot.docs.forEach(await function(doc) {
            console.log(id);
            if (doc.data().SID==id) {
                docid=doc.id;console.log(docid);
            }
            });
            console.log(select.value);
            console.log(docid);
            const snapshot1 = await firebase.firestore().collection('StudentAttd').doc(docid).get();
            console.log(snapshot1.data().Sub1Name)
            if(snapshot1.data().Sub1Name==select.value){
                newSubjAttd=snapshot1.data().Sub1Attd;str="1";
            }
            else if(snapshot1.data().Sub2Name==select.value){
                newSubjAttd=snapshot1.data().Sub2Attd;str="2";
            }
            else if(snapshot1.data().Sub3Name==select.value){
                newSubjAttd=snapshot1.data().Sub3Attd;str="3";
            }
            else if(snapshot1.data().Sub4Name==select.value){
                newSubjAttd=snapshot1.data().Sub4Attd;str="4";
            }
            else if(snapshot1.data().Sub5Name==select.value){
                newSubjAttd=snapshot1.data().Sub5Attd;str="5";
            }
            else if(snapshot1.data().Sub6Name==select.value){
                newSubjAttd=snapshot1.data().Sub6Attd;str="6";
            }
            else{
                alert("Record Not Found");
                navigate("/teacher/dashboard")
            }
            console.log(str);
            switch(str)
            {
                case "1": firebase.firestore().collection('StudentAttd').doc(docid).update({
                    Sub1Attd:newSubjAttd+1
                });break;
                case "2": firebase.firestore().collection('StudentAttd').doc(docid).update({
                    Sub2Attd:newSubjAttd+1
                });break;
                case "3": firebase.firestore().collection('StudentAttd').doc(docid).update({
                    Sub3Attd:newSubjAttd+1
                });break;
                case "4": firebase.firestore().collection('StudentAttd').doc(docid).update({
                    Sub4Attd:newSubjAttd+1
                });break;
                case "5": firebase.firestore().collection('StudentAttd').doc(docid).update({
                    Sub5Attd:newSubjAttd+1
                });break;
                default :firebase.firestore().collection('StudentAttd').doc(docid).update({
                    Sub6Attd:newSubjAttd+1
                });break;
            }
            
            alert("Attendance Given Successfully");
        
        navigate("/teacher/dashboard");

    }
    return (
<<<<<<< HEAD
        <div>
            <h2 className="heading">Modify attendance</h2>
            <div style={{textAlign:"center"}}>
            <label for="subjects" className="heading">Choose the subject </label>
=======
        <div className="float-right mt-2 mr-2">
            <p>Modify attendance</p>
            <label for="subjects">Choose the subject </label>
>>>>>>> 4f76763bffbfff083c3008f92d91337b77bb862d

            <select name="subject" id="subject" onClick={addHandler}>
            
            </select>
<<<<<<< HEAD
            </div>
            <div style={{ margin:"auto"}}>
            <div id="stu">
            <input type="text" name="sid" id="stuid" placeholder="Enter Student ID" style={{marginRight:"20px" , marginLeft:"650px" }} value={id}
          onChange={(e) => setid(e.target.value)}/>
            <button type="submit" className="btn btn-success" onClick={giveAttd} >Give Attendance</button>
            </div>
=======
            <div id="stu">
            <input type="text" name="sid" id="stuid" placeholder="Enter Student ID" value={id}
          onChange={(e) => setid(e.target.value)}/>
            <button type="submit" onClick={giveAttd} >Give Attendance</button>
>>>>>>> 4f76763bffbfff083c3008f92d91337b77bb862d
        </div>
        </div>
    );
};

export default Modifyattd;