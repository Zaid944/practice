const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();
app.use(express.json());

let ALL_USERS = [
    {
        username: "harkirat@gmail.com",
        password: "123",
        name: "harkirat singh",
    },
    {
        username: "raman@gmail.com",
        password: "123321",
        name: "Raman singh",
    },
    {
        username: "priya@gmail.com",
        password: "123321",
        name: "Priya kumari",
    },
];

function userExists(username, password) {
    console.log(username, password);
    const user = ALL_USERS.find(
        (user) => user.username == username && user.password == password
    );
    console.log(user);
    if (user) {
        return true;
    } else {
        return false;
    }
}

app.post("/signin", function (req, res) {
    console.log(req.body);
    const username = req.body.username;
    const password = req.body.password;

    if (!userExists(username, password)) {
        return res.status(403).json({
            msg: "User doesnt exist in our in memory db",
        });
    }

    var token = jwt.sign({ username: username }, "shhhhh");
    return res.json({
        token,
    });
});

app.get("/users", function (req, res) {
    const token = req.headers.authorization;
    console.log(token);
    try {
        const decoded = jwt.verify(token, "shhhhh");
        console.log("decoded", decoded);
        const username = decoded.username;
        ALL_USERS = ALL_USERS.filter(
            (user) =>
                decoded.username != user.username 
        );
        return res.json({ ALL_USERS });
    } catch (err) {
        return res.status(403).json({
            msg: "Invalid token",
        });
    }
});

app.listen(3000, function () {
    console.log("listening");
});
