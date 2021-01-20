const http = require('http');
const routes= require('./module/routes')
const url=require('url')

//common.getFileMime('.html');

http.createServer(function (req,res){
    
    routes.static(req,res,'static');

    let pathname=url.parse(req.url).pathname;

    if(pathname=='/login'){
        res.writeHead(200,{'Content-Type':'text/html;charset="utf-8"'});
        res.end("login");
    }
    else if(pathname=='/register'){
        res.writeHead(200,{'Content-Type':'text/html;charset="utf-8"'});
        res.end("register");
    }
    else if(pathname=='/admin'){
        res.writeHead(200,{'Content-Type':'text/html;charset="utf-8"'});
        res.end("process");
    }
    /*else{
        res.writeHead(404,{'Content-Type':'text/html;charset="utf-8"'});
        res.end("This Page doesn't Exit");
    }*/
   
}).listen(3000);

console.log('server running at http://127.0.0.1:3000');