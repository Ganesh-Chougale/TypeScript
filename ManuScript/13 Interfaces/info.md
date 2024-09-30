Interface is middle version of Type-Alias & a class.  
To learn about interface we will again do with useCase.  

Eg. A trial phase of user  
```typescript
// Interface creation
interface User{
    readonly uName: string,
    email: string,
    googleID?: number
    startTrail: ()=> string
//  startTrail() : string //NOTE - Another way to declare method
    offer(rate: number): string
}

// Object instance creation
const ganesh : User = {
    uName: "Ganesh",
    email: "g@g.com",
    startTrail: ()=> "Trial Started",
    offer: (rate)=> `Hurry up!! ${ganesh.uName} its ${rate}% discount right now`
}

console.log(ganesh);
console.log(ganesh.startTrail());
console.log(ganesh.offer(69));
```  
