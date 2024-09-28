## Function with no return  
```typescript
function printError(errorMsg: string): void{
    console.log(errorMsg);
} // void to return nothing
```  
## Function to throw error & terminate function without return statement
```typescript
function handleError(errorMsg: string): never{
    throw new Error(errorMsg);
}
```  