// interface User {
//     name: string;
//     age: number;
//     email: string;
//     phone: string;
// }

// function sumOfAge(user: UpdateProps, user2: UpdateProps) {
//     return user.age + user2.age;
// }

// const result = sumOfAge(
//     {
//         name: "zaid",
//         age: 10,
//     },
//     {
//         name: "a",
//         age: 12,
//     }
// );
// console.log(result);

// type UpdateProps = Pick<User, "name" | "age">;

// function updateUser(updatedProps: UpdateOptional) {}

// type UpdateOptional = Partial<UpdateProps>;

// updateUser({});

// const a = [1, 3, 4];
// a[0] = 2;
// // a=[2,32]
// const obj = {
//     name: "zaid",
//     password: "123",
// };

// type User2 = {
//     readonly name: string;
//     readonly age: number;
// };

// const user3: User2 = {
//     name: "john",
//     age: 21
// }

type User = {
    id: string;
    username: string;
};

// type Users = {
//     [key: string]: User;
// };

type Users = Record<string, User>;

const user: Users = {
    abc: {
        id: "1",
        username: "zaid",
    },
};

const users = new Map<string, string>();

users.set("abc", "def");

// const users = new Map()

type Eventt = "click" | "scroll" | "mousemove";
type ExcludeEvent = Exclude<Eventt, "scroll">; // 'click' | 'mousemove'

const handleEvent = (event: ExcludeEvent) => {
    console.log(`Handling event: ${event}`);
};

handleEvent("click"); // OK

import { z } from "zod";
import express from "express";

const app = express();

//runtime types in zod to ts types
// Define the schema for profile update
const userProfileSchema = z.object({
    name: z.string().min(1, { message: "Name cannot be empty" }),
    email: z.string().email({ message: "Invalid email format" }),
    age: z
        .number()
        .min(18, { message: "You must be at least 18 years old" })
        .optional(),
});

export type finalType = z.infer<typeof userProfileSchema>;

app.put("/user", (req, res) => {
    const { success } = userProfileSchema.safeParse(req.body);
    const updateBody = req.body; // how to assign a type to updateBody?

    if (!success) {
        res.status(411).json({});
        return;
    }
    // update database here
    res.json({
        message: "User updated",
    });
});

app.listen(3000);
//ts types are compile time
