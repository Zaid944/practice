import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useSocket } from "../providers/Socket";

export const Home = () => {
    const navigate = useNavigate();
    const { socket } = useSocket();

    const [emailId, setEmailId] = useState("");
    const [roomId, setRoomId] = useState("");

    const handleRoomJoined = useCallback(
        ({ roomId }) => {
            console.log("room joined", roomId);
            navigate(`/room/${roomId}`);
        },
        [navigate]
    );

    useEffect(() => {
        socket.on("joined-room", handleRoomJoined);
        return () => {
            socket.off("joined-room", handleRoomJoined);
        };
    }, [socket, handleRoomJoined]);

    const handleJoinRoom = () => {
        socket.emit("join-room", { emailId, roomId });
    };

    return (
        <div>
            <div>
                <input
                    value={emailId}
                    onChange={(e) => {
                        setEmailId(e.target.value);
                    }}
                    type="email"
                    placeholder="enter"
                ></input>
                <input
                    value={roomId}
                    onChange={(e) => {
                        setRoomId(e.target.value);
                    }}
                    type="text"
                    placeholder="enter room code"
                ></input>
                <button onClick={handleJoinRoom}>Enter room</button>
            </div>
        </div>
    );
};
