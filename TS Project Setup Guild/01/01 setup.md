select the desired directory in CLI first.  

# TypeScript Setup Command  
```bash
tsc --init
```  
this will create a tsconfig.json file.  

we can see the same options in typescript playground > TS Config Option   

# Node Setup Command  
```bash
npm init
# OR to skip prompts
npm init -y
```  

# Adding Html file (index.html with boiler plate)  
```bash
touch index.html
```  
# Creating 2 neccesary directories  
```bash
mkdir src dist
```  
src: Common directory to write code.  
dist: Common directory for final production code.  

```css
src:
    index.ts
dist:
    index.js (link this to main index.html)
```  
techniquely we never write anything inside this js file, when we write in src/index.ts it will automatically generates the code inside that js file  

but how we gonna link index.ts with index.js.  
inside `tsconfig.json` find "outDir": "./"  
uncomment that & set our js file location.  
```json
"outDir": "./dist"
```  
 & it will work perfectly.  
Now we dealed with linking process we need to run `index.ts`  
```bash
tsc <file path> fileName.ts
```  
& after that  
```bash
tsc -w # to run on watchmode
```  