// //alert("Hello, World!");
// let a = 67;
// console.log(a ); 
alert("Enter a number");
let a=prompt("Enter a number");
a=Number.parseInt(a);
 alert("The number you entered is "+(typeof a));
 let write=confirm("do you want to write it on the document");
 if(write){
 document.write(a);
 }
 else{
        console.log("ok, you don't want to write it on the document");
 }
document.body.style.background="blue";