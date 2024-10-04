Generics is used inside resuable code with robust type structure.  

lets assum a scenarion where we are creating a funcion which returns a value. but that value is specific.
```typescript
function retVal(para: number): number{
    return para;
}
```  
like this example it takes a integer parameter and it returns that very parameter.

but sometimes we might not sure about which data type function will be recieving. it can be **boolean** or **string**. so what we gonna do for that?  
in `TS` we have `any` which means it can have any datatype. but there is a problem with `any`.  
```typescript
function retVal(para: any): any{
    return para;
}
```  
or to explain this more we write the code like this  
```typescript
function retVal(para: boolean | string): boolean | string{
    return para;
}
```  

problem with `any` keyword or `| (pipe)` sign is, we can pass the value of boolean & function can return the string or we can pass string at parameter & it will be returning boolean.
```bash
paratmeter: boolean
return: one between boolean or string
# OR
paratmeter: string
return: one between string or boolean
```  
although we can solve the problem with conditional statement like this  
```typescript
function retVal(para: boolean | string): boolean | string{
    if(typeof para === "boolean"){
        return para;
    }else if(typeof para === "string"){
        return para;
    }else{
        throw new Error("please input string or boolean");
    }
}
```  
but there is a simple solution for that which is __Generics__  
```typescript
function retVal<Type>(para: Type): Type{
    return para;
}
```  
here essentially we are telling that a parameter can be any type but once the paramter is passed, that parameter type will be locked & applied for rest of the operation.  
```bash
paratmeter: boolean
return: boolean
# OR
paratmeter: string
return: string
```  

we can write generics with anything instead of just `Type` keyword.  
```typescript
function retVal<T>(para: T): T{
    return para;
}
```  
```typescript
function retVal<bro>(para: bro): bro{
    return para;
}
```  

Sometimes we see a code snippets with `, (qoma)` in it, but do not worry that qoma only kept there to tell developer that that `<,>` is not a `JSX snippet` instead its just a `generics`.  
```typescript
function retVal<T,>(para: T): T{
    return para;
}
```  