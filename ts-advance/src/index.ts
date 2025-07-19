import {z} from "zod";


interface User {
    name: string;
    age: number;
    email: string;
    phone: number;
}

const UserValidation = z.string()

type Yayy = z.infer<typeof UserValidation>

type UserType = Pick<User, "age" | "name" | "email">;



type UserTypePartial = Partial<UserType>

function sumOfAge(user1: UserTypePartial, user2: UserTypePartial) {
    if(user1.age !== undefined && user2.age !== undefined)
    return user1.age + user2.age;
}

// Example usage
const result = sumOfAge(
    {
        name: "harkirat",
        email: "abc",
        age: 20,
    },
    {
        name: "raman",
        email: "abc",
        age: 21,
    }
);
console.log(result); // Output: 9

//partial -> makes all optional
