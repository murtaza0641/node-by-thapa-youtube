const express= require('express');
const app = express();



app.get("/students",(req,res)=>{
    res.send("hello world")
})
app.use("/",(req,res)=>{
    res.send("hello this is home page")
})
app.listen( 3000,()=>{
    console.log("listeening 3000")
})