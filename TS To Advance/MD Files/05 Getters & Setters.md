## getters: get private property or get public proverty & perform some logic on that.  
## setters: setting private property. (no return type)

```typescript
class AsusUser{
    readonly asusRegion: string = "India";
    #asusID! : number; // if we dont use `!` here it will throw us error to assign value to it.

    constructor(
        public customerName : string,
        public address: string,
        public email: string
    ){} // constructor completed.

    //NOTE - private method (cannot use outside of class)
    private greetMSG() :string{
        return `Hello ${this.customerName} welcome to Asus India`
    }

    //NOTE - access private method using public method
    public publicedPrivateMethod(): string {
        return `${this.greetMSG()} - accesed complete.`;
    }
    
    //NOTE -  Getter methods
    get getAsusID() :number{
        return this.#asusID;
    } // getter to get private property
    get getAsusMail() :string{
        return `Asus${this.email}`;
    } // getter to modify existing public property

    //NOTE -  Setter methods
    set setAsusID(yourID:number) {
        // setter function do not have own type as its inherits that from its private field
        this.#asusID = yourID;
    }
// Blue Print Completed.  
}

// object instance
const AUone = new AsusUser("Ganesh", "kolhapur", "g@g.com");
console.log(AUone);

// accessing private method using public method
console.log(AUone.publicedPrivateMethod());
AUone.publicedPrivateMethod

// getter methods
console.log(AUone.getAsusMail);
console.log(AUone.getAsusID);


// Setting private field
AUone.setAsusID = 32;
console.log(AUone.getAsusID);
```  