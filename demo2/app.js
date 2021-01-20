const http = require('http');
const url = require('url');

http.createServer(function(req,res){
    console.log(req.url);

    //设置响应头
    //状态码 200 文件类型 html 字符集 utf-8

    res.writeHead(200,{'Content-type':"text/html;charset='utf-8'"});

    res.write('<head> <meta charset="utf-8"></head>');

    console.log(req.url);
    if(req.url!='/favicon.ico'){
        var userinfo = url.parse(req.url,true).query;
        console.log(`姓名:${userinfo.name}--年龄：${userinfo.age}`);
    }

    

    res.end('你好 nodejs 111 222');  //结束响应

}).listen(3000);