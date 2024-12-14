const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/todo", async function (req, res) {
    const payload = req.body;
    const parsedPayload = createTodo.safeParse(payload);
    if (!parsedPayload.success) {
        return res.status(411).json({
            msg: "sent wrong inputs",
        });
    }
    //put it in mongodb
    const todos = await todo.create({
        title: payload.title,
        description: payload.description,
        completed: false,
    });
    if (todos) {
        return res.json({
            msg: "todo created",
        });
    } else {
        return res.json({ msg: "some errors" });
    }
});

app.get("/todos", async function (req, res) {
    const todos = await todo.find();
    if (todos) {
        return res.json({
            todos: todos,
        });
    } else {
        return res.json({ msg: "some errors" });
    }
});

app.put("/completed", async function (req, res) {
    const payload = req.body;
    const parsedPayload = updateTodo.safeParse(payload);
    if (!parsedPayload.success) {
        return res.status(411).json({
            msg: "sent wrong inputs",
        });
    }

    const todos = await todo.findByIdAndUpdate(req.body.id, {
        completed: true,
    });
    console.log(todos);
    return res.json({
        msg: "todo is marked complete",
    });
});

// app.get("/", (req, res) => {
//     res.json({
//         data: "chl rha hai",
//     });
// });

app.listen(3000, () => {
    console.log("listening");
});
