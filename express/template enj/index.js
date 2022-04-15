const express = require('express')
const path = require('path')
const app=express()

const staticPath=path.join(__dirname,'/public')
const custom_template_folder_path=path.join(__dirname,'/custom')
console.log(staticPath);

app.set("view engine","hbs")
app.set("views",custom_template_folder_path)  // to set views folder by custom
app.use(express.static(staticPath))

app.get('/',(req,res)=>{
    res.render("index",{
        myName:"ghulam murtaza"
    })
})
app.get('/',(req,res)=>{
    res.send("hello this is home page")
})

app.listen(8000,()=>{
    console.log("listening 8000")
})