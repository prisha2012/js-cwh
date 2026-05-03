const loadscript=(src)=>{
    return new Promise((resolve,reject)=>{

    
    let script=document.createElement("script");
    script.src=src;
    script.onload=()=>{
        resolve(1);
    }
    document.body.appendChild(script);
})
}
const main=async()=>{
    console.log(new Date().getTime());
    let a=await loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js");
    console.log("Script loaded successfully");
}
main();
