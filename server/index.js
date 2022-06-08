const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors())
app.listen(8000,() => {
    console.log("Listening in port 3001");
})
app.get('/',(req,res)=>{
    res.json({web: "Check",doneBy: "Moniesh Ravichandran"});
    res.status(200);
})