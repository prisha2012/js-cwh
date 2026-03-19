//Q1
// let a=prompt("what is your age?")
// a=Number.parseInt(a)
// if(a>10&&a<20){
//     alert("you are teenager")
// }

let a=prompt("what is your age?")
switch(a){
    case "10":
        alert("you are 10 years old")
        break;
    case "20":
        alert("you are 20 years old")
        break;
    default:
        alert("you are neither 10 nor 20 years old")
}
