const fs=require('fs')
const bioData={
    name:"ghulam murtaza",
    from:"hafizabad",
    contact:12345
}


// const jsonData=JSON.stringify(bioData)
// fs.writeFile('json.json',jsonData,(err)=>{
//     console.log("done")
// })

fs.readFile("json.json",'utf-8',(err,data)=>{
    const orgData=JSON.parse(data)
    console.log(orgData)
    console.log(data)
})