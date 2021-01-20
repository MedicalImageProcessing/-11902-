// var mkdirp = require('mkdirp');

// mkdirp('./upload', function (err) {
//     if (err) {
//         console.error(err);
//     }
// });

// // mkdirp('./uploadDir');
//6983
const mkdirp = require('mkdirp')
 
//return value is a Promise resolving to the first directory created
mkdirp('./upload').then(made =>
  console.log(`made directories, starting with ${made}`))

//mkdirp("./upload");

// const mkdirp = require('mkdirp')
 
// // return value is a Promise resolving to the first directory created
// mkdirp('./upload/aaa/xxxx').then(made =>
//   console.log(`made directories, starting with ${made}`))