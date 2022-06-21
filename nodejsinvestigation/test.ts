// test.ts
export {};


console.log("test.ts is working");

// #1 - templated strings (ES6)
var firstName = "Aidan";
var message = `Welcome ${ firstName }`;

console.log(message);

// #2 - let and const
//let a = 100;
//let b = 200;

//let answer = a + b;

// always use let to declare a variable


const api = 3.1415;

api = 4;


console.log(api);


// # we now have type

let aa:number;
let ss:string;
let bb:boolean;

function doSomething(name:string) {

    console.log(`name:${name}`);
}

doSomething(99);

// class keyword (ES6)

class User {
    public id:number;
    public name:string;
    public email:string;

    constructor(id:number, name:string, email:string) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
}
let u:User = new User(1, "Alice", "alice@gmail.com");
console.log(u.name);
class Member {
    constructor(public id:number, public name:string, public email:string) {
    }
}
let m:Member = new Member(2, "Bob", "bob@gmail.com");
console.log(m.name);








