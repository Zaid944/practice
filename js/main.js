// console.log("hello");
// //interpreted language

// // console.log(a);
// //compile time errors is a thing in c++, java
// //but in language like js -> there is only a thing
// //called runtime error because every time the program
// // starts running and there is no concept of compilation
// //js -> single threaded

// //how to make js mutlithreaded
// // var a = 1;
// // console.log(a);
// //var -> function scope
// //let -> block scope
// function func() {
//     var a = 10;
//     console.log(a);
// }
// func();
// let a = "123";
// let b = 123;
// let c = false;
// for (let i = 0; i < 100; i++) {
//     b += i;
// }
// console.log(b);
// let arr = [12, 33, 22, 32];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         console.log(arr[i]);
//     }
// }

// const person = [
//     {
//         name: "zaid",
//         age: "12",
//     },
//     {
//         name: "zaid",
//         age: "12",
//     },
//     {
//         name: "zaid",
//         age: "12",
//     },
// ];
// for (let i = 0; i < person.length; i++) {
//     if (person[i]["name"] == "zaid") {
//         console.log(person[i]["name"]);
//         console.log(person[i]["age"]);
//     }
// }
// function sum(a, b) {
//     return a + b;
// }
// let d = 0;
// for (let i = 0; i < 100000000000; i++) {
// //     b = b + i;
// // }
// // console.log(d);

// function sum(num1, num2, fn) {
//     let result = num1 + num2;
//     fn(result);
// }

// function displayResult(data) {
//     console.log("Result of the sum is : " + data);
// }

// function displayResultPassive(data) {
//     console.log("Sum's result is : " + data);
// }

// sum(1, 2, displayResult);
// sum(1, 2, displayResultPassive);

// function greet() {
//     console.log("hello");
// }
// setTimeout(greet, 1 * 1000);
// function setTimeout(fn, duration) {
//     sleep(duration);
//     fn();
// }

// const users = '{"name" : "Zaid"}';
// const obj = JSON.parse(users);
// console.log(obj);
// console.log(obj["name"]);

// class abc {
//     constructor() {
//         this.a = 0;
//     }
// }

const fs = require("fs");

fs.readFile("a.txt", "utf-8", function (err, data) {
    console.log(data);
});
console.log("hello sync");
//promises uses callback under the hood
// it is syntactical sugar for async functions
// rather than giving callback
// we get a promise and we pass the function in it
// which gets called with the arguments
// of resolve function

// my own asynchronous function
function kiratsReadFile() {
    return new Promise(function (resolve) {
        fs.readFile("a.txt", "utf-8", function (err, data) {
            resolve(data);
        });
    });
}

// callback function to call
function onDone(data) {
    console.log(data);
}

const promise = kiratsReadFile();
console.log(promise);
promise.then(onDone);
function AsyncFunction() {
    return new Promise(function (resolve) {
        resolve("hi there");
    });
}
let p = AsyncFunction();
p.then(function (data) {
    console.log(data + " boy");
});

//in get request there is no req body

