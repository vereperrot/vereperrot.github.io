---
layout: post
title:  "typescript quick start"
date:   2019-05-30 00:01:57 +0800
categories: typescript
---
# typescript quick start
ts file -> tsc (typescript compiler) -> js file.
## Try typescript
1. install node.js
2. node -v
3. edit test.ts
```
var message:string = "Hello World" 
console.log(message)
```
4. compile typescript file
```
tsc test.ts
```
5. run the script
```
node test.js
```
6. multiple files compiled at once
```
tsc file1.ts, file2.ts, file3.ts
```

## Simple web application
1. edit greeter.ts
```
class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}
interface Person {
    firstName: string;
    lastName: string;
}
function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
let user = new Student("Jane", "M.", "User");
document.body.innerHTML = greeter(user);
```
2. compile typescript
```
tsc greeter.ts
```
3. edit greeter.html
```
<!DOCTYPE html>
<html>
    <head><title>TypeScript Greeter</title></head>
    <body>
        <script src="greeter.js"></script>
    </body>
</html>
```
4. open **greeter.html** in the web browser

## Use VS Code
1. [Download and install vs code](https://code.visualstudio.com/download)
2. Right click a typescript file to show the context menu. Select **Open with code** menu item.
3. How to word wrap? **ALT+Z** or go to the menu **VIEW| Toggle Word Wrap**.
4. How to compile? **Ctrl+`** or go to the menu **VIEW|Terminal**. Type the command ```tsc .\file.ts --watch```. With **--watch** option it will auto compile when the file changed.
5. Can not find name google? If you use google map api in your code, type the commnad ```npm install --save @types/googlemaps``` to fix the problem.
6. Uncaught ReferenceError: handleLocationError is not defined google maps api? You need to use HTTPS, use a service like https://letsencrypt.org/ (It’s free, automated, and open.)

## Reference
* [TypeScript: What is it & when is it useful?](https://medium.com/front-end-weekly/typescript-what-is-it-when-is-it-useful-c4c41b5c4ae7)
* [TypeScript in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
* [TypeScript - Basic Syntax](https://www.tutorialspoint.com/typescript/typescript_basic_syntax.htm)
