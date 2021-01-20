const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');

exports.getMime = function (extname) {
    switch (extname) {
        case '.html':
            return 'text/html';
        case '.css':
            return 'text/css';
        case '.js':
            return 'text/javascript';
        default:
            return 'text/html';
    }
}

// exports.getFileMime = function (extname) {
//     return new Promise((resolve, reject) => {
//         fs.readFile('./data/mime.json', (err, data) => {
//             if (err) {
//                 console.log(err);
//                 return;
//             }
//             let mime = JSON.parse(data.toString());
//             console.log(mime[extname]);

//             resolve(mime[extname]);
//         })
//     })
// }

exports.getFileMime = function (extname) {
    var data = fs.readFileSync('./data/mime.json');
    let mime = JSON.parse(data.toString());

    return mime[extname];
}