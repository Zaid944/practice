import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema";

const resolvers = {
    Query: {
        
    }
}
//server 
const server = new ApolloServer({
    typeDefs
    //tydefs --- definitions of types of data
    //resolvers
})


const {url} = await startStandaloneServer(server, {
    listen: {
        port:4000
    }
})

console.log("server ready at port", 4000);