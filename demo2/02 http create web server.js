const http = require('http');

http.createServer(function(req,res){
    console.log(req.url);

    //设置响应头
    //状态码 200 文件类型 html 字符集 utf-8

    res.writeHead(200,{'Content-type':"text/html;charset='utf-8'"});

    res.write('<head> <meta charset="utf-8"></head>');

    res.write('你好 nodejs');

    res.write('<h2>你好 nodejs</h2>')

    res.end();  //结束响应

}).listen(3000);