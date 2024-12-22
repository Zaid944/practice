import { useState, Suspense, useContext } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { CountContext } from "./context";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
// import { Dashboard } from "./components/Dashboard";
// import { Landing } from "./components/Landing";
import { RecoilRoot } from "recoil";

// import { countAtom, evenSelector } from "./store/atoms/Count";
import { filteredTodos } from "./store/atoms/Todo";
// const Dashboard = React.lazy(() => import("./components/Dashboard"));
// const Landing = React.lazy(() => import("./components/Landing"));

// function App() {
//     return (
//         <div>
//             <div>Hi this is top bar</div>
//             <BrowserRouter>
//                 <AppBar />
//                 <Routes>
//                     <Route
//                         path="/dashboard"
//                         element={
//                             <Suspense fallback={"loading..."}>
//                                 <Dashboard />
//                             </Suspense>
//                         }
//                     ></Route>
//                     <Route
//                         path="/"
//                         element={
//                             <Suspense fallback={"loading..."}>
//                                 <Landing />
//                             </Suspense>
//                         }
//                     ></Route>
//                 </Routes>
//             </BrowserRouter>
//         </div>
//     );
// }

// function AppBar() {
//     const navigate = useNavigate();

//     return (
//         <div>
//             <button
//                 onClick={() => {
//                     // window.location.href = "/dashboard";
//                     navigate("/dashboard");
//                 }}
//             >
//                 Dashboard
//             </button>
//             <button
//                 onClick={() => {
//                     // window.location.href = "/";
//                     navigate("/");
//                 }}
//             >
//                 Home
//             </button>
//         </div>
//     );
// }

// function App() {
//     // const [count, setCount] = useState(0);
//     return (
//         <div>
//             {/* <CountContext.Provider value={count}> */}
//             <RecoilRoot>
//                 <Count />
//                 <Buttons />
//             </RecoilRoot>
//             {/* </CountContext.Provider> */}
//         </div>
//     );
// }

// function Count() {
//     console.log("Count rerender");
//     return (
//         <div>
//             <CountRender />
//         </div>
//     );
// }

// function CountRender() {
//     const count = useRecoilValue(countAtom);
//     // const count = useContext(CountContext);
//     return (
//         <>
//             <div>{count}</div>
//             <EvenCountRenderer />
//         </>
//     );
// }

// function EvenCountRenderer() {
//     const count = useRecoilValue(countAtom);
//     // const isEven = count % 2 == 0;
//     const isEven = useRecoilValue(evenSelector);
//     return <div>It is {isEven ? "even" : "odd"}</div>;
// }

// function Buttons() {
//     // const count = useContext(CountContext);
//     // const count = useRecoilValue(countAtom);
//     const setCount = useSetRecoilState(countAtom);
//     return (
//         <div>
//             <button
//                 onClick={() => {
//                     setCount((count) => count + 1);
//                 }}
//             >
//                 Increase
//             </button>
//             <button
//                 onClick={() => {
//                     setCount((count) => count - 1);
//                 }}
//             >
//                 Decrease
//             </button>
//         </div>
//     );
// }

function App() {
    // const [title, setTitle] = useState("");
    // const [description, setDescription] = useState("");
    // const [todos, setTodos] = useRecoilState(todoAtom);
    const filteredTodos = useRecoilValue(filteredTodos);
    // const [filter, setFilter] = useRecoilState(filterAtom);
    // console.log(filter);
    // console.log(todos);
    return (
        <></>
        // <>
        //     <div>
        //         <label id="title">Title</label>
        //         <input
        //             type="text"
        //             id="title"
        //             onChange={(e) => {
        //                 setTitle(e.target.value);
        //             }}
        //         ></input>
        //     </div>
        //     <div>
        //         <label id="description">Description</label>
        //         <input
        //             type="text"
        //             id="description"
        //             onChange={(e) => {
        //                 setDescription(e.target.value);
        //             }}
        //         ></input>
        //     </div>
        //     <Filter />
        //     <div>
        //         <button
        //             onClick={() => {
        //                 setTodos([
        //                     ...todos,
        //                     { title: title, description: description },
        //                 ]);
        //             }}
        //         >
        //             Add todo
        //         </button>
        //     </div>
        //     <div>
        //         {todos.map((todo, index) => (
        //             <Todo key={index} todo={todo} />
        //         ))}
        //     </div>
        // </>
    );
}

function Filter() {
    const setFilter = useSetRecoilState(filterAtom);
    return (
        <>
            <div>
                <label id="filter">Filter Word</label>
                <input
                    type="text"
                    id="filter"
                    onChange={(e) => {
                        setFilter(e.target.value);
                    }}
                ></input>
            </div>
        </>
    );
}

function Todo({ todo }) {
    const { title, description } = todo;
    return (
        <div>
            {title} {description}
        </div>
    );
}

export default App;
