class Railwayform{
    constructor(name){
        console.log("constructor"+name);
        this.name=name;
    }
    submit(){
        alert("form submitted");
    }
    cancel(){
        alert(this.name+": canceled");
    }
    fill(name){
        this.name=name;
    }
}
let harry=new Railwayform("Harry");

let rohan=new Railwayform("Rohan");


harry.submit();
rohan.submit();

rohan.cancel(); 