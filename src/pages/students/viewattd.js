import React,{useState,useEffect} from "react";

import { Link,useNavigate } from 'react-router-dom';
import firebase from "../../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

const Viewattd = (props) => {
    let subjectstaken =[],sem=[],docid=[];
    useEffect(() => {
        sem=[];
        subjectstaken=[];
        getdetails();
      }, []);
      
    
    const db = getFirestore();
    let s ="";
    const navigate = useNavigate();
      const getdetails = async(event)=>{
        console.log(sem);
                const snapshot = await firebase.firestore().collection('StudentAttd').get();
                console.log(sem);
                snapshot.docs.forEach(await function(doc) {
                //console.log(doc.data().Tid);
                console.log(doc.data().SID);
                  if (doc.data().SID === props.id) {
                        
                        sem.push(doc.data().Sem);
                        subjectstaken.push({SubName:doc.data().Sub1Name,SubAttd:doc.data().Sub1Attd});
                        subjectstaken.push({SubName:doc.data().Sub2Name,SubAttd:doc.data().Sub2Attd});
                        subjectstaken.push({SubName:doc.data().Sub3Name,SubAttd:doc.data().Sub3Attd});
                        subjectstaken.push({SubName:doc.data().Sub4Name,SubAttd:doc.data().Sub4Attd});
                        subjectstaken.push({SubName:doc.data().Sub5Name,SubAttd:doc.data().Sub5Attd});
                        subjectstaken.push({SubName:doc.data().Sub6Name,SubAttd:doc.data().Sub6Attd});

                      docid.push(doc.id);
                      console.log(docid);
                    }})
                    console.log(sem);
                    for(var i=0;i<sem.length;i++)
                    {
                        const div1 = document.createElement("div");
                        div1.id=sem[i];
                        var table = document.createElement('table');
                        for (var t = 0; t <6; t++){
                            var tr = document.createElement('tr');   

                            var td1 = document.createElement('td');
                            var td2 = document.createElement('td');

                            var text1 = document.createTextNode(subjectstaken[(i*6)+t]['SubName']);
                            var text2 = document.createTextNode(subjectstaken[(i*6)+t]['SubAttd']);

                            td1.appendChild(text1);
                            td2.appendChild(text2);
                            tr.appendChild(td1);
                            tr.appendChild(td2);

                            table.appendChild(tr);
                        }
                        var para = document.createElement("p");
                        para.innerHTML = "SEM : " + div1.id;
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