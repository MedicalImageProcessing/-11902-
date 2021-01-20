// if(true){
//     var a=123;
// }
// console.log(a);

// var name='张三';
// var age=20;
// console.log(`${name}的年龄是${age}`);

// var name='zhangsan';
// var app={
//     name
// }
// console.log(app.name);

// var name='zhangsan';
// var app={
//     name,
//     run:function(){
//         console.log(`${this.name}在跑步`);
//     }
// }

// app.run();

// setTimeout(()=>{
//     console.log('执行');
// },1000)

function getData(callback){
    setTimeout(function(){
        var name='张三';
        callback(name)
    },1000);
    
}

// var callback=function(aaa){
//     console.log(aaa);
// }

// callback(name)

// getData(function(aaa){
//     console.log(aaa);
// })

var p=new Promise(function(resolve,reject){
    setTimeout(function(){
        var name='张三 11';
        resolve(name);
    },1000);
})

p.then(function(data){
    console.log(data);
})