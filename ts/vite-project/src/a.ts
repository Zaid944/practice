// interface User {
//     name: string;
//     age: number;
//     greet(phrase: string): void;
// }

// class Employee implements User {
//     name: string;
//     age: number;
//     constructor(n: string, a: number) {
//         this.name = n;
//         this.age = a;
//     }
//     greet(phrase: string): void {
//         console.log(phrase);
//     }
// }

// const a = new Employee("an", 1);

// abstract class Shape {
//     abstract name: string;

//     abstract calculateArea(): number;

//     describe(): void {
//         console.log(
//             `This shape is a ${
//                 this.name
//             } with an area of ${this.calculateArea()} units squared.`
//         );
//     }
// }

// class Rectangle extends Shape {
//     name = "Rectangle";

//     constructor(public width: number, public height: number) {
//         super();
//     }

//     // Implement the abstract method
//     calculateArea(): number {
//         return this.width * this.height;
//     }
// }

// // Another subclass implementing the abstract class
// class Circle extends Shape {
//     name = "Circle";

//     constructor(public radius: number) {
//         super();
//     }

//     // Implement the abstract method
//     calculateArea(): number {
//         return Math.PI * this.radius * this.radius;
//     }
// }

// type StringOrNumber = string | number;

// function maxValue(num: number[]) {
//     let max = 0;
//     for (let i = 0; i < num.length; i++) {
//         max = Math.max(max, num[i]);
//     }
//     return max;
// }

// console.log(maxValue([1, 3, 4, 3, 2, 3]));
//zod -> runtime

interface User {
    firstName: string;
    lastName: string;
    age: number;
}

function filteredUsers(users: User[]) {
    return users.filter((x) => x.age >= 18);
}

console.log(
    filteredUsers([
        {
            firstName: "harkirat",
            lastName: "Singh",
            age: 21,
        },
        {
            firstName: "Raman",
            lastName: "Singh",
            age: 16,
        },
    ])
);

enum Direction {
    up,
    down,
    left,
    right,
}

function doSomething(x: Direction) {}
doSomething(Direction.up);

type t = string | number;
const p: t[] = ["a", 1];
