// let a= prompt("what is your age?")
// //console.log( typeof a)
// a= Number.parseInt(a)
// if(a>0){
//     alert("you are eligible to drive")
// }
// else{
//     alert("you are not eligible to drive")
// }

let obj={
    harry: 20,
    shubham: 30,
    rohan: 40


}
for(let key in obj){
    console.log("the age of "+ key + " is " + obj[key])
}
for(let val of "harry"){
    console.log(val)
}