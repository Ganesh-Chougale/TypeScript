Now we learned about `private` & `public` concepts(access specifiers), we know that when we declare some field with `private` keyword we can only access that field withing & **only** within that **very class**.  
but in some cases we need to access those safe fields within other classes like the inherited ones. but as we know safe properties by `private` keyword we cannot access that property in inherited child class. 
### private   
```typescript
// Super class
class AsusUser{
    readonly asusRegion: string = "India";
    private referenceCode: number = 846;

    constructor(
        public customerName : string,
        public email: string
    ){}
 
}
// Sub class
class ROGuser extends AsusUser{
    hasRog: boolean = true;
    ROGid!: string;
    ID_Rogged(): void{
        this.ROGid = `ROG${this.referenceCode}`
        // cannot access `this.referenceCode` outside of OG class (private)
        console.log(this.ROGid);
    }
}

// object instance
const RUone = new ROGuser("Ganesh", "G@g.com");
RUone.ID_Rogged();
```  

### protected  
```typescript
// // Super class
// class AsusUser{
//     readonly asusRegion: string = "India";
    protected referenceCode: number = 846;

//     constructor(
//         public customerName : string,
//         public email: string
//     ){}
 
// }
// // Sub class
// class ROGuser extends AsusUser{
//     hasRog: boolean = true;
//     ROGid!: string;
//     ID_Rogged(): void{
//          this.ROGid = `ROG${this.referenceCode}`
// Note:-   can access  `this.referenceCode` now outside of OG class (because of protected)
//          console.log(this.ROGid);
//     }
// }

// const RUone = new ROGuser("Ganesh", "G@g.com");
// RUone.ID_Rogged();
```     
### while `private` field can only be accessible withing OG class, `protected` field can be accessible thoughout its sub classes too.