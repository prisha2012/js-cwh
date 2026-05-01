// let promise=new Promise(function(resolve,reject){
//     //alert("hello");
//     resolve("Promise resolved");
// });
// console.log("hwllo");
// setTimeout(function(){
//     console.log("Hello world");
// },2000);
// console.log("my name is khan");
let p=new Promise(function(resolve,reject){
    console.log("Hello");
    setTimeout(()=>{
        console.log("Hello world");
       reject(new Error("Error: Something went wrong"));
    },5000);
});
p.catch(function(error){
    console.log(error);
});