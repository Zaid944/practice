import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="flex justify-between">
            <div style={{ backgroundColor: "green" }}>hello from div 1</div>
            <div style={{ backgroundColor: "red" }}>hello from div 2</div>
            <div style={{ backgroundColor: "blue" }}>hello from div 3</div>
        </div>
    );
}

export default App;
