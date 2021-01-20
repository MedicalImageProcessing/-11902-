const fs = require('fs');
const path = require('path');
const url = require('url');


let getFileMime = function (extname) {
    var data = fs.readFileSync('./data/mime.json');
    let mime = JSON.parse(data.toString());
    return mime[extname];
}


let app = {
    static: (req, res, staticPath) => {
        let pathname = url.parse(req.url).pathname;
        //console.log(pathname);
        pathname = pathname == '/' ? '/index.html' : pathname;
        let extname = path.extname(pathname);
        if (pathname != '/favicon.ico') {
            try {
                let data = fs.readFileSync('./' + staticPath + pathname);
                
                if (data) {
                    //console.log(type(data));
                    let mime = getFileMime(extname);
                    res.writeHead(200, { "Content-Type": '' + mime + ";'charset=utf-8'" });
                    res.end(data);
                }
            } catch (error) {

            }
            

        }
    },
    login: (req, res) => {
        res.end("Login");
    },
    news: (req, res) => {
        res.end("News");
    },
    doLogin: (req, res) => {
        res.end("DoLogin");
    },
    error: (req, res) => {
        res.end("error");
    }
}

// app.login('req','res')
// app['login']('req','res')

module.exports=app;