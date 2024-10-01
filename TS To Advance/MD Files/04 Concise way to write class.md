As far as we learned we write class code something like this.  
```typescript
class User{
    name: string
    email: string
    age: number

    constructor(name:string, email:string, age: number){
        this.name = name
        this.email = email
        this.age = age
    }
}

const uOne = new User("Ganesh", "G@g.com", 26);
```  

but now we know public & private field we can define class with more concise way.  
```typescript
class User{
    // no need to declare fields here.

    constructor(
        // instead make them private/ public in parameter
        public name:string,
        public email:string,
        public age: number)
        {
            // no need to this.vN = vN;
        }
}

const uOne = new User("Ganesh", "G@g.com", 26);

console.log(uOne);
```  

it is just syntactical sugar `TS` provides us.  

# with Truly Private Field  
```typescript
// class User {
//     // Using the # syntax for truly private fields
    #email: string;

//     constructor(
//         public name: string,
        email: string,       // No access modifier here
//         public age: number,
//         public salary?: number
//     ) {
//         this.#email = email; // Assigning to the truly private field
//     }

    // Getter method for email
    public getEmail(): string {
        return this.#email;
    }
// }

// const uOne = new User("Ganesh", "G@g.com", 26, 30000);

// console.log(uOne); // Logs the User object
console.log(uOne.getEmail()); // Accessing email through a Getter method
```  