/* eslint-disable react-refresh/only-export-components */
import { io } from "socket.io-client";
import React, { useMemo } from "react";

const SocketContext = React.createContext(null);

export const useSocket = () => {
    return React.useContext(SocketContext);
};

//usememo -> function run nope socket provider -> rerender then

// eslint-disable-next-line react/prop-types
export const SocketProvider = ({ children }) => {
    const socket = useMemo(() => io("http://localhost:8001"), []);
    return (
        <SocketContext.Provider value={{ socket }}>
            {children}
        </SocketContext.Provider>
    );
};
