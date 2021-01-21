const http = require('http');
const routes= require('./module/routes');
const url=require('url');
const path=require('path')
// const ejs=require('ejs');
// const app = require('./module/routes');
// const { type } = require('os');

//common.getFileMime('.html');

http.createServer(function (req,res){
    routes.static(req,res,'static');


    var pathname=url.parse(req.url).pathname.replace("/","");
    var destination;
    //console.log(path.extname(pathname));
    //console.log(type(pathname));
    //console.log(pathname.toString());
    if(pathname.indexOf('/')==-1&&pathname!=''&&pathname!="favicon.ico"&&pathname.indexOf('.')==-1){
        destination=pathname;
        try{
            // app.pathname(req,res);
            routes[destination](req,res);
        }catch(error){
            routes['error'](req,res);
            
        }
    
    }

    
 
}).listen(3000);

console.log('server running at http://127.0.0.1:3000');


