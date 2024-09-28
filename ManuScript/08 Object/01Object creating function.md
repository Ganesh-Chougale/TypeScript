Syntax:  
```typescript
// function to create object
function createOBJ({}:{}){ return {} }
// first {} is parameters defination (destructuring)
// 2nd :{} is type defination
// 3rd {} is function defination\
// inside 3rd {} there is 4th {} which is returning object
```  
Example:  user creation  
```typescript
function createUser({name, isPaid}:{name:string, isPaid:boolean}){
    // ({parameters} : {datatype})
    return {name, isPaid, createdAT: new Date()};
}

console.log(createUser({name: "gorav", isPaid: false}));
```  

Example:  course creation
```typescript
function createCourse({name, price}:{name:string, price:number}){
    return {name, price};
}

console.log(createCourse({name:"TypeScript", price: 499}));
```  
