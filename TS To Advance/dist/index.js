"use strict";
class User {
    constructor(name, email, age) {
        this.city = "Kolhapur"; // default value
        this.name = name;
        this.email = email;
        this.age = age;
    }
}
const uOne = new User("Ganesh", "G@g.com", 26);
console.log("Page Loaded");
// try to change read only files
uOne.city = "Goa";
