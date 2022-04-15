const express=require('express')
const path = require('path')
const app=express()

const staticPath=path.join(__dirname,'/public')
console.log(staticPath);

app.use(express.static(staticPath))

app.get('/',(req,res)=>{
    res.send("hello this is home page")
})

app.listen(8000,()=>{
    console.log("listening 8000")
})