import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { SocketProvider } from "./providers/Socket";
import { Room } from "./pages/Room";
import { PeerProvider } from "./providers/Peer";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <PeerProvider>
                <SocketProvider>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/room/:roomId" element={<Room />}></Route>
                    </Routes>
                </SocketProvider>
            </PeerProvider>
        </>
    );
}

export default App;
