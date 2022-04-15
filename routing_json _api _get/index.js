const http =require('http')
const fs=require('fs')

// case 2
const synData=fs.readFileSync('./json.json','utf-8')
const synNewData=JSON.parse(synData)

const server= http.createServer((req,res)=>{
    if(req.url=='/userapi'){

        // case 1
        fs.readFile('./json.json','utf-8',(err,data)=>{
            let newdata=JSON.parse(data)
            console.log(newdata)
            res.end(newdata.name)
        })
    }
    else if(req.url=='/about'){
        res.end("hello this is about")
    }else if(req.url=='/contact'){
        // case 2
        res.end(`hello this is contact:${synNewData.contact}`)
    }
    else if(req.url=='/'){
        res.end("hello this is home page")
    }
    else{
        res.writeHead(404)
        res.end("page not found 404 error")
    }
})
server.listen(8000, ()=>{
    console.log("listening post 8000")
})