import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// function App() {
//     const [todos, setTodos] = useState([
//         {
//             title: "go to gym",
//             description: "go to gym",
//             completed: false,
//         },
//         {
//             title: "coding",
//             description: "coding",
//             completed: false,
//         },
//     ]);
//     return (
//         <div>
//             {todos.map((todo) => (
//                 <Todo title={todo.title} description={todo.description} />
//             ))}
//         </div>
//     );
// }

function Todo(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.description}</h2>
        </div>
    );
}

function App2() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => setCount(Math.random())}>
                Button {count}
            </button>
        </div>
    );
}

function App() {
    let a = 1;
    window.setInterval(() => {
        a++;
    }, 1000);
    return (
        <div>
            <Child a={a} />
        </div>
    );
}
function Child(props) {
    return <div>{props.a}</div>;
}
export default App;

//any time parent rerenders then child also
//rerenders
