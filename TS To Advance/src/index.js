var User = /** @class */ (function () {
    function User(name, email, age) {
        this.city = "Kolhapur"; // default value
        this.name = name;
        this.email = email;
        this.age = age;
    }
    return User;
}());
var uOne = new User("Ganesh", "G@g.com", 26);
console.log(uOne.email); // public & accesible outside of class.
