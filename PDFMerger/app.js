const express=require('express');
const app=express();
const path=require('path');
const multer = require('multer');
const upload = multer({
    dest: 'uploads/'
});

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"templates/index.html"));
})
app.post("/merge",upload.array('pdf',2),(req,res,next)=>{
  console.log(req.files);
  res.send({data:req.files})
})

app.listen(3000,()=>{
    console.log("Server is running");
})