const fs = require('fs');
// fs.stat('./html',(err,data)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(`是文件:${data.isFile()}`);
//     console.log(`是目录:${data.isDirectory()}`);
// })

// fs.stat('./package.json',(err,data)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(`是文件:${data.isFile()}`);
//     console.log(`是目录:${data.isDirectory()}`);
// })

// fs.mkdir('./css',(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('创建成功');
// })

// fs.writeFile('./html/index.html','你好nodejs',(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('创建写入成功');
// })


// fs.writeFile('./html/index.html','hahaha',(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('创建写入成功');
// })

// fs.appendFile('./css/base.css','body{color:red}',(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('appendFile 成功')
// })


// fs.appendFile('./css/base.css','h3{color:red}\n',(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('appendFile 成功')
// })

// fs.readFile('./html/index.html',(err,data)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(data);
//     console.log(data.toString());
// })

// fs.readdir('./html',(err,data)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(data);
// })

// fs.rename('./css/aaa.css','./css/index.css',(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('重命名成功');
// })

// fs.rename('./css/index.css','./html/index.css',(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('移动文件成功');
// })

// fs.rmdir('./aaa',(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('删除目录成功');
// })

// fs.unlink('./aaa/index.html',(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('删除文件成功');
// })