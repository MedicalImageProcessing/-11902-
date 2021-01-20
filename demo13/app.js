const http = require('http');
const routes= require('./module/routes');
const url=require('url');
const ejs=require('ejs');

//common.getFileMime('.html');

http.createServer(function (req,res){
    
    routes.static(req,res,'static');

    let pathname=url.parse(req.url).pathname;
    console.log(req.method);
    if(pathname=='/news'){
        // res.writeHead(200,{'Content-Type':'text/html;charset="utf-8"'});
        // res.end("login");
    //     let msg='数据库里面获取的数据';
    //     let list=[
    //         {
    //         title:'news111'
    //         },
    //         {
    //             title:'news111'
    //         },
    //         {
    //             title:'news222'
    //         },
    //         {
    //             title:'news333'
    //         },

    //     ]
    //     ejs.renderFile('./views/login.ejs',{
    //         msg:msg,
    //         list:list
    //     },(err,data)=>{
    //         res.end(data);
    //         res.writeHead(200,{'Content-Type':'text/html;charset="utf-8"'});
    //     })
        var query=url.parse(req.url,true).query;
        console.log(query);
        res.writeHead(200,{'Content-Type':'text/html;charset="utf-8"'});
        res.end('get value successfully');
    }
    else if(pathname=='/login'){
        // res.writeHead(200,{'Content-Type':'text/html;charset="utf-8"'});
        // res.end("log in");
        ejs.renderFile("./views/form.ejs",{},(err,data)=>{
            res.writeHead(200,{'Content-Type':'text/html;charset="utf-8"'});
            res.end(data)  
        })
        
    }
    else if(pathname=='/doLogin'){
        // res.writeHead(200,{'Content-Type':'text/html;charset="utf-8"'});
        // res.end("post successfully");
        let postData='';
        req.on('data',(chunk)=>{
            postData+=chunk;
        })
        req.on('end',()=>{
            console.log(postData);
            res.end(postData);
        })
    }
    /*else{
        res.writeHead(404,{'Content-Type':'text/html;charset="utf-8"'});
        res.end("This Page doesn't Exit");
    }*/
   
}).listen(3000);

console.log('server running at http://127.0.0.1:3000');