import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    return (
        // <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="text-3xl font-bold underline">
            <div style={{ background: "green" }}>Hi there from first div</div>
            <div style={{ background: "red" }}>Hi there from second div</div>
            <div style={{ background: "blue" }}>Hi there from third div</div>
        </div>
        // </div>
    );
}

export default App;
