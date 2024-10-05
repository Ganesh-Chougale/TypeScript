## Array generics literal  
```typescript
const myArr: Array<number> = [];
```  
## Function generics literal  
```typescript
function getProduct<T>(products: T[]) :T{
    // operation
    const result = 2;
    return products[result];
}
console.log(getProduct([0,1,2,3,4]) )
```  
## Arrow Function generics literal  
```typescript
const getProduct = <T,>(products: T[]):T => {
    // operation
    const result = 2;
    return products[result];
}
console.log(getProduct([0,1,2,3,4]) )
// qoma is mandatory in arrow function
```  