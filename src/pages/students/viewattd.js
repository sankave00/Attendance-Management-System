import React,{useState,useEffect} from "react";

import { Link,useNavigate } from 'react-router-dom';
import firebase from "../../firebase";

import { getFirestore } from "firebase/firestore";
import '../styles/tablestyle.css'

const Viewattd = (props) => {
    let subjectstaken =[],sem=[],docid=[];
    //const [totclass,settotclass]=useState(0);
    let totclass=0;
    useEffect(() => {
        sem=[];
        subjectstaken=[];
        getdetails();
      }, []);
      
    
    const db = getFirestore();
    let s ="";
    const navigate = useNavigate();
    async function getTot(sem1,subj1){
      totclass=0;
      const snapshot1 = await firebase.firestore().collection('TeacherAttd').get();
                    snapshot1.docs.forEach(await function(doc) {
                      var S = doc.data().Subjects;
                      S.forEach(function(d){
                        if(d['sem']==sem1 && d['subj']==subj1){
                            //settotclass(d['class']);
                            totclass=d['class'];
                            console.log(totclass);
                        }
                          
                      })
                    })
                    return totclass;
      }

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
                        var tr = document.createElement('tr');   
                        tr.className = "bg-info";
                            var th1 = document.createElement('th');
                            var th2 = document.createElement('th');
                            var th3 = document.createElement('th');
                            var h1 = document.createTextNode("Subject");
                            var h2 = document.createTextNode("Classes Attended");
                            var h3 = document.createTextNode("Attd. Percentage");
                            th1.appendChild(h1);
                            th2.appendChild(h2);
                            th3.appendChild(h3);
                            tr.appendChild(th1);
                            tr.appendChild(th2);
                            tr.appendChild(th3);
                            table.appendChild(tr);
                        for (var t = 0; t <6; t++){
                            var tr = document.createElement('tr');  
                            tr.className = "bg-light"; 
                            totclass=await getTot(sem[i],subjectstaken[(i*6)+t]['SubName']);
                            var td1 = document.createElement('td');
                            var td2 = document.createElement('td');
                            var td3 = document.createElement('td');
                            console.log(totclass);
                            if(totclass>0){
                              var perc=((subjectstaken[(i*6)+t]['SubAttd']/totclass)*100).toFixed(2);
                              var text3 = document.createTextNode(perc);

                            }else text3 = document.createTextNode("-");
                              
                            var text1 = document.createTextNode(subjectstaken[(i*6)+t]['SubName']);
                            var text2 = document.createTextNode(subjectstaken[(i*6)+t]['SubAttd']);
                            
                            td1.appendChild(text1);
                            td2.appendChild(text2);
                            td3.appendChild(text3);
                            tr.appendChild(td1);
                            tr.appendChild(td2);
                            tr.appendChild(td3);
                            table.appendChild(tr);

                            table.style.width="100%";
                            table.style.tableLayout="fixed";
                            tr.style.border="2px solid black";
                            td1.style.border="1px solid black";
                            td2.style.border="1px solid black";
                            td3.style.border="1px solid black";

                            td1.style.textAlign="center";
                            td2.style.textAlign="center";
                            td3.style.textAlign="center";
                            th1.style.border="1px solid black";
                            th2.style.border="1px solid black";
                            th3.style.border="1px solid black";

                            th1.style.textAlign="center";
                            th2.style.textAlign="center";
                            th3.style.textAlign="center";
                            th1.style.fontWeight="bold";
                            th2.style.fontWeight="bold";
                            th3.style.fontWeight="bold";
                        }
                        var para = document.createElement("p");
                        para.innerHTML = "SEM : " + div1.id;
                        para.style.textAlign="center";
                        para.style.fontFamily="Merriweather serif"
                        div1.append(para)
                        div1.appendChild(table);
                        document.getElementById("display").appendChild(div1);
                    }

      }
    return (
        <div>
            <h2 style={{textAlign:"center",margin:"50px"}}><strong>View attendance</strong></h2>
            <div id="display"></div>
        </div>
    );
};

export default Viewattd;