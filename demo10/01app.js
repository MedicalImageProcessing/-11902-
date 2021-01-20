const http = require('http');
const fs=require('fs');
http.createServer(function (req,res){
    console.log(req.url)

    let pathname=req.url;
    pathname=pathname=='/'?'/index.html':pathname;
    if(pathname!='/favicon.ico'){
        fs.readFile('./static'+pathname,(err,data)=>{
            if(err){
                res.writeHead(404,{'Content-Type':'text/html;charset="utf-8"'});
                res.end('This Page doesn\'t Exit');
                
            }
            res.writeHead(200,{'Content-Type':'text/html;charset="utf-8"'});
            res.end(data);
        })
    }

   
}).listen(3000);

console.log('server running at http://127.0.0.1:3000');