const mongoose = require("mongoose");
//mongodb+srv://Zaid10Akhter:UutSaEHHx4oZzOKm@cluster0.yi2qy.mongodb.net/todos

mongoose
    .connect(
        "mongodb+srv://Zaid10Akhter:UutSaEHHx4oZzOKm@cluster0.yi2qy.mongodb.net/todos"
    )
    .catch((err) => err);

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);
console.log(todo);
module.exports = {
    todo,
};
