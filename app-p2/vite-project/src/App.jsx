import React, { useEffect, useMemo, useState, useCallback } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

// function App() {
//     // const [title, setTitle] = useState("");
//     return (
//         <React.Fragment>
//             {/* <button
//                 onClick={function () {
//                     setTitle(`my name is ${Math.random()}`);
//                 }}
//             >
//                 Change Text
//             </button> */}
//             <HeaderWithButton></HeaderWithButton>
//             {/* <Header title={title}></Header> */}
//             <Header title="abc"></Header>
//             <Header title="abc"></Header>
//             <Header title="abc"></Header>
//             <Header title="abc"></Header>
//             <Header title="abc"></Header>
//             <Header title="abc"></Header>
//         </React.Fragment>
//     );
// }

// function HeaderWithButton() {
//     const [title, setTitle] = useState("");
//     return (
//         <>
//             <button
//                 onClick={function () {
//                     setTitle(`my name is ${Math.random()}`);
//                 }}
//             >
//                 Change Text
//             </button>
//             <Header title={title}></Header>
//         </>
//     );
// }

// // function Header({ title }) {
// //     // console.log("render");
// //     return <div>{title}</div>;
// // }

// const Header = React.memo(function ({ title }) {
//     // console.log("render");
//     return <div>{title}</div>;
// });

// function App() {
//     const [todos, setTodos] = useState([
//         {
//             id: 1,
//             title: "abc",
//             description: "abc",
//         },
//         {
//             id: 2,
//             title: "abc",
//             description: "abc",
//         },
//         {
//             id: 3,
//             title: "abc",
//             description: "abc",
//         },
//     ]);
//     return (
//         <>
//             <button
//                 onClick={() => {
//                     setTodos([
//                         ...todos,
//                         {
//                             id: todos.length,
//                             title: "random",
//                             description: "random",
//                         },
//                     ]);
//                 }}
//             >
//                 add todo
//             </button>
//             {todos.map((todo) => (
//                 <Todo
//                     key={todo.id}
//                     title={todo.title}
//                     description={todo.description}
//                 />
//             ))}
//         </>
//     );
// }

// function Todo({ title, description }) {
//     return (
//         <>
//             <h1>{title}</h1>
//             <h2>{description}</h2>
//         </>
//     );
// }
// export default App;

// function App() {
//     return (
//         <>
//             {/* <CardWrapper
//                 innerComponent={<TextComponent></TextComponent>}
//             ></CardWrapper> */}
//             <CardWrapper>
//                 <TextComponent></TextComponent>
//             </CardWrapper>
//         </>
//     );
// }

// function TextComponent() {
//     return (
//         <>
//             <div>hi there</div>
//             <div>hi there 2</div>
//         </>
//     );
// }

// function CardWrapper({ children }) {
//     return <div style={{ border: "2px solid red" }}>{children}</div>;
// }
//hooks hook into the lifecycle methods
// class NavBasic extends React.PureComponent {
//     //first time component renders
//     componentDidMount() {

//     }
//     // onComponentMount() {

//     // }
//     render() {

//     }
// }

// function App() {
//     useEffect(() => {
//         alert("Mounted");
//     }, []);
//     return <>hello</>;
// }

// function App() {
//     const [todos, setTodos] = useState([]);

//     //polling
//     useEffect(() => {
//         setInterval(async () => {
//             const resp = await fetch("http://localhost:3000/app");
//             const resp2 = await resp.json();
//             setTodos(resp2);
//         }, 1000);
//     }, []);

//     return (
//         <>
//             {todos.map((todo) => (
//                 <Todo todo={todo.title} description={todo.description} />
//             ))}
//         </>
//     );
// }

// function Todo({ title, description }) {
//     return (
//         <div>
//             <div>{title}</div>
//             <div>{description}</div>
//         </div>
//     );
// }

// useEffect -> componentdidMount, ..

// function App() {
//     //dependency array, state variables
//     useEffect(() => {}, []);
//     return <div>hello</div>;
// }

// function App() {
//     const [todos, setTodos] = useState([]);

//     useEffect(async () => {
//         const res = await axios.get("http://localhost:3000/server");
//         setTodos(res.data.todos);
//     }, []);

//     return (
//         <div>
//             {todos.map((todo) => (
//                 <Todo title={todo.title} description={todo.description} />
//             ))}
//         </div>
//     );
// }

//useAsyncAwait

