// let promise=new Promise(function(resolve,reject){
//     //alert("hello");
//     resolve("Promise resolved");
// });
// console.log("hwllo");
// setTimeout(function(){
//     console.log("Hello world");
// },2000);
// console.log("my name is khan");
// let p=new Promise(function(resolve,reject){
//     console.log("Hello");
//     setTimeout(()=>{
//         console.log("Hello world");
//        reject(new Error("Error: Something went wrong"));
//     },5000);
// });
// p.catch(function(error){
//     console.log(error);  
// });
// let p1=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("resolved after 2 seconds");
//         resolve("Promise resolved");
//     },2000);
// })
// p1.then((value)=>{
//     console.log(value);
//     let p2=new Promise((resolve,reject)=>{
//         setTimeout(function(){
//             resolve("Promise 2 resolved after 3 seconds");
//         },3000);
//     });
//     return p2;

// }).then((value)=>{
//     console.log(value);
// })


// const loadscript=(src)=>{
//     return new Promise((resolve,reject)=>{
//     let script=document.createElement("script");
//     script.type="text/javascript";
//     script.src=src;
//     document.body.appendChild(script);
//     script.onload=()=>{
//         resolve(1);
//     }
//     script.onerror=()=>{
//         reject(new Error("Script load error"));
//     }
// })
// }
// let p=loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js");

// p.then((value)=>{
//     console.log("Script loaded successfully");
// }).catch((error)=>{
//     console.log(error);
// })
// let p=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         alert("Hey i am resolved");
//         resolve("Promise resolved");
//     },2000);
// })
// p1.then(()=>{
//     console.log("Promise resolved successfully");
// })
// p1.then(()=>{
//     alert("Promise resolved successfully")
// })
// let p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise resolved");
//     },2000);
// })
// let p2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise resolved");
//     },4000);
// })
// let p3=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise resolved");
//     },1000);
// })

// let p=Promise.race( [p1,p2,p3]);
// p.then((value)=>{
//     console.log(value);
//     })
// async function harry(){
//     let delhiWeather=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("27 degree celsius");
//         },2000);
//     });
//     let mumbaiWeather=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("25 degree celsius");
//         },3000);
//     });
//     let delhiW=await delhiWeather;
//     let mumbaiW=await mumbaiWeather;
//     return [delhiW,mumbaiW];
// }
// let a=harry();
// console.log(a);
// setTimeout(() => {
    
//     console.log("Hello world");
// }, 1000);
// setTimeout(() => {
    
//     console.log("Hello world");
// }, 2000);
// setTimeout(() => {
    
//     console.log("Hello world");
// }, 3000);
// setTimeout(() => {
    
//     console.log("Hello world");
// }, 4000);  
try{
    let age=prompt("Enter your age");
    age=Number.parseInt(age);
    if(age>120){
    throw new Error("This is an error");}
}
catch(error){
    console.log(error);

}