// function test(){
//     return '你好，nodejs';
// }

// console.log(test());

//  async function test(){
//     return '你好，nodejs';
// }

// console.log(await test());

// async function test(){
//     return '你好，nodejs';
// }

// async function mian(){
//     var data=await test();
//     console.log(data);
// }

// mian();


async function test(){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            var name='张三 222';
            resolve(name);
        },1000);
    })
}

async function mian(){
    var data=await test();
    console.log(data);
}

mian();