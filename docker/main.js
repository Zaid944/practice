const express = require("express");

const app = express();

const PORT = process.env.PORT || 9000;

app.get("/", (req, res) => {
    return res.json({
        msg: "hello",
    });
});

app.listen(PORT, () => {
    console.log("server started at port container " + PORT);
});
