// let a=()=>{new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(456);
//     },4000)
// })
// }

// (async()=>{
// let b=await a();
// console.log(b);
// let c=await a();
// console.log(c);
// let d=await a();
// console.log(d);
// // })()
// let arr=[3,5];
// let[a,b]=arr;

// let arr=[3,5,6,7,7,8];
// let[a,b,...rest]=arr;

// console.log(a,b,rest);

// let arr=[3,5,6,7,7,8];
// let obj1={...arr};
// console.log(obj1);

// greet();
// function greet(){
//     console.log("good morning");
// }
const sayhello=(name)=> console.log("Say Hello "+name);
 
const x={
    name: "Harry",
    role: "JS Developer",
    exp: "30",
    show: function(){
        setTimeout(() => {
            
            console.log(`the name is ${this.name}\n the role id ${this.role}`)
        }, 2000);
    }
}
x.show();