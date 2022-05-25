import React,{useState} from "react";

import { Link,useNavigate } from 'react-router-dom';
import firebase from "../../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

const Giveattd = (props) => {
    
    let subjectstaken =[];
    const [docid,setdocid]=useState("");
    const [otp,setotp] = useState("");
    let success =0;
    const db = getFirestore();
    let s ="";
    const navigate = useNavigate();
    const addHandler=async()=>{
        var select = document.getElementById("subject");
    try{
    const snapshot = await firebase.firestore().collection('StudentAttd').get();
      
        snapshot.docs.forEach(await function(doc) {
        //console.log(doc.data().Tid);
        console.log(props.id);
          if (doc.data().SID == props.id) {
                
                subjectstaken.push({SubName:doc.data().Sub1Name,SubAttd:doc.data().Sub1Attd});
                subjectstaken.push({SubName:doc.data().Sub2Name,SubAttd:doc.data().Sub2Attd});
                subjectstaken.push({SubName:doc.data().Sub3Name,SubAttd:doc.data().Sub3Attd});
                subjectstaken.push({SubName:doc.data().Sub4Name,SubAttd:doc.data().Sub4Attd});
                subjectstaken.push({SubName:doc.data().Sub5Name,SubAttd:doc.data().Sub5Attd});
                subjectstaken.push({SubName:doc.data().Sub6Name,SubAttd:doc.data().Sub6Attd});
              
              
              setdocid(doc.id);
              console.log(docid);
            }})
          console.log(subjectstaken);
          if(subjectstaken)
          {
          subjectstaken.forEach(function(d){
            var option = document.createElement("option");
            option.text = d['SubName'];
            option.value = d['SubName'];
            
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


    const giveOtp=async(event)=>{
        event.preventDefault();
        var select = document.getElementById("subject");
        let newSubjAttd=0,str="";
        console.log(otp);
        const snapshot= await firebase.firestore().collection('OTPdb').get();
        snapshot.docs.forEach((doc) => {
            //console.log(doc.data());
            if (doc.data().SubjName== select.value) {
                console.log(otp,doc.data().OTP);
                if(doc.data().OTP===otp){success=1;console.log(success);}
            }
            });
            const snapshot1 = await firebase.firestore().collection('StudentAttd').doc(docid).get();
        if(success==1)
        {
            
            console.log(snapshot1);
            console.log(select.value);
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
            else{
                newSubjAttd=snapshot1.data().Sub6Attd;str="6";
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
        }
        else alert("Attendance Not Given");
        navigate("/student/dashboard");

    }
    return (
        <div className="float-right mt-2 mr-2">
        <p>Give attendance</p>
        <label for="subjects">Choose the subject </label>

        <select name="subject" id="subject" onClick={addHandler} onChange={function(){
            document.getElementById("otpdisp").style.display="block";
        }}>
        
        </select>
        
        <div style={{display:'none'}} id="otpdisp">
            <input type="text" name="otp" id="stuotp" placeholder="Enter OTP" value={otp}
          onChange={(e) => setotp(e.target.value)}/>
            <button type="submit" onClick={giveOtp} >Give OTP</button>
        </div>

    </div>
    );
};

export default Giveattd;