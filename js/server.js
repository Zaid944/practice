const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

app.get("/myRoute", function (req, res) {
    return res.json({
        message: "mobile",
    });
});

app.listen(3000, function () {
    console.log("listening");
});
