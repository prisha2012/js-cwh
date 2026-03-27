let r=Math.floor(Math.random()*100)+1;
let a;
let count =0;

do{
    a=prompt("Enter a number");
    a=Number.parseInt(a);
    count++;
    if(a<r){
        console.log("Too Low:");

    }
    else if(a>r){
        console.log("too High:");
    }
}while(a!=r);
console.log("Done!");
console.log(count);
