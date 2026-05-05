let url="https://dogapi.dog/api/v2/breeds";
 let response=fetch(url);
 response.then((v)=>{
    return v.json();
 }).then((v)=>{
    console.log(v);
 })