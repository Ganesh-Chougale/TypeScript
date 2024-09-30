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

console.log("Page Loaded");

// try to change read only files
uOne.city = "Goa";