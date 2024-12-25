import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";

// function App() {
//     const [count, setCount] = useState(0);
//     const [render, setRender] = useState(true);
//     useEffect(() => {
//         // setTimeout(() => {
//         //     setRender(false);
//         // }, 1000);
//         setInterval(() => {
//             setRender((r) => !r);
//         }, 1000);
//     }, []);
//     if (render)
//         return (
//             <>
//                 <MyComponent />
//             </>
//         );
//     else return <></>;
// }

// function MyComponent2() {
//     const [count, setCount] = useState(0);

//     useEffect(() => {
//         console.log("mounted");

//         //cleanup
//         return () => {
//             console.log("component unmounted");
//         };
//     }, []);

//     const incrementCount = () => {
//         setCount(count + 1);
//     };

//     return (
//         <div>
//             <p>{count}</p>
//             <button onClick={incrementCount}>Increment</button>
//         </div>
//     );
// }

// class MyComponent extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { count: 0 };
//     }

//     componentDidMount() {
//         console.log("component mounted");
//     }

//     componentWillUnmount() {
//         console.log("unmounted");
//     }

//     incrementCount = () => {
//         this.setState({ count: this.state.count + 1 });
//     };

//     render() {
//         return (
//             <div>
//                 <p>{this.state.count}</p>
//                 <button onClick={this.incrementCount}>Increment</button>
//             </div>
//         );
//     }
// }

import axios from "axios";

//repolling the backend

function useIsOnline() {
    const [isOnline, setIsOnline] = useState(window.navigator.onLine);

    useEffect(() => {
        window.addEventListener("online", () => {
            setIsOnline(true);
        });
        window.addEventListener("offline", () => {
            setIsOnline(false);
        });
        return () => {
            window.removeEventListener("online", () => {
                setIsOnline(true);
            });
            window.removeEventListener("offline", () => {
                setIsOnline(false);
            });
        };
    }, []);

    return isOnline;
}

function useInterval(fn, time) {
    useEffect(() => {
        setInterval(() => {
            fn();
        }, time);
    });
}

function useDebounce(value, timeout) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        let key = setTimeout(() => {
            setDebouncedValue(value);
        }, timeout);

        return () => {
            clearTimeout(key);
        };
    }, [value]);
    return debouncedValue;
}

function useTodos(N) {
    const { width, height } = useDimensions();
    const isOnline = useIsOnline();
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const value = setInterval(() => {
            axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
                setTodos(res.data.todos);
            });
            setLoading(false);
        }, N * 1000);

        axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
            setTodos(res.data.todos);
        });
        setLoading(false);

        return () => {
            clearInterval(value);
        };
    }, [N]);

    return { todos, loading };
}

function App() {
    const { todos, loading } = useTodos(5);
    if (loading) return <>loading....</>;

    return (
        <>
            {isOnline}
            {todos.map((todo) => (
                <Track todo={todo} />
            ))}
        </>
    );
}

function Track({ todo }) {
    return (
        <div>
            {todo.title}
            <br />
            {todo.description}
        </div>
    );
}

export default App;
