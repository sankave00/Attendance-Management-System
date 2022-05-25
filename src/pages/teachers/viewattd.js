import React,{useState,useEffect} from "react";

import { Link,useNavigate } from 'react-router-dom';
import firebase from "../../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";


const Viewattd = (props) => {
    let subjectstaken =[],sem=[],docid=[];
    let sid,attd;
    //const [totclass,settotclass]=useState(0);
    let totclass=0;
    useEffect(() => {
        sem=[];
        subjectstaken=[];
        getdetails();
      }, []);
    
      const getdetails = async(event)=>{
        console.log(sem);
                const snapshot = await firebase.firestore().collection('TeacherAttd').get();
                console.log(sem);
                snapshot.docs.forEach(await function(doc) {
                //console.log(doc.data().Tid);
                //console.log(doc.data().SID);
                  if (doc.data().Tid === props.id) {
                        subjectstaken = doc.data().Subjects;

                      docid.push(doc.id);
                      //console.log(docid);
                    }})   
                    var i=0;   
                    for(;i<subjectstaken.length;i++)
                    {
                        let sem1=subjectstaken[i].sem,sub1=subjectstaken[i].subj;
                        let chkflag=0;
                        const snapshot1 = await firebase.firestore().collection('StudentAttd').get();
                        const div1 = document.createElement("div");
                        div1.id=subjectstaken[i].sem+subjectstaken[i].subj;
                        var table = document.createElement('table');
                        var tr = document.createElement('tr');   
                            
                            var th1 = document.createElement('th');
                            var th2 = document.createElement('th');
                            var th3 = document.createElement('th');
                            var h1 = document.createTextNode("Student");
                            var h2 = document.createTextNode("Classes Attended");
                            var h3 = document.createTextNode("Attd. Percentage");
                            th1.appendChild(h1);
                            th2.appendChild(h2);
                            th3.appendChild(h3);
                            tr.appendChild(h1);
                            tr.appendChild(h2);
                            tr.appendChild(h3);
                            table.appendChild(tr);
                        snapshot.docs.forEach(await function(doc) {
                              if (doc.data().Sem == sem1 ) 
                              {
                                    
                                if(doc.data().Sub1Name== sub1){
                                  //docid.push(doc.id);
                                 sid=doc.data().SID;
                                 attd=doc.data().Sub1Attd; }
                                 else if(doc.data().Sub2Name== sub1){
                                    //docid.push(doc.id);
                                   sid=doc.data().SID;
                                   attd=doc.data().Sub2Attd; }
                                else if(doc.data().Sub3Name== sub1){
                                    //docid.push(doc.id);
                                   sid=doc.data().SID;
                                   attd=doc.data().Sub3Attd; }
                                else if(doc.data().Sub4Name== sub1){
                                    //docid.push(doc.id);
                                   sid=doc.data().SID;
                                   attd=doc.data().Sub4Attd; }
                                else if(doc.data().Sub5Name== sub1){
                                    //docid.push(doc.id);
                                   sid=doc.data().SID;
                                   attd=doc.data().Sub5Attd; }
                                else if(doc.data().Sub6Name== sub1){
                                    //docid.push(doc.id);
                                   sid=doc.data().SID;
                                   attd=doc.data().Sub6Attd; }
                                else chkflag=1;
                              
                                }
                                else chkflag=1;
                                if(chkflag==0){
                                    var tr = document.createElement('tr');   
                                    totclass=subjectstaken[i].class;
                                    var td1 = document.createElement('td');
                                    var td2 = document.createElement('td');
                                    var td3 = document.createElement('td');
                                    console.log(totclass);
                                    if(totclass>0){
                                        var perc=((attd/totclass)*100).toFixed(2);
                                        var text3 = document.createTextNode(perc);

                                    }else text3 = document.createTextNode("-");
                              
                            var text1 = document.createTextNode(sid);
                            var text2 = document.createTextNode(attd);
                            
                            td1.appendChild(text1);
                            td2.appendChild(text2);
                            td3.appendChild(text3);
                            tr.appendChild(td1);
                            tr.appendChild(td2);
                            tr.appendChild(td3);
                            table.appendChild(tr);
                                
                    }   }) 
                        

                       
                        var para = document.createElement("p");
                        para.innerHTML = "Sem : "+subjectstaken[i].sem+" Subject : "+subjectstaken[i].subj +" No.of Classes : "+subjectstaken[i].class;
                        div1.append(para)
                        div1.appendChild(table);
                        document.getElementById("display").appendChild(div1);
                    }

      }
    return (
        <div className="float-right mt-2 mr-2">
            <p>View attendance</p>
            <div id="display"></div>
        </div>
    );
};


export default Viewattd;