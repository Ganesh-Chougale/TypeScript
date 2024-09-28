function getDBid(id : number | string){
    if(typeof id == "string"){
        return id.toUpperCase();
    }else if(typeof id == "number"){
        return id + 5;
    }
}

console.log(getDBid(3));
console.log(getDBid("three"));
