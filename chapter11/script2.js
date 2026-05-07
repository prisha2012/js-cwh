class Animal{
    constructor(name,color){
        this._name=name;
        this.color=color;
    }
    run(){
        console.log(this._name+" is running");

    }
    shout(){
        console.log(this._name+" is shouting");
        
    }
    get name(){
        return this._name;
    }
    set name(newname){
        return this._name;
    }
}
class Monkey extends Animal{
    eatBanana(){
        console.log(this.name +"is eating Banana");
    }
}
let m=new Monkey("chimpu","orangae");
m.eatBanana();
