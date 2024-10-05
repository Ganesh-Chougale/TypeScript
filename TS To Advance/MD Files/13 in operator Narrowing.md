in operator is used to check if whether interface has the prefered property or not.  
```typescript
interface User{
	uName: string
	email: string
}

interface Admin{
	uName: string
	email: string
	isAdmin: boolean
}

function checkRole(account: User | Admin){
	if("isAdmin" in account){	// "in" operator checks whether field is there or not
		return account.isAdmin;
	}
}
```  