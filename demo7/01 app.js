const fs=require('fs');
var path='./upload';


fs.stat(path,(err,data)=>{
    if(err){
        mkdir(path);
        //return;
    }
    if(!data.isDirectory()){
        console.log('upload存在');
    
        fs.unlink(path,(err)=>{
            if(!err){
                mkdir(path);
            }
            else{
                console.log('请检查传入的数据是否正确');
            }
        })
    }
    
})

function mkdir(dir){
    fs.mkdir(dir,(err)=>{
        console.log(err);
        //return;
    });
}