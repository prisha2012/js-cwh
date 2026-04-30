// myspan.innerHTML="hello world";
// let a=first.getAttribute("class");
// console.log(a);
// let a=doxument.getElementsByTagName("div")[0]
//  a.innerHTML=a.innerHTML+"<h1>hello world</h1>";

// let div=document.createElement('div');
// div.innerHTML="<h1>hello world</h1>";
// a.appendChild(div);
// const sum=(a,b)=>a+b;

// setTimeout(sum,1000,1,2);
// document.write("<h1>hello world</h1>");
// setTimeout(function(){
//     alert("i am a timer");
// },2000);
// let x=function(e){
//     alert("button was clicked ");
// };
// let y=function(e){
//     alert("button was clicked again");
// };
// Btn.addEventListener("click",x);
// Btn.addEventListener("click",y);
// let a=prompt("enter");
// if(a=="2"){
//     Btn.removeEventListener("click",x);
// }
// setInterval(async function(){
//     let url="https://jsonplaceholder.typicode.com/todos/1";
//     console.log("fetching data from url");
// },3000);
setInterval(async function(){
    document.querySelector("#bulb").classList.toggle("bulb")
},5000);