// function App() {
//     const [id, setId] = useState(1);
//     return (
//         <div>
//             <button
//                 onClick={() => {
//                     setTodo(1);
//                 }}
//             >
//                 1
//             </button>
//             <button
//                 onClick={() => {
//                     setTodo(2);
//                 }}
//             >
//                 2
//             </button>
//             <button
//                 onClick={() => {
//                     setTodo(3);
//                 }}
//             >
//                 3
//             </button>
//             <button
//                 onClick={() => {
//                     setTodo(4);
//                 }}
//             >
//                 4
//             </button>
//             <Todo2 id={id}></Todo2>
//         </div>
//     );
// }

// function Todo2({ id }) {
//     const [todo, setTodo] = useState({});

//     async function main() {
//         const resp = await axios.get(`http://localhost:3000/server?id=${id}`);
//         setTodo(resp.data.todos);
//     }
//     useEffect(() => {
//         main();
//     }, []);

//     return (
//         <>
//             <div>{todo.title}</div>
//             <div>{todo.description}</div>
//         </>
//     );
// }

// function Todo({ title, description }) {
//     return (
//         <>
//             <div>{title}</div>
//             <div>{description}</div>
//         </>
//     );
// }

//useMemo
// function App() {
//     const [num, setNum] = useState(1);
//     const [count, setCount] = useState(0);
//     let count2 = useMemo(() => {
//         console.log("render");
//         let count = 0;
//         for (let i = 0; i <= num; i++) {
//             count += i;
//         }
//         return count;
//     }, [num]);
//     function calcSum() {
//         console.log("called");
//         if (num == "") return 0;
//         const number = parseInt(num);
//         return (number * (number + 1)) / 2;
//     }
//     return (
//         <div>
//             <div>
//                 <input
//                     type="text"
//                     onChange={(e) => {
//                         setNum(e.target.value);
//                     }}
//                 ></input>
//                 Sum is {count2}
//             </div>
//             <br></br>
//             <br></br>
//             <br></br>
//             <br></br>
//             <br></br>
//             <br></br>
//             <br></br>
//             <div>
//                 <button
//                     onClick={() => {
//                         setCount((count) => count + 1);
//                     }}
//                 >
//                     {count}
//                 </button>
//             </div>
//         </div>
//     );
// }

// function useSomething() {

// }

// function App() {
//     const [count, setCount] = useState(0);
//     // var a = 1;
//     const fun1 = useCallback(function fun1(a, b) {
//         return a + b;
//     }, []);
//     return (
//         <>
//             <button
//                 onClick={() => {
//                     setCount((count) => count + 1);
//                 }}
//             >
//                 clickMe
//             </button>
//             <div>{count}</div>
//             {/* <Demo a={a}></Demo> */}
//             <Demo a={fun1}></Demo>
//         </>
//     );
// }

// // == check in useCallback
// const Demo = React.memo(function Demo({ a }) {
//     console.log("render");
//     return <div>{a}</div>;
// });
// function Todos() {
//     const [todos, setTodos] = useState([]);
//     useEffect(() => {
//         axios.get("").then((res) => {
//             console.log(res);
//             setTodos(res.data.todos);
//         });
//     }, []);
//     return todos;
// }

// function App() {
//     const todos = Todos();
//     return <div>{todos}</div>;
// }

function App() {
    const divRef = useRef();
    const [exchange1Data, setExchange1Data] = useState(0);
    const [bankData, setBankData] = useState(0);
    const [exchange2Data, setExchange2Data] = useState(0);
    console.log("rendered");
    // useEffect(() => {
    //     setTimeout(() => {
    //         console.log("ran1");
    //         setExchangeData(100);
    //     }, 1000);
    //     setTimeout(() => {
    //         console.log("ran2");
    //         setBankData(100);
    //     }, 1000);
    // }, []);

    useEffect(() => {
        setTimeout(() => {
            console.log("ran1");
            setExchange1Data(100);
        }, 1000);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            console.log("ran1");
            setExchange2Data(100);
        }, 1000);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            console.log("ran1");
            setBankData(100);
        }, 5000);
        divRef.current.value = 10;
    }, []);

    // const tax = useMemo(() => {
    //     console.log("use memo rendered");
    //     return exchange1Data + exchange2Data;
    // }, [exchange1Data, exchange2Data]);
    // const tax = (exchange1Data + exchange2Data) * 0.3;

    const calculateCrypto = useCallback(function () {
        console.log("use memo rendered");
        return exchange1Data + exchange2Data;
    });

    const bankTax = (tax + bankData) * 0.4;

    return (
        <>
            bank data is : {tax} {bankData}
            <div ref={divRef}></div>
        </>
    );
}

export default App;

//pure components -> no re-render
