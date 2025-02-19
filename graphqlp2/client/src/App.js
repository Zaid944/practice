import logo from "./logo.svg";
import "./App.css";
import { gql, useQuery } from "@apollo/client";

const query = gql`
    #graphql
    query GetTodos {
        getTodos {
            title
            completed
            user {
                name
                email
            }
        }
    }
`;

function App() {
    const { data, loading } = useQuery(query);

    if (loading) return <h1>Loading....</h1>;

    return <>{JSON.stringify(data)}</>;
}

export default App;
