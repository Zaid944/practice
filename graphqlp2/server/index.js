const express = require("express");
const { ApolloServer } = require("@apollo/server");
const bodyParser = require("body-parser");
const cors = require("cors");
const { expressMiddleware } = require("@apollo/server/express4");
const axios = require("axios");

const { USERS } = require("./user");
const { TODOS } = require("./todos");

async function startServer() {
    const app = express();
    const server = new ApolloServer({
        resolvers: {
            Todo: {
                user: (todo) => USERS.find((e) => e.id === todo.userId),
            },
            Query: {
                getTodos: () => TODOS,
                getAllUsers: () => USERS,

                getUser: async (parent, { id }) =>
                    USERS.find((e) => e.id === id),
            },
        },
        typeDefs: `#graphql
            type User {
                id: ID!
                name: String!
                username: String!
                email: String!
                phone: String!
                website: String!
            }

            type Todo {
                id: ID!
                title: String!
                completed: Boolean
                userId: ID!
                user: User
            }
            
            type Query {
                getTodos: [Todo]
                getAllUsers: [User]
                getUser(id: ID!): User
            }`,
    });
    app.use(bodyParser.json());
    app.use(cors());

    await server.start();

    app.use("/graphql", expressMiddleware(server));
    app.listen(8000, () => console.log("server started at port 8000"));
}
startServer();
