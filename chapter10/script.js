// let a= fetch("https://goweather.herokuapp.com/weather/Ny");
// a.then((response)=>{
//     return val.json;
// }).then((response)=>{
//     console.log(response);
// })
// const createtodo=async()=>{
// let options= {
//     method: "POST",
//     headers:{
//         "Content-type": "application/json"
//     },
//     body: JSON.stringify({
//        title: 'foo',
//        body: 'bar',
//        userId: 1,
     
//     })

// }
// let p=fetch('https://goweather.herokuapp.com/weather/Ny',options)
// let response=await p.json()
// return response
// } 
// const mainFunc=()=>{
//     let tdo= await createtodo();
//     console.log(tdo);
// }
// mainFunc();
// let key=prompt("Enter key u want to set");
// let value =prompt("enter value u want to set");

// localStorage.setItem(key,value);
// console.log(`the value at key ${key} is ${localStorage.getItem(key)}`);
window.onstorage=(e)=>{
    alert("change");
    console.log(e);
    
}