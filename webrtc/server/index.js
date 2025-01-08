const express = require("express");
const { Server, Socket } = require("socket.io");
const bodyParser = require("body-parser");

const io = new Server({
    cors: true,
});
const app = express();

app.use(bodyParser.json());

const emailToSocketMapping = new Map();
const socketToEmailMapping = new Map();

io.on("connection", (socket) => {
    console.log("new connection");
    //signalling
    socket.on("join-room", (data) => {
        const { roomId, emailId } = data;
        console.log("user ", emailId, "Joined room ", roomId);

        emailToSocketMapping.set(emailId, socket.id);
        socketToEmailMapping.set(socket.id, emailId);
        console.log(emailToSocketMapping);

        socket.join(roomId);
        socket.emit("joined-room", { roomId });
        socket.broadcast.to(roomId).emit("user-joined", { emailId });
    });

    socket.on("call-user", (data) => {
        const { emailId, offer } = data;
        const fromEmail = socketToEmailMapping.get(socket.id);
        const socketId = emailToSocketMapping.get(emailId);
        console.log("callingggggg");
        console.log(socketId, fromEmail, offer);

        socket
            .to(socketId)
            .emit("incomming-call", { fromEmail: fromEmail, offer });

        console.log("chalega");
    });

    socket.on("call-accepted", (data) => {
        const { emailId, ans } = data;
        console.log("emailId is: ", emailId);
        const socketId = emailToSocketMapping.get(emailId);
        console.log("call-accepted-2");
        console.log(ans);
        console.log(socketId);
        socket.to(socketId).emit("call-accepted", { ans });
    });
});

app.listen(8000, () => {
    console.log("http server running");
});

io.listen(8001);
