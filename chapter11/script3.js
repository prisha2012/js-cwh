class Employee {
    requestData(name, age) {
        console.log(`${name} is ${age} year old.`);
    }
    requestWork(work){
        console.log(`his work is ${work}`);
    }
}

class Programmer extends Employee {
    requestProject(project){
        console.log(`he works in ${project} project.`);
    }
    requestWork(work){
   super.requestWork(4)
        console.log(`his work is ${work} extra`);
    }
}

const a = new Programmer();

a.requestWork("frontend development");
a.requestProject("E-commerce");