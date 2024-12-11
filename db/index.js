const express = require("express");
const app = express();
const z = require("zod");
let numberOfRequests = 0;
let errorCount = 0;

// const schema = z.array(z.number());

const schema = z.object({
    email: z.string(),
    password: z.string(),
    country: z.literal("IN").or(z.literal("US")),
    kidneys: z.array(z.number()),
});

//avg time server is taking to handle requests
function calculateRequests(req, res, next) {
    numberOfRequests++;
    console.log(numberOfRequests);
    next();
}
app.use(calculateRequests);

app.get("/health-checkup", (req, res) => {
    const kidneyId = req.query.id;
    const response = schema.safeParse(kidneyId);
    const username = req.headers.username;
    const password = req.headers.password;
    if (!response.success) {
        res.status(411).json({
            msg: "bad format",
        });
    }
    if (!(username == "zaid" && password == "123")) {
        res.status(400).json({
            msg: "bad user",
            response,
        });
        return;
    }
    if (username == "zaid" && password == "123") {
        if (kidneyId == 1 || kidneyId == 2) {
            res.json({
                msg: "user correct",
                response,
            });
        }
    }
    return res.json({
        response,
    });
});

app.get(
    "/middleware",
    function (req, res, next) {
        console.log("req 1");
        next();
    },
    function () {
        console.log("req 2");
    }
);
app.use(express.json());
app.post("/health-checkup", function (req, res) {
    const kidneys = req.body.kidneys;
    if (!kidneys) {
        return res.json({
            msg: "chla jaa",
        });
    }
    const kidneyLength = kidneys.length;
    res.send("you have " + kidneyLength + " kidneys");
});

// app.use(function (err, req, res, next) {
//     errorCount++;
//     res.json({
//         msg: "something is up with our server",
//     });
// });

// function middleware(req, res, next) {
//     fetch("")
//         .then(next())
//         .catch((err) => {
//             console.log(err);
//         });
// }

app.listen(3000, function () {
    console.log("listening");
});

const schema2 = z.object({
    email: z.string().email(),
    password: z.string().min(8),
});

function validateInput(obj) {
    const resp = schema2.safeParse(obj);
    console.log(resp);
}

validateInput({
    email: "zaid25akhter@gmail.com",
    password: "1234",
});

function middleware() {
    return function (req, res, next) {};
}
app.use(express.json());
app.use(middleware);
app.get("/", function (req, res) {
    throw new Error("error");
});
app.use(function (err, req, res, next) {
    console.log("error");
});
