import React,{useState} from "react";

import { Link,useNavigate } from 'react-router-dom';
import firebase from "../../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

const Takeattd = (props) => {
    let subjectstaken =[];
    let docid;
    const [otp,setotp] = useState("");
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
              docid=doc.id;
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

    const getOtp=async()=>{
        var string = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var select = document.getElementById("subject");
    var len = string.length,otp="";
    for (let i = 0; i < 6; i++ ) {
        otp += string[Math.floor(Math.random() * len)];
    }
    setotp(otp);
    console.log(otp);
        firebase.firestore().collection('OTPdb').add({
            tid:props.id,
            SubjName:select.value,
            Time: Date().toLocaleString(),
            OTP:otp
        });
        document.getElementById("otpdisp").style.display="block";
        console.log(subjectstaken);
        
        subjectstaken.forEach((e)=>{
            if(e['subj']==select.value)
                e['class']+=1;
        });
        firebase.firestore().collection('TeacherAttd').doc(docid).update({
            
            Subjects:subjectstaken

        });
        const myTimeout = setTimeout(async function(){
            document.getElementById("otpdisp").style.display="none";
            const doc = await firebase.firestore().collection('OTPdb').where('OTP', '==', otp).get();
            doc.docs.forEach(element => {
            element.ref.delete();
            //console.log(`deleted: ${element.id}`);
            });
            navigate("/teacher/dashboard")
        }, 20000);
    }

    return (
<<<<<<< HEAD
        <div>
            <h2 className="heading">Take attendance</h2>

            <div style={{textAlign:"center"}}>
            <label for="subjects" className="heading">Choose the subject </label>
=======
        <div className="float-right mt-2 mr-2">
            <p>Take attendance</p>
            <label for="subjects">Choose the subject </label>
>>>>>>> 4f76763bffbfff083c3008f92d91337b77bb862d

            <select name="subject" id="subject" onClick={addHandler}>
            
            </select>
<<<<<<< HEAD
            </div>
            <div style={{margin:"auto"}}>
            <button  type="submit" onClick={getOtp} className="btn btn-success">
                GENERATE OTP
            </button></div>
            <div style={{display:"None" ,marginRight:"20px" , marginLeft:"650px" ,fontSize:"22px",fontWeight:"bold"}} id="otpdisp">
                <p>OTP : {otp}</p>
           
            </div>

=======
            <div onClick={getOtp}>
                GENERATE OTP
            </div>
            <div style={{display:'none'}} id="otpdisp">
                <p>OTP : {otp}</p>
            </div>
>>>>>>> 4f76763bffbfff083c3008f92d91337b77bb862d

        </div>
    );
};

export default Takeattd;