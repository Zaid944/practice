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
                user: (todo) => {
                    console.log(todo);
                    console.log(USERS.find((e) => e.id == todo.userId));
                    return USERS.find((e) => e.id == todo.userId);
                },
            },
            Query: {
                getTodos: () => TODOS,
                getAllUsers: () => USERS,

                getUser: async (parent, { id }) =>
                    USERS.find((e) => e.id === id),
            },
            Mutation: {
                addTodo: (parent, args) => {
                    const todo = args.input;
                    console.log(todo);
                    const lastId =
                        TODOS.length == 0 ? -1 : TODOS[TODOS.length - 1].id;

                    todo.id = lastId + 1;
                    TODOS.push(todo);
                    return todo;
                },

                updateTodo: (parent, args) => {
                    console.log("args is: ", args);
                    const id = args.input.id;
                    const idx = TODOS.findIndex((todo) => todo.id == id);

                    for (const [key, value] of Object.entries(args.input)) {
                        TODOS[idx][key] = value;
                    }

                    console.log(TODOS[idx]);
                    return TODOS[idx];
                },

                deleteTodo: (parent, args) => {
                    const id = args.id;

                    console.log("here start");
                    const todo = TODOS.find((todo) => todo.id == id);
                    console.log("here", todo);
                    let newTODOS = TODOS.filter((todo) => todo.id == id);
                    console.log("here", newTODOS);
                    // TODOS = newTODOS;
                    console.log("here end");
                    return todo;
                },
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
            }
            
            input addTodoInput {
                title: String!
                completed: Boolean = false
                userId: ID!
            }

            input updateTodoInput {
                title: String
                completed: Boolean
                id: ID!
                userId: ID
            }

            type Mutation {
                addTodo(input: addTodoInput!): Todo!
                updateTodo(input: updateTodoInput!): Todo!
                deleteTodo(id: ID!): Todo
            }
            `,
    });
    app.use(bodyParser.json());
    app.use(cors());

    await server.start();

    app.use("/graphql", expressMiddleware(server));
    app.listen(8000, () => console.log("server started at port 8000"));
}
startServer();
