import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    const [todos, setTodos] = useState([
        {
            title: "todo1",
            description: "todo1",
        },
        {
            title: "todo2",
            description: "todo1",
        },
        {
            title: "todo3",
            description: "todo1",
        },
        {
            title: "todo4",
            description: "todo1",
        },
    ]);
    const [count, setCount] = useState(0);

    return (
        <>
            {todos.map((todo) => (
                <Todo todo={todo} />
            ))}
        </>
    );
}

interface Todo {
    title: string;
    description: string;
}

interface TodoInput {
    todo: Todo;
}

function Todo({ todo }: TodoInput) {
    return (
        <>
            {todo.title} {todo.description}
        </>
    );
}

export default App;

