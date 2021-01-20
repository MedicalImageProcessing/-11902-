const fs=require('fs');
var readStream=fs.createReadStream('../demo8');

var writeStream=fs.createWriteStream('./data/demo.zip');

readStream.pipe(writeStream);