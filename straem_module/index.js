const fs=require('fs')
const http=require('http')

const server=http.createServer()

server.on('request',(req,res)=>{

        //---------case 1  --------------//

    // fs.readFile("demo.txt",(err,data)=>{
        //     if(err) throw err;
        //     res.end(data.toString())
        // })

        //*----------   case 2  streaming --------------*//

        // const stream=fs.createReadStream("finished.mp4")
        // stream.on("data",(chunkData)=>{
        //      res.write(chunkData);
        // });
        // stream.on("end",()=>{
        //     res.end();
        // });
        // stream.on("error",(err)=>{
        //     console.log(err);
        //     res.end("file not found")
        // })


        //  ** -------------- case 3 stream pip ---------** //

        const mystream=fs.createReadStream("finished.mp4")
        mystream.pipe(res);



})
server.listen(8000,()=>{
    console.log("listening 8000")
})