const fs = require('fs');
const path = require('path');
const url = require('url');
const ejs = require('ejs');


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
        ejs.renderFile("./views/form.ejs", {}, (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' });
            res.end(data)
        })
    },
    news: (req, res) => {
        res.end('news');
    },
    doLogin: (req, res) => {
        let postData = '';
        req.on('data', (chunk) => {
            postData += chunk;
        })
        req.on('end', () => {
            console.log(postData);
            res.end(postData);
        })
    },
    error: (req, res) => {
        res.end("error");
    }
}

// app.login('req','res')
// app['login']('req','res')

module.exports = app;