// // const x:number = 1;
// // console.log(x);

// // let x: number = 1;
// // x = "zaid";
// // console.log(x);

// //typescript lets you find
// //compile time errors
// //because now we have a compilation
// //step

// function greet(firstName: string) {
//     console.log(firstName);
// }
// greet("Zaid");

// function sum(a: number, b: number) {
//     return a + b;
// }
// sum(1, 2);

// function isLegal(num: number): boolean {
//     if (num < 10) {
//         return false;
//     } else {
//         return true;
//     }
// }

// function delayedCall(fn: (e: any)=>void) {
//     setTimeout(fn, 1000);
// }

// delayedCall((e) => {
//     return "abc";
// });

// greet("Zaid")

// const greet = (name: string) => `Hello, ${name}!`;

// const greet = (name: any) => `Hello, ${name}!`;

interface User {
    firstName: string;
    lastName: string;
    email: string;
    age: number;
}
function isLegal(user: User) {
    if (user.age > 19) {
        return true;
    } else {
        return false;
    }
}
