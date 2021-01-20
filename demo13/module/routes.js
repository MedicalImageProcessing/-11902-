const fs = require('fs');
const path = require('path');
const url = require('url');

let getFileMime = function (extname) {
    var data = fs.readFileSync('./data/mime.json');
    let mime = JSON.parse(data.toString());
    return mime[extname];
}

exports.static = function (req, res, staticPath) {
    let pathname = url.parse(req.url).pathname;
    pathname = pathname == '/' ? '/index.html' : pathname;
    let extname = path.extname(pathname);
    if (pathname != '/favicon.ico') {
        try {
            let data = fs.readFileSync('./' + staticPath + pathname);
            if (data) {
                let mime = getFileMime(extname);
                res.writeHead(200, { "Content-Type": '' + mime + ";'charset=utf-8'" });
                res.end(data);
            }
        } catch (error) {

        }

    }
}
