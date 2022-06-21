"use strict";
exports.__esModule = true;
console.log("test.ts is working");
// #1 - templated strings (ES6)
var firstName = "Aidan";
var message = "Welcome ".concat(firstName);
console.log(message);
// #2 - let and const
//let a = 100;
//let b = 200;
//let answer = a + b;
// always use let to declare a variable
var api = 3.1415;
api = 4;
console.log(api);
// # we now have type
var aa;
var ss;
var bb;
function doSomething(name) {
    console.log("name:".concat(name));
}
doSomething(99);
// class keyword (ES6)
var User = /** @class */ (function () {
    function User(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    return User;
}());
var u = new User(1, "Alice", "alice@gmail.com");
console.log(u.name);
var Member = /** @class */ (function () {
    function Member(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    return Member;
}());
var m = new Member(2, "Bob", "bob@gmail.com");
console.log(m.name);
