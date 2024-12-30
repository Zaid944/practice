import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(
    username: string,
    password: string,
    firstName: string,
    lastName: string
) {
    const res = await prisma.user.create({
        data: {
            email: username,
            password,
            firstName,
            lastName,
        },
    });

    console.log(res);
}

async function seeUser() {
    const res = await prisma.user.findMany();
    console.log(res);
}

// insertUser("zaidddd4@gmail.com", "password", "zaid", "akhter");
seeUser();

// cold start problem
// warm pool
// aws lambda
// google cloud functions
// cloudfare workers