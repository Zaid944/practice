const express = require("express");

function calculateSum(n) {
    let ans = 0;
    for (let i = 0; i <= n; i++) {
        ans += i;
    }
    return ans;
}
const app = express();

app.get("/", function (req, res) {
    const n = req.query.n;                      
    const ans = calculateSum(n);    
    res.send(ans.toString());
});

app.listen(3000, function () {
    console.log("yayy");
});

app.use(express.json());

const users = [
    {
        name: "John",
        kidneys: [
            {
                healthy: false,
            },
        ],
    },
];

app.get("/", function (req, res) {
    const johnKidneys = users[0].kidneys;
    (healthyKidney = 0), (unhealthyKidney = 0);
    for (let i = 0; i < johnKidneys.length; i++) {
        if (johnKidneys[i].healthy) {
            healthyKidney += 1;
        } else {
            unhealthyKidney += 1;
        }
    }
    return res.json({
        healthyKidney,
        unhealthyKidney,
    });
});

app.post("/", function (req, res) {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy,
    });
    return res.json({
        users,
    });
});

app.put("/", function (req, res) {
    for (let i = 0; i < users.length; i++) {
        for (let j = 0; j < users[i].kidneys.length; j++) {
            users[i].kidneys[j].healthy = true;
        }
    }
    return res.json({
        users,
    });
});

app.delete("/", function (req, res) {
    if (!isThereAnyUnhealthyKidney()) {
        return res.status(411).json({
            msg: "why bro?",
        });
    }
    users[0].kidneys = users[0].kidneys.filter(
        (kidney) => kidney.healthy == true
    );
    return res.json({
        users,
    });
});

function isThereAnyUnhealthyKidney() {
    unhealthyKidneys = false;
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (!users[0].kidneys[i].healthy) {
            unhealthyKidney = true;
        }
    }
    return unhealthyKidney;
}
