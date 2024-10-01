By default the class fields are public but we can make it private with same key word `private`.  
# Before  
```typescript
class User{
    name: string
    email: string
    age: number
    readonly city: string = "Kolhapur" // default value

    constructor(name:string, email:string, age: number){
        this.name = name
        this.email = email
        this.age = age
    }
}

const uOne = new User("Ganesh", "G@g.com", 26);

console.log(uOne.email); // public & accesible outside of class.
```  
# After    
```typescript
class User{
    public name: string     // explicitly public
    private email: string   // private field
    age: number             // public by default
    readonly city: string = "Kolhapur" // default value

    constructor(name:string, email:string, age: number){
        this.name = name
        this.email = email
        this.age = age
    }
}

const uOne = new User("Ganesh", "G@g.com", 26);

console.log(uOne.email); // although this will work on browser & compiler.
// but this will throw us error while writting a code.
```  
//NOTE - this error only occurs while writing a code, after `Ts` to `JS` conversion this will work totally fine, neglecting private factor.

# True Privacy (#)  
the proper way to get true privacy in `TS` is to use **#** instead of **private** keyword.  
```typescript
// class User{
//     name: string
    #email: string
//     age: number
//     readonly city: string = "Kolhapur" // default value

//     constructor(name:string, email:string, age: number){
//         this.name = name
        this.#email = email
//         this.age = age
//     }
// }

// const uOne = new User("Ganesh", "G@g.com", 26);

console.log(uOne.email);
```  
if we uncomment all snippet & run the code, this time our **console.log(uOne.email);** will print `undefined` instead of actual email value.