import { useState, Suspense, useContext } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { CountContext } from "./context";
// import { Dashboard } from "./components/Dashboard";
// import { Landing } from "./components/Landing";

const Dashboard = React.lazy(() => import("./components/Dashboard"));
const Landing = React.lazy(() => import("./components/Landing"));

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

function App() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <CountContext.Provider value={count}>
                <Count />
                <Buttons setCount={setCount} />
            </CountContext.Provider>
        </div>
    );
}

function Count() {
    console.log("Count rerender");
    return (
        <div>
            <CountRender />
        </div>
    );
}

function CountRender() {
    const count = useContext(CountContext);
    return <div>{count}</div>;
}

function Buttons({ setCount }) {
    const count = useContext(CountContext);

    return (
        <div>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                Increase
            </button>
            <button
                onClick={() => {
                    setCount(count - 1);
                }}
            >
                Decrease
            </button>
        </div>
    );
}

export default App;
