const fs=require('fs');
var path='./wwwroot';

var dirArr=[]

// fs.readdir('./wwwroot',(err,data)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     //console.log(data);
//     for(var i=0;i<data.length;i++){
//         fs.stat(path+'/'+data[i],(err,stats)=>{
//             if(stats.isDirectory()){
//                 dirArr.push(data[i]);
//             }
//         })
//     }
//     console.log(dirArr);
// })
// console.log(dirArr);

// for(var i=0;i<3;i++){
//     setTimeout(function(){
//         console.log(i);
//     },100)
// }

fs.readdir('./wwwroot',(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    (function getDir(i){
        if(i==data.length){
            console.log(dirArr);
            return;
        }
        fs.stat(path+'/'+data[i],(error,stats)=>{
            if(stats.isDirectory()){
                dirArr.push(data[i]);
            }
            getDir(i+1)
        })
    })(0)
})
