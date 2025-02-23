// import { Client } from "pg";

// async function insertData() {
//     const client = new Client({
//         host: "localhost",
//         port: 5432,
//         database: "postgres",
//         user: "postgres",
//         password: "mysecretpassword",
//     });
//     try {
//         await client.connect();
//         const createQuery = `
//             create table users(
//                 email string,
//                 username string,
//                 password users
//             )
//         `
//         const insertQuery =
//             "INSERT INTO users (username, email, password) VALUES ('username2', 'user3@example.com', 'user_password');";
//         const res = await client.query(insertQuery);
//         console.log("insert", res);
//     } catch (err) {
//         console.error(err);
//     } finally {
//         await client.end();
//     }
// }

// insertData();

import { Client } from "pg";

// Async function to fetch user data from the database given an email
async function getUser(email: string) {
    const client = new Client({
        host: "localhost",
        port: 5432,
        database: "postgres",
        user: "postgres",
        password: "mysecretpassword",
    });

    try {
        await client.connect(); // Ensure client connection is established
        const query = "SELECT * FROM users WHERE email = $1";
        const values = [email];
        const result = await client.query(query, values);

        if (result.rows.length > 0) {
            console.log("User found:", result.rows[0]); // Output user data
            return result.rows[0]; // Return the user data
        } else {
            console.log("No user found with the given email.");
            return null; // Return null if no user was found
        }
    } catch (err) {
        console.error("Error during fetching user:", err);
        throw err; // Rethrow or handle error appropriately
    } finally {
        await client.end(); // Close the client connection
    }
}

// Example usage
getUser("user3@example.com")
    .then((r) => console.log(r))
    .catch(console.error);


