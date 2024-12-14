import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    const [title, setTitle] = useState("");
    return (
        <React.Fragment>
            <button
                onClick={function () {
                    setTitle(`my name is ${Math.random()}`);
                }}
            >
                Change Text
            </button>
            <Header title={title}></Header>
            <Header title="abc"></Header>
        </React.Fragment>
    );
}

function Header({ title }) {
    // console.log("render");
    return <div>{title}</div>;
}
export default App;
