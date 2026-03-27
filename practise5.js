//Q1
// let arr=[1,2,3,4,5,11];
// let a=prompt("Enter a number");
// a=Number.parseInt(a);
// arr.push(a);
// console.log(arr);

//Q2

// let arr=[1,2,3,4,5,11];
// let a;
// do{
//     a=prompt("Enter a number");
//     a=Number.parseInt(a);
//     arr.push(a);
// }while(a!=0);
// console.log(arr);
//Q3
// let arr=[10,23,45,67,89,90];
// let n=arr.filter((E)=>{
//     return E%10==0;
// })
// console.log(n);

//Q4
// let arr=[10,23,45,67,89,90];
// let n=arr.map((E)=>{
//     return E*E;
// })
// console.log(n);
//Q5
let arr=[1,2,3,4];
let n=arr.reduce((E1,E2)=>{
    return E1*E2;
})
console.log(n);